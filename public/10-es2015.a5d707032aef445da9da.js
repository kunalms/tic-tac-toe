(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+P1G":function(t,e,n){"use strict";n.r(e);var a=n("ofXK"),i=n("tyNb"),r=n("M8Jp"),o=n.n(r),c=n("fXoL"),l=n("wZkO"),u=n("XiUz"),f=n("Wp6s"),s=n("znSr"),b=n("1jcm"),d=n("3Pt+"),m=n("kmnG"),g=n("d3UM"),p=n("FKr1"),y=n("bTqV");function v(t,e){if(1&t){const t=c.Ub();c.Tb(0,"div",14),c.bc("click",(function(){c.nc(t);const n=e.index;return c.ec().makeHumanMove(n)})),c.vc(1),c.Sb()}if(2&t){const t=e.$implicit;c.Bb(1),c.xc(" ","X"===t||"O"===t?t:""," ")}}function h(t,e){1&t&&(c.Tb(0,"div"),c.Tb(1,"h3"),c.vc(2,"Your Move"),c.Sb(),c.Sb())}function w(t,e){if(1&t&&(c.Tb(0,"div"),c.Tb(1,"h3"),c.vc(2),c.Sb(),c.Sb()),2&t){const t=c.ec();c.Bb(2),c.wc(t.winner||"Start a new game")}}function M(t,e){if(1&t){const t=c.Ub();c.Tb(0,"button",15),c.bc("click",(function(){return c.nc(t),c.ec().toggleGame(!0)})),c.vc(1,"Start"),c.Sb()}}function k(t,e){if(1&t){const t=c.Ub();c.Tb(0,"button",16),c.bc("click",(function(){return c.nc(t),c.ec().toggleGame(!1)})),c.vc(1,"Reset"),c.Sb()}}const S=function(t){return{"tic-tac-toe":!0,playing:t}},{GameStep:P}=o.a,x=[{path:"",component:(()=>{class t{constructor(){this.gameState=[0,1,2,3,4,5,6,7,8],this.playing=!1,this.computerFirst=!1,this.difficulty="Normal"}ngOnInit(){}toggleGame(t){t!==this.playing&&(this.gameState=[0,1,2,3,4,5,6,7,8],this.winner=void 0,t&&this.computerFirst&&this.makeComputerMove(),this.playing=t)}makeComputerMove(){const t=P(this.gameState,{huPlayer:"X",aiPlayer:"O"},this.difficulty);this.gameState=t.board,t.winner&&(this.winner={huPlayer:"Yay \u{1f64c} You Win!",aiPlayer:"Computer Wins!",draw:"It's a Draw!"}[t.winner],this.playing=!1)}makeHumanMove(t){this.playing&&"number"==typeof this.gameState[t]&&(this.gameState[t]="X",this.makeComputerMove())}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Hb({type:t,selectors:[["app-single"]],decls:27,vars:14,consts:[["mat-tab-nav-bar",""],["fxFlex","50%","mat-tab-link","","routerLink","/game/single",3,"active"],["fxFlex","50%","mat-tab-link","","routerLink","/game/multi",3,"active"],[1,"mat-elevation-z4"],[3,"ngClass"],["class","game-field",3,"click",4,"ngFor","ngForOf"],[2,"padding","0","margin-bottom","0"],[4,"ngIf"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["color","accent","mat-raised-button","",3,"click",4,"ngIf"],[3,"ngModel","disabled","ngModelChange"],["value","Easy"],["value","Normal"],["value","Hard"],[1,"game-field",3,"click"],["color","primary","mat-raised-button","",3,"click"],["color","accent","mat-raised-button","",3,"click"]],template:function(t,e){1&t&&(c.Tb(0,"nav",0),c.Tb(1,"a",1),c.vc(2," Single Player "),c.Sb(),c.Tb(3,"a",2),c.vc(4," Multi Player "),c.Sb(),c.Sb(),c.Tb(5,"mat-card",3),c.Tb(6,"mat-card-content"),c.Tb(7,"div",4),c.tc(8,v,2,1,"div",5),c.Sb(),c.Sb(),c.Sb(),c.Tb(9,"mat-card",6),c.Tb(10,"mat-card-content"),c.tc(11,h,3,0,"div",7),c.tc(12,w,3,1,"div",7),c.tc(13,M,2,0,"button",8),c.tc(14,k,2,0,"button",9),c.Tb(15,"mat-slide-toggle",10),c.bc("ngModelChange",(function(t){return e.computerFirst=t})),c.vc(16,"Computer Moves First"),c.Sb(),c.Tb(17,"mat-form-field"),c.Tb(18,"mat-label"),c.vc(19,"Difficulty"),c.Sb(),c.Tb(20,"mat-select",10),c.bc("ngModelChange",(function(t){return e.difficulty=t})),c.Tb(21,"mat-option",11),c.vc(22,"Easy"),c.Sb(),c.Tb(23,"mat-option",12),c.vc(24,"Normal"),c.Sb(),c.Tb(25,"mat-option",13),c.vc(26,"Hard"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.Bb(1),c.hc("active",!0),c.Bb(2),c.hc("active",!1),c.Bb(4),c.hc("ngClass",c.jc(12,S,e.playing)),c.Bb(1),c.hc("ngForOf",e.gameState),c.Bb(3),c.hc("ngIf",e.playing),c.Bb(1),c.hc("ngIf",!e.playing),c.Bb(1),c.hc("ngIf",!e.playing),c.Bb(1),c.hc("ngIf",e.playing),c.Bb(1),c.hc("ngModel",e.computerFirst)("disabled",e.playing),c.Bb(5),c.hc("ngModel",e.difficulty)("disabled",e.playing))},directives:[l.b,i.d,u.a,l.a,f.a,f.b,a.h,s.a,a.i,a.j,b.a,d.j,d.m,m.b,m.e,g.a,p.g,y.a],styles:["mat-card[_ngcontent-%COMP%]{max-width:400px;margin:2em auto;text-align:center}mat-card-content[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.tic-tac-toe[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.tic-tac-toe[_ngcontent-%COMP%]{width:340px;flex-wrap:wrap}.game-field[_ngcontent-%COMP%]{width:95px;height:95px;margin:8px;background-color:#f0f0f0;line-height:95px;font-size:60px;font-weight:700}.playing[_ngcontent-%COMP%]   .game-field[_ngcontent-%COMP%]{cursor:pointer}button[_ngcontent-%COMP%], mat-slide-toggle[_ngcontent-%COMP%]{margin-bottom:16px}"]}),t})()}];let T=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(x)],i.e]}),t})();var _=n("YUcS");n.d(e,"SingleModule",(function(){return C}));let C=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(e){return new(e||t)},imports:[[a.b,T,f.c,b.b,y.b,m.d,g.b,d.f,l.c,_.a]]}),t})()},GFZ9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var a=e.huPlayer,r=e.aiPlayer;function o(){var n=-99999999,o=void 0;return i.default.getEmptyIndexies(t,e).forEach((function(c){t[c]=r;var l=function n(o,c){var l=i.default.playerWon(t,a)?-10:i.default.playerWon(t,r)?10:0;if(10===Math.abs(l))return l;if(!i.default.isMovesLeft(t,e))return 0;var u=99999999,f=i.default.getEmptyIndexies(t,e);return c?(u*=-1,f.forEach((function(e){t[e]=r;var a=n(o+1,!1);u=Math.max(u,a),t[e]=e})),u):(f.forEach((function(e){t[e]=a;var i=n(o+1,!0);u=Math.min(u,i),t[e]=e})),u)}(0,!1);t[c]=c,l>n&&(o=c,n=l)})),o}function c(){var n=i.default.getEmptyIndexies(t,e);return n[Math.floor(Math.random()*n.length)]}var l,u,f=-1;switch(n){case"Easy":f=c();break;case"Normal":l=o(),u=c(),f=Math.random()<.75?l:u;break;case"Hard":f=o();break;default:throw Error("Difficulty not valid!")}return f};var a,i=(a=n("wEoJ"))&&a.__esModule?a:{default:a}},M8Jp:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("GFZ9")),i=r(n("uw7I"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={ComputerMove:a.default,GameStep:i.default}},uw7I:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var r,o,c,l,u={winner:null,board:null};if(a.default.isGameFinished(t,e)){var f=(c=a.default.playerWon(t,e.huPlayer),l=a.default.playerWon(t,e.aiPlayer),c?"huPlayer":l?"aiPlayer":"draw");u.board=t,u.winner=f}else{var s=(r=(0,i.default)(t,e,n),o=Array.from(t),void 0!==r&&(o[r]=e.aiPlayer),o);if(a.default.isGameFinished(s,e)){var b=a.default.playerWon(s,e.aiPlayer)?"aiPlayer":"draw";u.board=s,u.winner=b}else u.board=s}return u};var a=r(n("wEoJ")),i=r(n("GFZ9"));function r(t){return t&&t.__esModule?t:{default:t}}},wEoJ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return a(t,null,[{key:"playerWon",value:function(t,e){return t[0]===e&&t[1]===e&&t[2]===e||t[3]===e&&t[4]===e&&t[5]===e||t[6]===e&&t[7]===e&&t[8]===e||t[0]===e&&t[3]===e&&t[6]===e||t[1]===e&&t[4]===e&&t[7]===e||t[2]===e&&t[5]===e&&t[8]===e||t[0]===e&&t[4]===e&&t[8]===e||t[2]===e&&t[4]===e&&t[6]===e}},{key:"isGameFinished",value:function(t,e){if(!this.isMovesLeft(t,e))return!0;var n=e.aiPlayer;return!(!this.playerWon(t,e.huPlayer)&&!this.playerWon(t,n))}},{key:"getEmptyIndexies",value:function(t,e){var n=e.huPlayer,a=e.aiPlayer;return t.filter((function(t){return t!==n&&t!==a}))}},{key:"isMovesLeft",value:function(t,e){return 0!==this.getEmptyIndexies(t,e).length}}]),t}();e.default=i}}]);