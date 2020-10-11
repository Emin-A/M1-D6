// EXAMINE THE DOCUMENT OBJECT in browser console:
// console.dir(document);

// 'document.' will access any of the object
// console.log(document.domain);
// console.log(document.title);
// console.log(document.doctype);

//Change the h1 Header ""

var headerTitle = document.querySelector("#header-title");
headerTitle.textContent = "The Best Store In The World!";

// Change the address in the footer :
//WORKS !!!
function footAddress() {
  var addressFooter = document.querySelector("#address");
  addressFooter.textContent = "Hamdije Kresevljakovica 13";

  // addressFooter.document.style.background = "#A0E7E5"  
}
console.log(footAddress());

// /*EXERCISE 1
// Create a new welcome alert message when the page
// successfully loads
// */
function loadAlert() {
  var redAlert = window.alert("Welcome to our shop!");
  
}
console.log(loadAlert());


/* EXERCISE 2
      Write a function to change the Title of the page in 
      something else (execute the function in browser 
        console)
  */
//WORKS !!!!!!!!!
function addTitle() {
  var title = document.getElementById('header-title');
  title.textContent = "EPIC PHONES";
  
  
}
console.log(addTitle());


// EXERCISE 3.:
//Write a function to change the page background color
//WORKS !!!
function setBackground() {
  document.getElementsByTagName("body");
  document.body.style.background= "#A0E7E5";
}
console.log(setBackground());
