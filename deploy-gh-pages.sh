#!/bin/bash
set -e # exit with nonzero exit code if anything fails


if [ $TRAVIS == "true" ]
then
  echo "----> Trevis detected. OK"
else
  echo "----> use 'npm run deploy' instead"
  eixt 1
fi

echo
echo "----> init environment variables"
echo

output_dir="wiki/output/"
tmp_dir="tmp/jermolene.github.io"

echo
echo "----> npm run stage"
echo

# run our compile script, discussed above
npm run stage

echo
echo "----> go to tmp/jermolene.github.io/"
echo


# select the github pages directory
cd $tmp_dir

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "travis-ci@example.com"

echo
echo "----> git add . && git commit ..."
echo


# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add .
git commit -m "Travis automatic deploy to GitHub Pages"

# Push to the working  branch

# git push origin master

