# Frontend
# 🎨 Change Heading Color using Promise

This is a simple JavaScript project that demonstrates how to use **Promises** to change the color of a heading (`<h1>`) step by step with delay.

---

## 🚀 Features

* Change heading color sequentially (Red → Blue → Green)
* Uses **JavaScript Promises**
* Demonstrates **asynchronous behavior**
* Clean and easy-to-understand code

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── Change-multiple-color-using-promise.js
└── README.md
```

---

## 🧠 Concept Used

* JavaScript Promise
* `.then()` chaining
* `.catch()` error handling
* `setTimeout()` for delay
* DOM Manipulation

---

## 📜 How It Works

1. A function `changeColor(color, delay)` is created.
2. It returns a **Promise**.
3. Inside the Promise:

   * `setTimeout()` is used to delay the color change.
   * `resolve()` is called after changing the color.
4. Multiple `.then()` are chained to change colors one after another.

---

## 💻 Code Example

```js
function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.querySelector('h1').style.color = color;
            resolve("color changed");
        }, delay);
    });
}

changeColor("red",1000)
.then(()=> changeColor("blue",1000))
.then(()=> changeColor("green",1000))
.catch(()=> console.log("Error occurred"));
```

---

## ▶️ How to Run

1. Download or clone this repository
2. Open `index.html` in your browser
3. Watch the heading color change automatically

---

## 📸 Output

* After 1 second → Red
* After 2 seconds → Blue
* After 3 seconds → Green

---

## ⚠️ Error Handling

* If any error occurs, `.catch()` will handle it
* You can modify the function to use `reject()` for testing errors

---

## 📚 Learning Outcome

After this project, you will understand:

* What is a **Promise**
* How `.then()` chaining works
* How to handle async operations in JavaScript

---

## 🔥 Future Improvements

* Add more colors
* Use `async/await`
* Add button to start animation
* Add UI controls

---

## 🙌 Author

**Sourav Jana**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and keep learning 🚀
