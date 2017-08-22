height = 300;
versionNr = 0;
projectName = sessionStorage.getItem("pro_name");
mode = false;

function version(name, type, changes) {
	versionNr += 1;
	if(versionNr === 1) {
		localStorage.setItem("latest",name);
		var myStringArray = changes;
		var arrayLength = myStringArray.length;
		for (var i = 0; i < arrayLength; i++) {
			var element = document.createElement("li");
			element.innerHTML = myStringArray[i];
			document.getElementById("changes").appendChild(element);
		}
	}
	
	var arrayLength = changes.length;
	changesList = "";
	for (var i = 0; i < arrayLength - 1; i++) {
		changesList += "'" + changes[i] + "',";
	}
	changesList += "'" + changes[arrayLength - 1] + "'";

	if (type === "snapshot") {
		color = "-webkit-linear-gradient(92deg,rgb(0,240,240),rgb(0,80,80));-webkit-background-clip: text;-webkit-text-fill-color: transparent;-webkit-font-smoothing: antialiased;"
		var element = document.createElement("div");
		element.setAttribute("id", versionNr);
		element.setAttribute("class", "snapshot")
		element.setAttribute("onclick","openPage('" + name + "',[" + changesList + "])");
		document.getElementById("versions").appendChild(element);
        
		var element = document.createElement("h1");
		element.innerHTML = "snapshot " + name;
		document.getElementById(versionNr).appendChild(element);
		
		var element = document.createElement("h1");
		element.innerHTML = "snapshot " + name;
		element.setAttribute("id","snapshot");
		document.getElementById("allChanges").appendChild(element);
		
		var element = document.createElement("ul");
		element.setAttribute("id","allChanges" + versionNr);
		document.getElementById("allChanges").appendChild(element);
		
		var arrayLength = changes.length;
		for (var i = 0; i < arrayLength; i++) {
			var element = document.createElement("li");
			element.innerHTML = changes[i];
			document.getElementById("allChanges" + versionNr).appendChild(element);
		}
	}
	
	if (type === "pre") {
		color = "-webkit-linear-gradient(92deg,rgb(240,100,0),rgb(0,80,80));-webkit-background-clip: text;-webkit-text-fill-color: transparent;-webkit-font-smoothing: antialiased;"
		var element = document.createElement("div");
		element.setAttribute("id", versionNr);
		element.setAttribute("class", "pre-release")
		element.setAttribute("onclick","openPage('" + name + "',[" + changesList + "])");
		document.getElementById("versions").appendChild(element);
		
		var element = document.createElement("h1");
		element.innerHTML = "pre-release " + name;
		document.getElementById(versionNr).appendChild(element);
		
		var element = document.createElement("h1");
		element.innerHTML = "pre-release " + name;
		element.setAttribute("id","pre");
		document.getElementById("allChanges").appendChild(element);
		
		var element = document.createElement("ul");
		element.setAttribute("id","allChanges" + versionNr);
		document.getElementById("allChanges").appendChild(element);
		
		var arrayLength = changes.length;
		for (var i = 0; i < arrayLength; i++) {
			var element = document.createElement("li");
			element.innerHTML = changes[i];
			document.getElementById("allChanges" + versionNr).appendChild(element);
		}
		
		
	}
	
	if (type === "release") {
		color = "-webkit-linear-gradient(92deg,rgb(0,240,0),rgb(0,80,0));-webkit-background-clip: text;-webkit-text-fill-color: transparent;-webkit-font-smoothing: antialiased;"
		var element = document.createElement("div");
		element.setAttribute("id", versionNr);
		element.setAttribute("class", "release")
		element.setAttribute("onclick","openPage('" + name + "',[" + changesList + "])");
		document.getElementById("versions").appendChild(element);
		
		var element = document.createElement("h1");
		element.innerHTML = "release " + name;
		document.getElementById(versionNr).appendChild(element);
		
		var element = document.createElement("h1");
		element.innerHTML = "release " + name;
		element.setAttribute("id","release");
		document.getElementById("allChanges").appendChild(element);
		
		var element = document.createElement("ul");
		element.setAttribute("id","allChanges" + versionNr);
		document.getElementById("allChanges").appendChild(element);
		
		var arrayLength = changes.length;
		for (var i = 0; i < arrayLength; i++) {
			var element = document.createElement("li");
			element.innerHTML = changes[i];
			document.getElementById("allChanges" + versionNr).appendChild(element);
		}
	}
}

function openPage(name, changes) {
	var arrayLength = changes.length;
	changesList = "";
	for (var i = 0; i < arrayLength; i++) {
		changesList += "<li>" + changes[i] + "<li>";
	}
	var fileName = "'projects/versions/" + projectName + "%20" + name + ".zip'";
	var opened = window.open('');
	opened.document.write("<html><head><title>" + projectName + " " + name + "</title><link rel='icon' href='../assets/logo_black.png'><style>.header h1 {background-image: " + color + "}</style><link rel='stylesheet' media='screen and (min-device-width: 800px)'href='../assets/css/changes.css'><link rel='stylesheet' media='screen and (max-device-width: 800px)' href='../assets/css/changes.m.css'></head><body><div class='header'><h1>" + projectName + " " + name + "</h1></div><div class='changes'><h1>changes</h1><ul id='changes'>" + changesList + "</ul><button onclick=location.href=" + fileName + ">download</button></div></body></html>");
}

function change() {
	if (mode === false) {
		document.getElementById("allChanges").setAttribute("style","display:block;");
		document.getElementById("versions").setAttribute("style","display:none;");
		mode = true;
		return;
	}
	
	if (mode === true) {
		document.getElementById("versions").setAttribute("style","display:block;");
		document.getElementById("allChanges").setAttribute("style","display:none;");
		mode = false;
		return;
	}
}
//localStorage.setItem('changes',"a.1");
//changes = ["text","text2"];
//localStorage.setItem("a.1",JSON.stringify(changes));
//var name = "a.1";
//var opened = window.open('');opened.document.write("<html><head><title>" + name + "</title><style>html {width: 100vw;overflow-x: hidden;}@font-face {font-family: Roboto-Thin;src: url(http://rster2002.github.io/assets/css/fonts/roboto/Roboto-Thin.ttf);}.header {width: 110%;height: 500px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);margin-left: -10px;margin-top: -100px;text-align: left;}.header h1 {line-height: 500px;font-size: 150px;font-family: 'Roboto-Thin';padding-left: 60px;background-image: -webkit-linear-gradient(92deg,rgb(0,240,240),rgb(0,80,80));-webkit-background-clip: text;-webkit-text-fill-color: transparent;-webkit-font-smoothing: antialiased;}.changes {font-size: 30px;font-family: 'Roboto-Thin';text-align: center;}</style></head><body><div class='header'><h1>" + name + "</h1></div><div class='changes'><h1>changes</h1><ul id='changes'></ul></div><script>name = localStorage.getItem('changes');changes = localStorage.getItem(name);var myStringArray = changes;var arrayLength = myStringArray.length;for (var i = 0; i < arrayLength; i++) {var element = document.createElement('li');element.innerHTML = myStringArray[i];document.getElementById('changes').appendChild(element);}</script></body></html>");