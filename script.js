//SGN your JS code here. If required.
let elem = document.getElementById("level");
let count = 2;
while(elem.parentNode.tagName.toLowerCase() !== 'html'){
	count ++;
	elem = elem.parentNode;
	
}


alert("The level of the element is: " + count);