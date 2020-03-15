var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');
socketIo = require('socket.io');
path = require('path');

var isProduction = process.env.NODE_ENV === 'production';

// Create global app object
var app = express();

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static('public'));

app.use(session({secret: 'conduit', cookie: {maxAge: 60000}, resave: false, saveUninitialized: false}));

if (!isProduction) {
    app.use(errorhandler());
}
mongoose.connect(process.env.TIC_TAC_TOE_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(error => handleError(error));
mongoose.set('debug', true);


require('./models/User');
require('./config/passport');

app.use(require('./routes'));

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
    app.use(function (err, req, res, next) {
        console.log(err.stack);

        res.status(err.status || 500);

        res.json({
            'errors': {
                message: err.message,
                error: err
            }
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        'errors': {
            message: err.message,
            error: {}
        }
    });
});


// finally, let's start our server...
var server = app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + server.address().port);
});

var rooms = 0;
var io = socketIo(server);

io.on('connection', function (socket) {
    console.log('a user connected');

    /**
     * Create a new game room and notify the creator of game.
     */
    socket.on('createGame', function (data) {
        console.log('createGame request', data);
        socket.join('room-' + ++rooms);
        socket.emit('newGame', {name: data.name, room: 'room-' + rooms});
    });

    /**
     * Connect the Player 2 to the room he requested. Show error if room full.
     */
    socket.on('joinGame', function (data) {
        console.log('joinGame request', data);
        var room = io.nsps['/'].adapter.rooms[data.room];
        if (room && room.length === 1) {
            console.log(data.room);
            socket.join(data.room);
            console.log('playerJoined', data.room);
            socket.broadcast.to(data.room).emit('playerJoined', {name: data.name});
        } else {
            socket.emit('err', {message: 'Sorry, The room is full!'});
        }
    });

    /**
     * Complete the game setup and share the info on both the sides
     */
    socket.on('gameSetup', function (data) {
        socket.broadcast.to(data.gameState.room).emit('setupComplete', data.gameState);
    });

    /**
     * Handle the turn played by either player and notify the other.
     */
    socket.on('playTurn', function (data) {
        socket.broadcast.to(data.room).emit('turnPlayed', {
            tile: data.tile,
            room: data.room
        });
    });

    /**
     * Notify the players about the victor.
     */
    socket.on('gameEnded', function (data) {
        socket.broadcast.to(data.room).emit('gameEnd', data);
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    })
});
