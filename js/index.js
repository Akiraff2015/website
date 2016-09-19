'use strict'

$(function() {
	// Name container in array
	var arrName = ["programming", "os", "ide", "vcs", "lib", "software", "misc", "language"];

	// Default style: display none
	arrName.forEach(function(name) {
		$("#" + name + "-container").css("display", "none");
	});

	var clickFunction = function(name) {
		$("#" + name + "-caret").click(function() {
			$("#" + name + "-container").fadeToggle("slow");
		});
	}

	// Assign each element to clickFunction()
	arrName.forEach(function(name) {
		clickFunction(name);
	});

});
