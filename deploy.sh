function readJson() {
  UNAMESTR=$(uname)
  if [[ "$UNAMESTR" == 'Linux' ]]; then
    SED_EXTENDED='-r'
  elif [[ "$UNAMESTR" == 'Darwin' ]]; then
    SED_EXTENDED='-E'
  fi

  VALUE=$(grep -m 1 "\"${2}\"" ${1} | sed ${SED_EXTENDED} 's/^ *//;s/.*: *"//;s/",?//')

  if [ ! "$VALUE" ]; then
    echo "Error: Cannot find \"${2}\" in ${1}" >&2
    exit 1
  else
    echo $VALUE
  fi
}

# do a build for frontend
cd frontend || exit 1
npm run build-prod
cd .. || exit 1
# get the current version
VERSION=$(readJson package.json version) || exit 1

# commit evrything under current build version and push to origin.
echo "committing latest changes in $1 build $VERSION"
git add public
git commit -m "created $1 build - app version_$VERSION"
git push origin

# deploy the changes to aws
eb deploy

# increment the version
npm version $1
VERSION=$(readJson package.json version) || exit 1
echo "creating new build $VERSION"
git add . -A
git commit -m "created new version_$VERSION"
git push origin
