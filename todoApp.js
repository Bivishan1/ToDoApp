
// let ourForm = document.getElementById('myForm');//representing our HTML element through ID for JS document.
// let myField = document.getElementById('myField');

// ourForm.addEventListener('submit',(e)=>(e.preventDefault(),
//   console.log(myField.value) ));

//That e parameter is going to listen bunch of information from addEventListen through submit event on that function. 
//Simply, to say, that e parameter is going to hold all the information when we click on form button(jaba submit garxau);
//When we submit the data, the JS is going to send our data off somewhere, so to prevent the data go off somewhere, to prevent 
//from go off, we use preventDefault() method. 

//another practie.
// let ourForm = document.getElementById('myForm');
// let ourField = document.getElementById('myField');
// let ourList = document.getElementById('myList');

// ourForm.addEventListener('submit',(e) => (e.preventDefault(),
// 	createList(ourField.value)));

// function createList(x) {
// 	let list = `<li>${x} <button onclick="deletelist(this)">Delete</button></li>`;
// 	ourList.insertAdjacentHTML('beforeend',list);
// 	ourField.value = " ";
// 	ourField.focus();
	
// }

// function deletelist(oneElement) {
// 	oneElement.parentElement.remove();
// 	// alert("Delete Responded");
// }

let ourForm = document.getElementById('myForm');
let ourField = document.getElementById('myField');
let ourList = document.getElementById('myList');

ourForm.addEventListener('submit', (e)=> (e.preventDefault(),
	createList(ourField.value)));

	function createList(x) {
		let myList = `<li>${x} <button onclick='deletelist(this)'>Delete</button></li>`;
		ourList.insertAdjacentHTML('beforeend',myList);
		ourField.value = ' ';
		ourField.focus();
	}

	function deletelist(d) {
		d.parentElement.remove();
		alert('delete Responded');
	}