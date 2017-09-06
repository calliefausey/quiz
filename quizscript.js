$(document).ready(function() {
 $("#start").click(function() {
	$("#Go!").hide();
	$("#p1").show();
	$("#Aimg").slideDown();
	});
	$("#show1").click(function() {
	$("#show1").hide();
	$("#a1").show();
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
