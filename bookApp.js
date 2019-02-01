
const list = document.querySelector('#book-list ul');

// delete a book from the list.
list.addEventListener('click', function(e) {
    if(e.target.className === 'delete'){
      const li = e.target.parentElement;
      list.removeChild(li);
    }
})

// add book a book to the list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
  // Prevent the default behaviour of submitting form i.e refresh
  e.preventDefault();

  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add content
  deleteBtn.textContent =  'delete';
  bookName.textContent = value;

  // add classes to the above elements
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append content
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
})

// Hide the book list

const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e){
  if (hideBox.checked){
    list.style.display = 'none';
  }
  else {
    list.style.display = 'inline';
  }
})
