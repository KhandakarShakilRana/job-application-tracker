# JavaScript DOM & Events FAQ

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

- **`getElementById`** → selects an element with a **unique ID**.
- **`getElementsByClassName`** → selects **multiple elements** with the same class.
- **`querySelector`** → selects the **first matching element** using CSS selectors (`#idname` for ID, `.classname` for class).
- **`querySelectorAll`** → selects **all matching elements** using CSS selectors (`.classname`, `p`, `button`, etc.).

---

## 2. How to create and insert a new element into the DOM

1. Create a new element:

```js
const paragraph = document.createElement("p"); // can be div, h1, section, etc.
```

2. Add content:

```js
paragraph.innerText = "This is my Paragraph";
```

3. Select parent container:

```js
const container = document.getElementById("container");
```

4. Insert the new element:

```js
container.appendChild(paragraph);
```

---

## 3. What is Event Bubbling and how does it work

**Event Bubbling**: When an event occurs on a **child element**, it automatically **propagates up** to parent elements, triggering their event handlers.

**Example:**

```html
<body>
  <div id="myDiv">
    <button id="myBtn">Click here</button>
  </div>
</body>
```

```js
const myDiv = document.getElementById("myDiv");
const myBtn = document.getElementById("myBtn");

myDiv.addEventListener("click", function() {
    console.log("Div Clicked");
});

myBtn.addEventListener("click", function() {
    console.log("Button Clicked");
});
```

**Result:** Clicking the button logs:

```
Button Clicked
Div Clicked
```

- The event **starts at the child** and **bubbles up** to the parent.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

- **Event Delegation** allows you to **attach a single event listener** to a parent element to handle events on its **child elements** using `event.target`.
- **Benefits:**
  - Saves adding multiple event listeners.
  - Works for dynamic elements added later.
  - Makes code cleaner and more efficient.

---

## 5. Difference between `preventDefault()` and `stopPropagation()`

- **`preventDefault()`** → stops the **default browser action** of an element.
- **`stopPropagation()`** → stops the **event from bubbling** to parent elements.

