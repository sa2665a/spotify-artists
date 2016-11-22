$(document).ready(function(){

		function showArtists (response) {
					console.log("success!");
					console.log(response);

				

				var artistArray = response; 

					artistArray.artists.items.forEach(function (theArtist){
						
					var imagesURL = "http://www.tea-tron.com/antorodriguez/blog/wp-content/uploads/2016/04/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef-584x276.png";
					if(theArtist.images.length>0) {
						imagesURL = theArtist.images[0].url;
					}
					var html = "<li>" + theArtist.name + "</li>" + "<img src="+ imagesURL + ">";

					$('.ArtistList').append(html);

					})

		}
			function handleError(error){
					console.log("error!");
					console.log(error.responseText);
		}


	$('button').on('click', function(event) {
			event.preventDefault();
			
			var newArtist= $('#name').val();
		  var searchUrl= "https://api.spotify.com/v1/search?type=artist&query="+ newArtist 
		  

			$.ajax ({
				type:"GET",
				url: searchUrl,
				success: showArtists,
				error: handleError
			});	
		});

});