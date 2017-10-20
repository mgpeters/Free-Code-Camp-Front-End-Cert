$(document).foundation()
$(document).ready(function(){
	//$().on('click', function(){
	  $.ajax( {
	  	dataType: 'json',
		url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=futon&prop=info&origin=*&inprop=url&utf8=&format=json',
      	success: function(data) {
      		console.log(data);
        	var title = [],
        		snippet = [],
        		pageUrl = [],
        		x = 0;
        		/*for (x; x < data.query.search.length; x + 1){
        			title[x] = data.query.search.title;
        			snippet[x] = data.query.search.snippet;
        			pageUrl[x] = 'https://en.wikipedia.org/wiki/' + title;
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