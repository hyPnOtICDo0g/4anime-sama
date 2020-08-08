function generateLinks() {
	var classes = document.getElementById("info-text").getAttribute("class");
	var status = 0;
	if(!/^((https?)|(ftp):\/\/)\S*(-0{0,2}1-1080p)\S*\.\S+/.test(document.getElementById("url").value) || /\s/g.test(document.getElementById("url").value)) {
		document.getElementById("info-text").innerHTML = "URL is not valid -_-, look at the documentation for a list of supported URLs";
		classes = classes.replace("success", "danger");
		status = 0;
	}
	else if(Number(document.getElementById("start-ep").value) < 1){
		document.getElementById("info-text").innerHTML = "Episodes start from 1, you know... -_-";
		classes = classes.replace("success", "danger");
		status = 0;
	}
	else if(Number(document.getElementById("end-ep").value) < Number(document.getElementById("start-ep").value)){
		document.getElementById("info-text").innerHTML = "Start episode should be less than or equal to end episode -_-";
		classes = classes.replace("success", "danger");
		status = 0;
	}
	else {
		document.getElementById("info-text").innerHTML = "So far so good";
		classes = classes.replace("danger", "success");
		status = 1;
	}
	document.getElementById("info-text").removeAttribute("class");
	document.getElementById("topBar").removeAttribute("class");
	document.getElementById("info-text").setAttribute("class", classes);
	if(status) {					var c;
		var s = Number(document.getElementById("start-ep").value);
		var e = Number(document.getElementById("end-ep").value);
		var c = /-0{0,2}1-1080p/.exec(document.getElementById("url").value)[0].length-7;
		var arr=[];
		for(var i=s; i<=e; i++) arr.push(stringGenerator(i, c));
		arr = arr.map(function(value) {
			return "-"+value+"-1080p";
		});
		var link = document.getElementById("url").value;
		document.getElementById("linkButtons").innerHTML = arr.map(function(value){
			var elink = link.replace(/-0{0,2}1-1080p/, value);
			var out = '<a href="'+elink+'" class="btn btn-primary" role="button" style="margin: 2px; width: 125px">Episode '+value.replace(/-/g,'').replace('1080p','')+'</a>';
			return out;
		}).join("\n");
		document.getElementById("linkList").innerHTML = arr.map(function(value){
			return link.replace(/-0{0,2}1-1080p/, value);
		}).join("<br>");
		document.getElementById("topBar").style.display = "block";
		document.getElementById("topBar").setAttribute("class", "dl-flex ml-auto");
	}
	else {
		document.getElementById("linkButtons").innerHTML = "Enter the right inputs!";
		document.getElementById("linkList").innerHTML = "Enter the right inputs!";
		document.getElementById("topBar").style.display = "none";
	}
}

function stringGenerator(num, len) {
	var generated = String(num);
	while (generated.length < len) generated = '0' + generated;
	return generated;
}

function download() {
	var s = Number(document.getElementById("start-ep").value);
	var e = Number(document.getElementById("end-ep").value);
	var c = /-0{0,2}1-1080p/.exec(document.getElementById("url").value)[0].length-7;
	var arr=[];
	for(var i=s; i<=e; i++) arr.push(stringGenerator(i, c));
	arr = arr.map(function(value) {
		return "-"+value+"-1080p";
	});
	var link = document.getElementById("url").value;
	var cont = arr.map(function(value){
		return link.replace(/-0{0,2}1-1080p/, value);
	}).join("\n");
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent( cont ));
	element.setAttribute('download', 'list.txt');

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

function copy() {
	var s = Number(document.getElementById("start-ep").value);
	var e = Number(document.getElementById("end-ep").value);
	var c = /-0{0,2}1-1080p/.exec(document.getElementById("url").value)[0].length-7;
	var arr=[];
	for(var i=s; i<=e; i++) arr.push(stringGenerator(i, c));
	arr = arr.map(function(value) {
		return "-"+value+"-1080p";
	});
	var link = document.getElementById("url").value;
	var cont = arr.map(function(value){
		return link.replace(/-0{0,2}1-1080p/, value);
	}).join("\n");
	navigator.clipboard.writeText(cont);
}