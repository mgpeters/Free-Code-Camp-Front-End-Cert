$(document).foundation()
$(document).ready(function(){
	//$().on('click', function(){
	  $.ajax( {
	  	dataType: 'json',
		url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=futon&prop=info&origin=*&inprop=url&utf8=&format=json',
      	success: function(data) {
      		console.log(data.query.search[1].title);
        	var title = [],
        		snippet = [],
        		pageUrl = [];
        		/*for (x = 0; x < data.query.search.length; x + 1){
        			title[x] = data.query.search[x].title;
        			snippet[x] = data.query.search[x].snippet;
        			pageUrl[x] = 'https://en.wikipedia.org/wiki/' + title[x];
        		}*/
        		console.log(title);
        		console.log(snippet);
        		console.log(pageUrl);
      		},
      	error: alert("There's an error on the page"),
      	cache: false
    	});
	//})  

})