'use strict'

$(function() {
	var programming_click = 0;
	var operating_click = 0;
	var ide_click = 0;
	var vcs_click = 0;
	var lfa_click = 0;
	var software_click = 0;
	var misc_click = 0;
	var lang_click = 0;

	// Programming Language DIV container
	$("#programming-container").css("display", "none");
	$("#caret-programming").click(function() {
		if ( programming_click === 0) {
			$("#programming-container").fadeIn("slow");
			 programming_click++;
		}

		else {
			 $("#programming-container").fadeOut("slow");
			 programming_click = 0;
		}
	});

	// Operating System DIV container
	$("#os-container").css("display", "none");
	$("#caret-os").click(function() {
		if (operating_click === 0) {
			$("#os-container").fadeIn("slow");
			operating_click++;
		}

		else {
			$("#os-container").fadeOut("slow");
			operating_click = 0;
		}
	});

	// IDE Div container
	$("#ide-container").css("display", "none");
	$("#caret-ide").click(function() {
		if (ide_click === 0) {
			$("#ide-container").fadeIn("slow");
			ide_click++;
		}

		else {
			$("#ide-container").fadeOut("slow");
			ide_click = 0;
		}
	});

	//VCS Div container
	$("#vcs-container").css("display", "none");
	$("#caret-vcs").click(function() {
		if (vcs_click === 0) {
			$("#vcs-container").fadeIn("slow");
			vcs_click++;
		}

		else {
			$("#vcs-container").fadeOut("slow");
			vcs_click = 0;
		}
	});

	//Library Div container
	$("#lib-container").css("display", "none");
	$("#caret-lib").click(function() {
		if (lfa_click === 0) {
			$("#lib-container").fadeIn("slow");
			lfa_click++;
		}

		else {
			$("#lib-container").fadeOut("slow");
			lfa_click = 0;
		}
	});

	// Software Product Div container
	$("#software-container").css("display", "none");
	$("#caret-software").click(function() {
		if (software_click === 0) {
			$("#software-container").fadeIn("slow");
			software_click++;
		}

		else {
			$("#software-container").fadeOut("slow");
			software_click = 0;
		}
	});

	//Miscellanous Div container
	$("#misc-container").css("display", "none");
	$("#caret-misc").click(function() {
		if (misc_click === 0) {
			$("#misc-container").fadeIn("slow");
			misc_click++;
		}

		else {
			$("#misc-container").fadeOut("slow");
			misc_click = 0;
		}
	});

	//Language Div container
	$("#language-container").css("display", "none");
	$("#caret-language").click(function() {
		if (lang_click === 0) {
			$("#language-container").fadeIn("slow");
			lang_click++;
		}

		else {
			$("#language-container").fadeOut("slow");
			lang_click = 0;
		}
	});
});