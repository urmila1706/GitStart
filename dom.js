var itemList = document.querySelector('#items')
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);
//#1.parent Element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);
//#2.createChild
console.log(itemList.childNodes);
console.log(itemList.children[0]);
itemList.children[2].style.backgroundColor = 'green';
//#3.firstChild
console.log(itemList.firstChild);
//4.firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';
//#5.lastChild
console.log(itemList.lastChild);
//#6.lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello World';
//#7.nextSibling
console.log(itemList.nextSibling);
//#8.nextElementSibling
console.log(itemList.nextElementSibling);
//#9.previousSibling
console.log(itemList.previousSibling);

 itemList.previousElementSibling.style.color = 'red';
 itemList.previousElementSibling.textContent = 'HEllo word';
 //#10.previousElementSibling
console.log(itemList.previousElementSibling);
//#11.createElement
var newDiv = document.createElement('div');
console.log(newDiv);
newDiv.className = 'hi';
newDiv.id = 'hello2';
//#12.setAttribute
newDiv.setAttribute('title','Hello Div');
//#13.createTextNode
var newDivText= document.createTextNode('HEllo Word');
//#14.appendChild

newDiv.appendChild(newDivText);

var container =  document.querySelector('header .container');
var h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);