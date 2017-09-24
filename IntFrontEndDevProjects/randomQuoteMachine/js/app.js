$(document).foundation()
$(document).ready(function(){
	$('#getMessage').on('click', function(e){
		console.log("click success")
	  e.preventDefault();
	  $.ajax( {
		url: 'http://www.quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      	success: function(data) {
        	var post = data.shift(); // The data is an array of posts. Grab the first one.
        	$('#quote-title').text(post.title);
        	console.log("function success");
        	$('#quote-content').text(post.content);
        		console.log("data success");
        	// If the Source is available, use it. Otherwise hide it.
        	if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          		$('#quote-source').html('Source:' + post.custom_meta.Source);
        	} else {
          		$('#quote-source').text('');
        		}
      		},
      		cache: false
    	});
	});
});