# http://tiddlywiki.com/tiddlywiki-eu-meetup-2016

This is the source code for the website for the TiddlyWiki European Meetup 2016

It is created using TiddlyWiki running under Node.js, generating static HTML files that are hosted in GitHub Pages.

## Contents

This repository contains the following top level folders:

* **wiki**: the content of the wiki
* **wiki-server**: an indirected version of the wiki suitable for using in the client-server configuration

## Batch Scripts

The batch scripts assume a directory layout like this:

```

-+- **Parent**
 |
 +--+- **tiddlywiki-eu-meetup-2016**
    |
    +- **jermolene.github.io**
```

In other words, the folder containing this repository should be a sibling of a folder called "jermolene.github.io" that will contain the output static files.


## How to Contribute

 - Fork this repo and `jermolene.github.io` 

```
git clone ... jermolene.github.io repo
git clone ... this repo

cd <to working directory>
npm install
npm run ...
```

possible commands are:

* **npm run build**: build all the components of the site, leaving them in the wiki output folder
* **npm start**: serve the main wiki at http://127.0.0.1:8080  or
* **npm run serve**: serve the main wiki at http://127.0.0.1:8080
* **npm run stage**: copy all the output components across to the "jermolene.github.io" folder

```
$ npm run

Lifecycle scripts included in tiddlywiki-eu-meetup-2016:
  start
    tiddlywiki wiki-server/ --server 8080 $:/core/save/all text/plain text/html "" "" 0.0.0.0  # TODO check windows!!
  test
    echo ---- no tests atm ----

available via `npm run-script`:
  serve
    npm start
  prebuild
    rimraf wiki/output/*
  build
    tiddlywiki wiki --verbose --build
  prestage
    npm run build
  stage
    npm run stage:mkdir && npm run stage:rm && npm run stage:cp
  stage:mkdir
    mkdir -p ../jermolene.github.io/tiddlywiki-eu-meetup-2016
  stage:rm
    rimraf ../jermolene.github.io/tiddlywiki-eu-meetup-2016/*
  stage:cp
    cp -R wiki/output/* ../jermolene.github.io/tiddlywiki-eu-meetup-2016

```

### Prepare a pull request

- Fork this repo
- Make sure you know the "Rules for Contribugint"

```
git clone <from your github repo>

git checkout -b <your feature branch here>
git add .
git commit -m "some useful text here"
git push origin <your feature branch here>

# create a pull request
```

## Rules for Contributing 

Just to be sure. This is a proof of concept software, with a lot of room for improvements. So absolutely everything can and will be changed. ... All templates will be renamed!!

see: https://github.com/Jermolene/TiddlyWiki5/blob/master/contributing.md



