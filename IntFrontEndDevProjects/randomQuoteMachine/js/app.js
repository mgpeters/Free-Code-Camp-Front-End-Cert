$(document).foundation()
$(document).ready(function(){
	$("#getMessage").on("click", function(){
		$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback", function(json){
			$(".message").html(JSON.stringify(json));
			//html(json[0].content + "<p>— " + json[0].title + "</p>")
		});
	});
});