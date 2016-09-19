'use strict'

$(function() {
	var click = 0;

	// Name container in array
	var arrName = ["programming", "os", "ide", "vcs", "lib", "software", "misc", "language"];

	// Default style: display none
	arrName.forEach(function(name) {
		$("#" + name + "-container").css("display", "none");
	});

	var clickFunction = function(name) {
		$("#" + name + "-caret").click(function() {
			if (click === 0) {
				$("#" + name + "-container").fadeIn("slow");
				click++;
			}

			else {
				$("#" + name + "-container").fadeOut("slow");
				click = 0;
			}
		});
	}

	// Assign each element to clickFunction()
	arrName.forEach(function(name) {
		clickFunction(name);
	});

});
