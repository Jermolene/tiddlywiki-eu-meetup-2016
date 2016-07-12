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

* **bld.sh**: build all the components of the site, leaving them in the wiki output folder
* **serve.sh**: serve the main wiki at http://127.0.0.1:8080
* **stage.sh**: copy all the output components across to the "jermolene.github.io" folder
