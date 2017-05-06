//This is AJAX
//JSON allows you to nest arrays in arrays and objects in objects
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
	var myRequest = new XMLHttpRequest ();
// use GET to download info from an URL and Post to send
	myRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
//use onload to tell what should happen when the data is loaded
	myRequest.onload = function(){
		if(myRequest.status >= 200 && myRequest.status <400) {
			var myData = JSON.parse(myRequest.responseText);
			renderHTML(myData);
		} else {
			console.log("We connected to the server but, it returned an error.")
		}
	};
	
	myRequest.onerror = function(){
		console.log("Connection error");
	};
	
	myRequest.send();
	pageCounter++;
	if (pageCounter > 3) {
		btn.classList.add("hide-me");
	}	
});
 
function renderHTML(data) {
	var htmlString = "";
	
	for (i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
		for(ii = 0; ii < data[i].foods.likes.length; ii++) {
			if(ii == 0) {
				htmlString += data[i].foods.likes[ii];
			} else {
				htmlString += " and " + data[i].foods.likes[ii];
			}
		}
		htmlString += ' and dislikes ';
		for(ii = 0; ii < data[i].foods.dislikes.length; ii++) {
			if(ii == 0) {
				htmlString += data[i].foods.dislikes[ii];
			} else {
				htmlString += " and " + data[i].foods.dislikes[ii];
			}
		}	
		htmlString += '.</p>';
	}
	animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

$('body').attr('data-spy', 'scroll');
  $('body').attr('data-target', '#navbar-collapse-scroll');

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
