let start, end, links;

function generateLinks() {	
	
	const link = document.getElementById('url').value;
	let length = /-0{0,2}1-1080p/.exec(link)[0].length;
	
	let array = [];
	for (let iterator = start; iterator <= end; iterator++ ) 
		array.push(link.replace(/-0{0,2}1-1080p/, stringGenerator(iterator, length)));
	
	links = array;
	
	displayLinks();
	
}

function displayLinks() {
	
	document.getElementById('linkButtons').innerHTML = links.map( (link,index) => 
		'<a href="'+link+'" class="btn btn-primary" role="button" style="margin: 2px; width: 125px">Episode '+( start + index )+'</a>'
	).join('');
	document.getElementById('linkList').innerHTML = links.join('<br>');
	document.getElementById('btnGroup').style.display = 'block';
	document.getElementById('btnGroup').setAttribute('class', 'dl-flex ml-auto');
	
}	

function validateInput() {
	
	start = Number(document.getElementById('start-ep').value);
	end = Number(document.getElementById('end-ep').value);
	
	if(!/^((https?)|(ftp):\/\/)\S*(-0{0,2}1-1080p)\S*\.\S+/.test(document.getElementById('url').value) || /\s/g.test(document.getElementById('url').value))
		setMessage(false, 'URL is not valid -_-, look at the documentation for a list of supported URLs');
	
	else if(Number(document.getElementById('start-ep').value) < 1)
		setMessage(false, 'Episodes start from 1, you know... -_-');
	
	else if(Number(document.getElementById('end-ep').value) < Number(document.getElementById('start-ep').value))
		setMessage(false, 'Start episode should be less than or equal to end episode -_-');
	
	else 
		setMessage(true, 'So far so good');
}

function setMessage(safe, message) {
	
	var classes = document.getElementById('info-text').getAttribute('class');
	
	if(safe) {
		classes = classes.replace('danger', 'success');
		generateLinks();
	}
	
	else {
		classes = classes.replace('success', 'danger');
		document.getElementById('linkButtons').innerHTML = 'Enter the right inputs!';
		document.getElementById('linkList').innerHTML = 'Enter the right inputs!';
		document.getElementById('btnGroup').style.display = 'none';
	}
	
	document.getElementById('info-text').setAttribute('class', classes);
	document.getElementById('info-text').innerHTML = message;
}

function stringGenerator(num, len) {
	var generated = String(num)+'-1080p';
	while (generated.length < len - 1) generated = '0' + generated;
	return '-'+generated;
}

function download() {
	
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent( links.join('\n') ));
	element.setAttribute('download', 'list.txt');

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

function copy() {
	
	navigator.clipboard.writeText(links.join('\n'));
	
}
