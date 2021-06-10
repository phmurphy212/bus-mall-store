/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
    option.value = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // DONE: suss out the item picked from the select listd 
  let itemPicked = document.getElementById('items').value;
  console.log(itemPicked);
  // DONE: get the quantity
  let amountPicked = document.getElementById('quantity').value;
  console.log(amountPicked);
  // DONE: using those, add one item to the Cart
  cart.addItem(itemPicked, amountPicked);
}

// DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let span = document.getElementById('itemCount');
  span.textContent = ` : ${cart.items.length} item(s)`;
}

// DONE: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // DONE: Get the item and quantity from the form: add in line 37 contents
  let itemPicked = document.getElementById('items').value;
  console.log(itemPicked);
  let amountPicked = document.getElementById('quantity').value;
  console.log(amountPicked);
  // DONE: Add a new element to the cartContents div with that information
  let p = document.createElement('p');
  p.textContent = `itemPicked : ${itemPicked} amountPicked : ${amountPicked}`;
  cartContents.appendChild(p);
  // window into the dom
  // create element , give content, append to the partent (parent === window into the dom)
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
