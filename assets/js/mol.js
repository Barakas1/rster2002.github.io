pot = 9050;
total = 24400;
next = "May 14, 2017 00:00:00"
			// Set the date we're counting down to
			document.getElementById("timer").innerHTML = "Onbepaalt";
			var countDownDate = new Date(next).getTime();

			// Update the count down every 1 second
			var x = setInterval(function() {

			  // Get todays date and time
			  var now = new Date().getTime();

			  // Find the distance between now an the count down date
			  var distance = countDownDate - now;

			  // Time calculations for days, hours, minutes and seconds
			  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			  // Display the result in the element with id="demo"
			  /* document.getElementById("timer").innerHTML = days + "d " + hours + "h "
			  + minutes + "m " + seconds + "s "; */

			  // If the count down is finished, write some text 
			  if (distance < 0) {
				clearInterval(x);
				document.getElementById("timer").innerHTML = "";
			  }
			}, 1000);
	
function update(page) {
	document.getElementById("pot").innerHTML = pot + ",-"
	document.getElementById("pot-total").innerHTML = "van de " + total + ",-"
	if (page === "pot") {
		if (total !== 0) {
			result = Math.round((pot / total) * 100)
			document.getElementById("total").innerHTML = "Percentage: " + result + "%"
			if (result !== 100) {
				document.getElementById("100").style = "color:red;"
			}
		} else {
			document.getElementById("total").style = "color:red;"
			document.getElementById("total").innerHTML = "Er is nog niet gespeeld"
		}
	}
}

function marge(marge) {
	if (result >= marge) {
		document.getElementById(marge).style = "color: lawngreen;"
	}
}

function player(username, number, inGame) {
	console.log("called player function with: " + username + " as " + number);
	document.getElementById("player" + number + "text").innerHTML = username;
	if (inGame === false) {
		document.getElementById("player" + number + "text").style = "color:red;"
		document.getElementById("player" + number + "img").src = "assets/images/mol/" + username + "_out.png";
	} else {
		document.getElementById("player" + number + "img").src = "assets/images/mol/" + username + ".png";
 	}
}

interval = Math.floor((Math.random() * 5000) + 1000);
window.setInterval(function(){
	random = Math.floor((Math.random() * 5) + 1);
	switch(random) {
		case 1:
			var front = ""
			var back = "E MOL"
				document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
				setTimeout(function(){
					document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
					setTimeout(function(){
						document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
							setTimeout(function(){
								document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
								document.getElementById("header-title").innerHTML = "DE MOL"
							}, 50);
					}, 50);
				}, 50);
			break;
			
		case 2:
			var front = "D"
			var back = " MOL"
				document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
				setTimeout(function(){
					document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
					setTimeout(function(){
						document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
							setTimeout(function(){
								document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
								document.getElementById("header-title").innerHTML = "DE MOL"
							}, 50);
					}, 50);
				}, 50);
			break;
			
		case 3:
			var front = "DE "
			var back = "OL"
				document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
				setTimeout(function(){
					document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
					setTimeout(function(){
						document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
							setTimeout(function(){
								document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
								document.getElementById("header-title").innerHTML = "DE MOL"
							}, 50);
					}, 50);
				}, 50);
			break;
			
		case 4:
			var front = "DE M"
			var back = "L"
				document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
				setTimeout(function(){
					document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
					setTimeout(function(){
						document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
							setTimeout(function(){
								document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
								document.getElementById("header-title").innerHTML = "DE MOL"
							}, 50);
					}, 50);
				}, 50);
			break;
			
		case 5:
			var front = "DE MO"
			var back = ""
				document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
				setTimeout(function(){
					document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
					setTimeout(function(){
						document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
							setTimeout(function(){
								document.getElementById("header-title").innerHTML = front + String.fromCharCode(Math.floor((Math.random() * 64) + 33)) + back;
								document.getElementById("header-title").innerHTML = "DE MOL"
							}, 50);
					}, 50);
				}, 50);
			break;
	}
}, interval);
function number() {
	document.getElementById("result").innerHTML = String.fromCharCode(Number(document.getElementById("number").value))
}