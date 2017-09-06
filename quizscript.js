$(document).ready(function() {
 $("#Go!").click(function() {
	$("#Go!").hide();
	$("#p1").show();
	});
	$("#p1").click(function() {
	$("#Go!").hide();
	$("#a1").show();
	$("#Aimg").slideDown();
	$("#next1").show();
	});

	$("#next1").click(function() {
	$("#next1").hide();
	$("#q1").hide();
	$("#a1").hide();
	$("#q2").show();
	$("#show2").show();
	});
	$("#show2").click(function() {
	$("#show2").hide();
	$("#a2").show();
	$("#next2").show();
	});
