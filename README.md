# 🧠 Neuro-Train – Web Dev II Final Project

## 📌 Project Overview

**Neuro-Train** is a fully functional, interactive, DOM-based web application developed using **Vanilla JavaScript, HTML5, and CSS3**. The project serves as a brain-training hub that combines multiple mini-games designed to improve reaction time, focus, typing speed, and logical thinking.

This project strictly follows the **Web Dev II – Final Project Submission Guidelines** and demonstrates strong command over **core JavaScript, DOM manipulation, event-driven programming, and client-side state handling**, without using any frontend frameworks or libraries.

---

## 🎯 Problem Statement

In day-to-day life, users often want to sharpen cognitive abilities such as reaction speed, attention span, and accuracy through short, engaging activities. Neuro-Train addresses this problem by providing a **single, unified platform** that hosts multiple brain-training games with meaningful interaction and instant feedback.

---

## 🧩 Features Implemented

### 🏠 Main Dashboard (Home Screen)

* Central hub to access all available games
* Built using **CSS Grid and Flexbox** for layout
* Click-based navigation to individual game pages
* **Random Game Selector**:

  * Clicking the red *Random* button highlights a random game card
  * Implemented using JavaScript class toggling and DOM traversal

---

### ⚡ Reaction Time Game

* Simulates real-world reaction testing using random delays
* Traffic-light inspired indicator system
* Measures **reaction time in milliseconds**
* Tracks and displays the **lowest (best) reaction time**
* Prevents early clicks and provides clear user feedback

---

### 🔢 Guess the Number Game

* Random number generation between **1 and 20**
* Score system that decreases with incorrect guesses
* **High score tracking** during the session
* Dynamic background color feedback:

  * Green for correct guess
  * Red for incorrect guess

#### 🕵️ Hidden Easter Egg – Shift Key Feature

* A **hidden keyboard-based feature** is implemented
* After typing a number, pressing the **Shift key** secretly sets the generated random number to the user’s input
* This feature is intentionally undocumented in the UI and serves as an easter egg to demonstrate advanced event handling and keyboard interaction

---

### 👁️ Eye Pointer (Target Click Game)

* Time-based click-the-target game (30 seconds)
* Dot position changes dynamically within a bounded game area
* Score increases on each successful click
* Record score tracking for the session
* Demonstrates continuous DOM updates and position calculations

---

### ⌨️ Typing Test Game

* Random sentence generation from a predefined dataset
* Character-by-character validation while typing
* Visual feedback for:

  * Correct characters
  * Incorrect characters
* Real-time timer
* Automatic **Words Per Minute (WPM)** calculation at completion

---

## 🧠 DOM Concepts Used

* `document.querySelector()` and `querySelectorAll()`
* Dynamic element creation using `document.createElement()`
* DOM traversal and conditional rendering
* Class manipulation using `classList.add()` / `classList.remove()`
* Inline style updates via JavaScript
* Keyboard, mouse, click, and input event handling

---

## ⚙️ Application Logic & State Handling

* Each game maintains its **own independent state**, such as:

  * Scores
  * Timers
  * Records / highscores
* State is reflected instantly in the DOM
* Timers handled using `setInterval()` and `setTimeout()`
* Randomized behavior implemented using `Math.random()`
* Clean resets on restart or new-game actions

---

## 🧭 How to Navigate & Operate the Website

1. Open **`index.html`** in any modern web browser
2. From the dashboard:

   * Click on any game card to start that game
   * OR press the red **Random** button to let the app suggest a game
3. Inside any game:

   * Follow the on-screen instructions
   * Use the **red Back button** to return to the main dashboard

Each game is self-contained and does not require page reloads during normal use.

---

## 🛠️ Technology Stack

* **HTML5** – Semantic structure
* **CSS3** – Styling, layout, responsiveness, animations
* **Vanilla JavaScript (ES6+)** – Application logic and DOM manipulation

❌ No frameworks (React, Angular, Vue) or libraries (jQuery) used

---

## 📁 Project Structure

```
index.html
style.css
script.js
reaction.html
reactiongame.css
reactiongame.js
guess.html
guess.css
guess.js
point.html
point.css
point.js
type-test.html
type-test.css
type-test.js
```

---

## 🧪 Edge Case & Error Handling

* Prevents actions before game start
* Handles empty or invalid inputs gracefully
* Prevents multiple timers from running simultaneously
* Blocks premature user actions (e.g., early reaction clicks)

---

## 🎨 UI / UX Considerations

* Clear visual and color-based feedback
* Retro, pixel-inspired theme for consistency
* Logical user flow across all pages
* Basic responsiveness for smaller screen sizes

---

## 🚀 Steps to Run the Project

1. Download or clone the repository
2. Open `index.html` in a web browser
3. No additional installation or setup required


---


## 👤 Author

**Krishna Bhatia**
Web Dev II – Batch 2029

---

> *Neuro-Train proves that well-structured, framework-free JavaScript applications can deliver rich interactivity and real-world usability.*
