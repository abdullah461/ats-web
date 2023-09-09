(function () {

	'use trict';
// How long you want the animation to take, in ms
const animationDuration = 2000;
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60;
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round( animationDuration / frameDuration );
// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * ( 2 - t );


const numberWithCommas = n => {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');	
}

// The animation function, which takes an Element
const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );
	// Start the animation running 60 times per second
	const counter = setInterval( () => {
		frame++;
		// Calculate our progress as a value between 0 and 1
		// Pass that value to our easing function to get our
		// progress on a curve
		const progress = easeOutQuad( frame / totalFrames );
		// Use the progress value to calculate the current count
		const currentCount = Math.round( countTo * progress );

		// If the current count has changed, update the element
		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = numberWithCommas(currentCount);
		}

		// If we’ve reached our last frame, stop the animation
		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};

// Run the animation on all elements with a class of ‘countup’
const runAnimations = () => {
	const countupEls = document.querySelectorAll( '.countup' );
	countupEls.forEach( animateCountUp );
};




// In Viewed
var elements;
var windowHeight;

function init() {
	elements = document.querySelectorAll('.section-counter');
	windowHeight = window.innerHeight;
}

function checkPosition() {
	var i;
	for (i = 0; i < elements.length; i++) {
		var element = elements[i];
		var positionFromTop = elements[i].getBoundingClientRect().top;
		if (positionFromTop - windowHeight <= 0) {
			if( !element.classList.contains('viewed') ) {
				element.classList.add('viewed');
				runAnimations();
			} else {
				if ( element.classList.contains('viewed') ) {

				}
			}

		}
	}
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

init();
checkPosition();


})()
(function () {
	const second = 1000,
		  minute = second * 60,
		  hour = minute * 60,
		  day = hour * 24;
  
	//I'm adding this section so I don't have to keep updating this pen every year :-)
	//remove this if you don't need it
	let today = new Date(),
		dd = String(today.getDate()).padStart(2, "0"),
		mm = String(today.getMonth() + 1).padStart(2, "0"),
		yyyy = today.getFullYear(),
		nextYear = yyyy + 1,
		dayMonth = "11/4/",
		birthday = dayMonth + yyyy;
	
	today = mm + "/" + dd + "/" + yyyy;
	if (today > birthday) {
	  birthday = dayMonth + nextYear;
	}
	//end
	
	const countDown = new Date(birthday).getTime(),
		x = setInterval(function() {    
  
		  const now = new Date().getTime(),
				distance = countDown - now;
  
		  document.getElementById("days").innerText = Math.floor(distance / (day)),
			document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
		  //do something later when date is reached
		  if (distance < 0) {
			document.getElementById("headline").innerText = "It's my birthday!";
			document.getElementById("countdown").style.display = "none";
			document.getElementById("content").style.display = "block";
			clearInterval(x);
		  }
		  //seconds
		}, 0)
	}());

/* slider show */
var myIndex = 0;
carousel();

function carousel(){
  var i;
  var x = document.getElementsByClassName("slides");
  for(i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  myIndex++;
  if(myIndex > x.length){myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}