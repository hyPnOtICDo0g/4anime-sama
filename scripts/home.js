// Specifies the numbers of the start and end episodes, as well as array of
// episode links as global variables so they can be conviniently accessed
var start, end, links;

/* 
 * Iterates over numbers from start to end and generates links for each
 */
function generateLinks() {	
	
	var link = document.getElementById('link').value;
	var length = /-0{0,2}1-1080p/.exec(link)[0].length;
	
	var array = [];
	for (var iterator = start; iterator <= end; iterator++ ) 
		array.push(link.replace(/-0{0,2}1-1080p/, stringGenerator(iterator, length)));
	
	links = array;
	
	displayLinks();
	
}

/* 
 * Generates a button for every link
 */
function makeButton(link, index) {
	
	return '<a href="'+link+'" class="uk-button uk-button-default" role="button" style="margin: 2px; width: 150px">Episode '+( start + index )+'</a>';
	
}

/* 
 * Once links are generated, displays a preview of the same with buttons for 
 * each link
 */
function displayLinks() {
	
	document.getElementById('buttons').innerHTML = links.map(makeButton).join('');
	document.getElementById('list').innerHTML = links.join('<br>');
	
}	

/* 
 * Checks that the inputs specified are correct, ie, link is supported, start
 * number is positive, end number is greater than start number
 */
function validateInput() {
	
	start = Number(document.getElementById('startEp').value);
	end = Number(document.getElementById('endEp').value);
	
	if(!/^((https?)|(ftp):\/\/)\S*(-0{0,2}1-1080p)\S*\.\S+/.test(document.getElementById('link').value) || /\s/g.test(document.getElementById('link').value))
		setMessage('link', 'Oh rats, I cannot use this URL. Please have a look at the documentation.');
	
	else if(start < 1)
		setMessage('startEp', 'So far there has been none, who start their episodes with a number less than one!');
	
	else if(end < start)
		setMessage('endEp', 'Life always goes forward, so must you. Make sure end episode is greater than or equal to start episode');
	
	else 
		setMessage(false, 'You have earned the spell, click on the GENERATE button and I shall cast it for you');
}

/* 
 * Sets the message for the user specifying which inputs are invalid, if any,
 * else fires the generator
 */
function setMessage(id, message) {
	
	['link', 'startEp', 'endEp'].forEach(element => document.getElementById(element).style = null);
	
	if(id) {
		document.getElementById(id).style.color = '#FF0000';
		document.getElementById('generate').setAttribute('hidden', null);
	}
	
	else {
		document.getElementById('generate').removeAttribute('hidden');
	}
	
	document.getElementById('message').innerHTML = message;
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
 * and devares it afterward
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
