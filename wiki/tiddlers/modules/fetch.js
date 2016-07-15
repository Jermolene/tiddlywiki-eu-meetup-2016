/*\
title: $:/core/modules/commands/fetch.js
type: application/javascript
module-type: command

Command to fetch tiddlers from a wiki at a given URL

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.info = {
	name: "fetch",
	synchronous: false
};

var Command = function(params,commander,callback) {
	this.params = params;
	this.commander = commander;
	this.callback = callback;
};

Command.prototype.execute = function() {
	var self = this,
		http = require("http");
	if(this.params.length < 1) {
		return "Missing url";
	}
	var url = self.params[0],
		filter = self.params[1] || "";
	http.get(url).on("response",function(response) {
	    var body = "",
	    	i = 0;
	    process.stdout.write("Reading " + url + ": ");
	    response.on("data",function(chunk) {
	        i++;
	        body += chunk;
	        process.stdout.write(".");
	    });
	    response.on("end",function() {
	        process.stdout.write("\n");
	        self.processBody(filter,body);
	        self.callback(null);
	   	});
	   	response.on("error",function(e) {
			console.log("Error on GET request: " + e);
			self.callback(e);
	   	});
	});
	return null;
};

Command.prototype.processBody = function(filter,body) {
	// Deserialise the HTML file and put the tiddlers in their own wiki
	var self = this,
		incomingWiki = new $tw.Wiki(),
		tiddlers = this.commander.wiki.deserializeTiddlers("text/html",body,{});
	$tw.utils.each(tiddlers,function(tiddler) {
		incomingWiki.addTiddler(new $tw.Tiddler(tiddler));
	});
	// Filter the tiddlers to select the ones we want
	var filteredTitles = incomingWiki.filterTiddlers(filter).join(",");
	// Import the selected tiddlers
	incomingWiki.each(function(tiddler,title) {
		if(filteredTitles.indexOf(title) !== -1) {
			self.commander.wiki.importTiddler(tiddler);
		}
	});
};

exports.Command = Command;

})();
