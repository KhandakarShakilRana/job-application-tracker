1 .What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 

with getElementById means we can select the element with a unique ID name.

with getElementsByClassName means we can select multiple element under the same class name.

with querySelector we can select both with id or class like we select in css for id '#idname' for class '.classname' and querySelector can select only select one element if we have multiple element with same classname ,it can only selects the first one. 

with querySelectorAll we can select all the element by putting the class name '.classname' or any Tag (p/h1/button) this selects all the element available in the html 

2.How do you create and insert a new element into the DOM? 

lets say we have a empty container in our html and to insert a new paragraph element we declare a veriable like this 

const paragraph = document.createElement("p") // we can put any TagName here (div/h1/section) 

now we can edit the content by typing 

paragraph.innerText = "This is my Paragraph"

now we can push our new element to its parent by we selecting the container by ID 

const container = document.getElementById("container") now we can insert our element with append child method
 
 container.appendChild(paragraph) 

3 . What is Event Bubbling? And how does it work?

lets say we have two event on both parent and child 
<body>
 <div id="mydiv"> 
 <button id="mybtn">Click here</button> 
 </div> 
 </body> 
 
 const myDiv = document.getElementById("myDiv"); 
 const myBtn = document.getElementById("myBtn"); 
 myDiv.addEventListener("click", function() {
  console.log("Div Clicked");
}); 

  myBtn.addEventListener("click", function() { 
    console.log("Button Clicked"); 
}); 

now if we cliked on the button the console will show both "div Clicked" and "btn Clicked" this is event bubbling like any event happens in child it triggers parent event too.

4 . What is Event Delegation in JavaScript? Why is it useful? 

we create a function that will help us handle multiple child element from parent element using event.target this saves us typing multiple event listeners 

5. What is the difference between preventDefault() and stopPropagation() methods? 

preventDefault() stops the default actions stopPropagation() stops the event bubbling