$(document).foundation()
$(document).ready(function(){
	$("#getMessage").on("click", function(){
		$(".message").html("Test Complete - Message Received");
	});
});