$(document).ready(function(){
	$("h1").click(function(){
		$("p").toggle();
	});
});


$(document).ready(function(){
	$("#demo").click(function(){
		$("#demo").toggleClass("add1");
	});
	$("#test").click(function(){
		$("#test").toggleClass("add2");
	});


	$("#qwinix").click(function(){
		$("#qwinix").toggleClass("add3");
	});
});
