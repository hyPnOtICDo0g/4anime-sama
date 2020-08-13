// Specifies the numbers of the start and end episodes, as well as array of
// episode links as global variables so they can be conviniently accessed
let start, end, links;

/* 
 * Iterates over numbers from start to end and generates links for each
 */
function generateLinks() {	
	
	const link = document.getElementById('url').value;
	let length = /-0{0,2}1-1080p/.exec(link)[0].length;
	
	let array = [];
	for (let iterator = start; iterator <= end; iterator++ ) 
		array.push(link.replace(/-0{0,2}1-1080p/, stringGenerator(iterator, length)));
	
	links = array;
	
	displayLinks();
	
}

/* 
 * Once links are generated, displays a preview of the same with buttons for 
 * each link
 */
function displayLinks() {
	
	document.getElementById('linkButtons').innerHTML = links.map( (link,index) => 
		'<a href="'+link+'" class="btn btn-primary" role="button" style="margin: 2px; width: 125px">Episode '+( start + index )+'</a>'
	).join('');
	document.getElementById('linkList').innerHTML = links.join('<br>');
	document.getElementById('btnGroup').style.display = 'block';
	document.getElementById('btnGroup').setAttribute('class', 'dl-flex ml-auto');
	
}	

/* 
 * Checks that the inputs specified are correct, ie, link is supported, start
 * number is positive, end number is greater than start number
 */
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

/* 
 * Sets the message for the user specifying which inputs are invalid, if any,
 * else fires the generator
 */
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

/* 
 * Generates the string that will be replaced while generating the links
 */
function stringGenerator(num, len) {
	var generated = String(num)+'-1080p';
	while (generated.length < len - 1) generated = '0' + generated;
	return '-'+generated;
}

/* 
 * Creates a temporary element with UTF-8 content encoded link, clicks on it
 * and deletes it afterward
 */
function download() {
	
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent( links.join('\n') ));
	element.setAttribute('download', 'list.txt');

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

/* 
 * Sets clipboard to the list of links
 */
function copy() {
	
	navigator.clipboard.writeText(links.join('\n'));
	
}
