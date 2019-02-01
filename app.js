// Grabbing elements and HTML collection
var titles = document.getElementsByClassName('title');
var lis = document.getElementsByTagName('li');

// console.log(titles);
// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

// console.log(lis);
// console.log(Array.isArray(Array.from(titles)));

 // Getting elements by class and iterating through them

// for( var i=0; i<= titles.length; i++ ){
//   console.log(titles[i]);
// }
//
// Array.from(titles).forEach(function(item){
//   console.log(item);
// })

// The Query Selector method

// const wrap = document.querySelector('#wrapper');
// var book3 = document.querySelector('#book-list li:nth-child(2) .name');
// var books = document.querySelector('#book-list li .name');
//
//
// console.log(wrap);
// console.log(book3);
// console.log(books);
//
// books = document.querySelectorAll('#book-list li .name');
// console.log(books);
//
// Array.from(books).forEach(function(book){
//   console.log(book);
// })


/*
  Change the content on the html tags
  Use of .textContent
  Use of innerHTML
*/

// var books = document.querySelectorAll('#book-list li .name');  // Returns NodeList so we can use forEach Directly
//
// books.forEach(function(book){
//   console.log(book.textContent); // Prints the text of the element tag
//   book.textContent += ' my books';
// })

// const bookList = document.querySelector('#book-list');
// // console.log(bookList);
// // We want to append the new tag to the bookList
// bookList.innerHTML += '<p> This is my to <strong>READ</strong> list</p>';



/* Node Type in HTML and what are different nodes.
  Node Type
  Node Name
  hasChildNodes
  cloneNode
*/

// var banner = document.querySelector('#page-banner');
// console.log('This is a node is of type : ', banner.nodeType);
// console.log('This is a node is of name : ', banner.nodeName);
// console.log('This has child nodes: ', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true); // If we put false then we only get DIV and no child nodes
// console.log(clonedBanner);



/* Traversing the DOM to parent node/ element or childNode or children
  And Traversing the sibling nodes
*/

// const bookList = document.querySelector('#book-list');

// Immediate parent

// console.log('Parent Node is ', bookList.parentNode.parentNode);
// console.log('Parent element is ', bookList.parentElement);
//
// console.log('Child Nodes are :', bookList.childNodes); // Gives text because of the line break
// console.log('Child Nodes are (without text in the List) :', bookList.children);

// Check for Sibling nodes

// console.log('book-list next Sibling Node is ', bookList.nextSibling);
// console.log('book-list next Sibling element is ', bookList.nextElementSibling);
//
// console.log('book-list previous Sibling Node is ', bookList.previousSibling);
// console.log('book-list next Sibling element is ', bookList.previousElementSibling);
//
// bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> Gift these if you get a chance!'



/* Attaching Event listeners to different tags */

// var btns = document.querySelectorAll('#book-list .delete'); // get the element which we want to attach listener to.
                                                              //  In this case the .delete class
// //
// btns.forEach(function(btn){
//   btn.addEventListener('click', function(e){     // Each button is attached with the click event
//     const li = e.target.parentElement;           // we want to remove the li associated with which delete button we click
//     li.parentNode.removeChild(li)               // this will remove the li inside the <ul> tag and
//   });
// });                                            // Drawback of this method is that it will be expensive task to attach each button with event listeners



/*
  Event Bubbling and using it in deleting the books
  We will assign event to the ul tag and when the delete button is clicked,
  event will bubble up to the ul and then we can delete the li associated to the event
*/

var list = document.querySelector('#book-list ul');

/*
  We are using the concept of Event Bubbling to attach the event to UI.
  Advantage: attaching the event to <ul> will help us delete any new <li> attached to book-list
*/
list.addEventListener('click', function(e){
  if(e.target.className === 'delete'){          // We want to get where did the click happened, so className
    console.log(e.target);
    const li = e.target.parentElement;         // this is the li which is the parent to the delete and we want to delete it.
    console.log(li);
    //li.parentNode.removeChild(li);
    list.removeChild(li);

  }    // Now this is good because if we have to add another book to the list, we can delete it unlike the previous event listener.
})

/* Interacting with forms and how we handle the submit button
  -> There are two forms in our application. One on the top and one to add the books.
  -> in console write document.forms -> returns forms in our app.
  -> to access we can either do document.forms[0] --- for first form element
  -> document.forms['<by class-name>'] better to use cause easier to track.
  -> At the endof this we will knowhow to attach submit event listener to the form.
*/

// add book

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
  // Prevent the default behaviour of submitting form i.e refresh
  e.preventDefault();

  // To extract the value(input text that we are entering) from the form we selected(addForm)
  const value = addForm.querySelector('input[type="text"]').value;
  // console.log(value);

  // create element to add to the DOM with the value.
  // we have to check for the elements needed i.e-> li and 2 spans
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // Once we have created the element we need to appended it to the exact place.
  // first we append span to li and then we will append li to the respective ul
  li.appendChild(bookName);     // We have to make sure we follow the sequennce we append
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // add content inside the elements before we can append
  deleteBtn.textContent =  'delete';
  bookName.textContent = value;

  // add classes to the above elements
  // we can get add by li.className += " name " but this is not a good idea
  // Instead we use .classList.add
  // We can also use the generic way of .getAttribute('class') and set .setAttribute('class', 'new name')
  // if we need to remove attribute .removeAttribute('class')
  // if we want to check if the element as an attribute .hasAttribute.
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');
})
