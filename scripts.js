function removeLine(tr){
	tr.remove();
}

function addResultsOnTable(text){
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	tr.appendChild(td);
	tr.setAttribute("onclick", "removeLine(this)");
	document.querySelector('#tabres tbody').appendChild(tr);
	var newText = document.createTextNode(text);
	tr.firstChild.appendChild(newText);
}

const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);

function getFormValue(event) {
	event.preventDefault();    

	const a = form.querySelector('[name="a"]').value,
	b = form.querySelector('[name="b"]').value,
	c = form.querySelector('[name="c"]').value;
	
	var d = b * b - 4 * a * c;
	if (d < 0){
		addResultsOnTable("Результат: корни не являются действительными");		
	} else if (d === 0){
		var x = - b / 2 * a
		addResultsOnTable("Результат: x = " + x);			
	} else if (d > 0){
		var x1 = (- b - d) / 2 * a
		var x2 = (- b + d) / 2 * a
		addResultsOnTable("Результат: x1 = " + x1 + " x2 = " + x2);			
	}
}