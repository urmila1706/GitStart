//console.dir(document);
// console.log(document.domain);
//console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.all);
// console.log(document.all[10]);
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'GoodBye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
//var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// //titles[0].textContent = 'hello';
// titles[0].style.fontWeight = 'bold';
// titles[0].style.color = 'green';

// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green';

// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight = 'bold';
// }
var li = document.getElementsByTagName('li');
li[1].style.backgroundColor = 'yellow';
li[1].textContent = 'Hello';
li[1].style.fontWeight = 'bold';


for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight = 'bold';
}

