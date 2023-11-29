$(document).ready(function () {
	// 1
	$("p").text("Змінений текст");
	$("#task1").addClass("highlight");
	$("li").addClass("list-item");
	// 2
	$(".highlight").css("color", "red");
	$(".list-item").css("background-color", "lightgrey");
	// 3
	$(".button1").click(function () {
		$(".highlight").fadeIn(3000);
	})
	// 4
	$("p:last").text("Новий зміненний текст")
	// 5
	$(".button2").click(function () {
		$(".list-item").remove();
	})
});