$(document).foundation()
$(document).ready(function(){
	$().on('click', function(){
	  $.ajax( {
		url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json",
      	success: function(data) {
        	
        			
      
      		},
      	cache: false
    	});
	})  

})