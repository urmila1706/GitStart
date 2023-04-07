var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit' , addItem);
itemList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
    
    var newItem = document.getElementById('item');
    var li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode('newItem'));

let editButton = document.createElement("button");
  //Adding The Classes to it
  editButton.classList = "btn btn-danger btn-sm float-right";
  //Adding the Text Content
  editButton.appendChild(document.createTextNode("Edit"));
  //Appending to List
  li.appendChild(editButton);

  itemList.appendChild(li);

  var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('X'));
li.appendChild(deleteBtn);
itemList.appendChild(li);


}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}



