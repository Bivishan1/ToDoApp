// let ourForm = document.getElementById('myForm');
// let ourList = document.getElementById('myList');
// let ourField = document.getElementById('myField')

// ourForm.addEventListener('submit',(e)=> {e.preventDefault(),
// 	createList(ourField.value)});

// function createList(x) {
// 	let myList = `<li>${x}<button>Delete</li>`;
// 	ourList.insertAdjacentHTML('beforeend',myList);
// }

// let ourForm = document.getElementById('myForm');
// let ourList = document.getElementById('myList');
// let ourField = document.getElementById('myField');

// ourForm.addEventListener('submit',(e)=>(e.preventDefault(),
// 	createList(ourField.value)));

// function createList(a)	{
// 	let mylist = `<li>${a} <button onclick='deletelist(this)'>Delete </button>`
// 	ourList.insertAdjacentHTML('beforeend',mylist);
// 	ourField.value=' ';
// 	ourField.focus();
// }

// function deletelist(d)	{
// 	d.parentElement.remove();
// }

let ourForm = document.getElementById('myForm');
let ourList = document.getElementById('myList');
let ourField = document.getElementById('myField');

ourForm.addEventListener('submit',(e)=> {e.preventDefault(),
createList(ourField.value)
});

function createList(x)	{
let myList = `<li>${x} <button onclick="deleteList(this)">Delete</button></li>`
	ourList.insertAdjacentHTML('beforeend',myList);
	ourField.value = ' ';
	ourField.focus();
}

function deleteList(d) {
	d.parentElement.remove();
}



























