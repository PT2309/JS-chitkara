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
// //
// btns.forEach(function(btn){
//   btn.addEventListener('click', function(e){     // Each button is attached with the click event
//     const li = e.target.parentElement;           // we want to remove the li associated with which delete button we click
//     li.parentNode.removeChild(li)               // this will remove the li inside the <ul> tag and
//   });
// });


/*
  Event Bubbling and using it in deleting the books
*/

var list = document.querySelector('#book-list ul');

/*
  We are using the concept of Event Bubbling to attach the event to UI.
  Advantage: attaching the event to <ul> will help us delete any new <li> attached to book-list
*/
list.addEventListener('click', function(e){
  if(e.target.className === 'delete'){
    console.log(e.target);
    const li = e.target.parentElement;
    console.log(li);
    // list.removeChild(li);

  }
})
