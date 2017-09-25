$(document).foundation()
$(document).ready(function(){
	$('#getMessage').on('click', function(e){
	  e.preventDefault();
	  $.ajax( {
		url: 'http://www.quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      	success: function(data) {
        	var post = data.shift(), // The data is an array of posts. Grab the first one.
        		title = post.title,
        		str = post.content,
        		quote = str.replace("<p>",'').replace("</p>", '')
        			.replace("&#8217;", "'").replace("&#8230;", "...").replace("&#8220;", '"')
        				.replace("&#8221", '"').replace("<br />", "");
        		console.log(quote);
        	$('.twitter-share-button').on('click', function(){
        		if(quote.length >= 141){
        			return alert("This quote has too many characters");
        		}
        	    if(quote.length <= 140){
        	    	$(this).attr('href', 'https://twitter.com/intent/tweet?text=' + '"' + quote + '"' + " - " + title);
        			}
        		});
        	$('#quote-title').text(post.title);
        	$('#quote-content').html(post.content);
        	// If the Source is available, use it. Otherwise hide it.
        	if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          		$('#quote-source').html('Source: ' + post.custom_meta.Source);
        	} else {
          		$('#quote-source').text('');
        		}
      		},
      		cache: false
    	});
	});
});