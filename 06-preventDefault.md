# 🧠 `event.preventDefault()` — WHAT IT ACTUALLY DOES

## ⚡ Simple definition

```txt id="def1"
event.preventDefault() stops the browser’s default action for an event.
```

It does NOT stop the event itself—just the browser’s automatic behavior.

---

# 🚨 1. FORM DEFAULT BEHAVIOR (MOST IMPORTANT)

## Without JavaScript:

```html id="form1"
<form action="success.html" method="GET">
  <input name="name">
  <button type="submit">Submit</button>
</form>
```

### What the browser does automatically:

When you click submit:

```txt id="flow1"
1. Collect form data
2. Attach it to URL (GET method) -> URL Address/End Point
3. OR send request (POST method) -> Body of request
4. Reload page / navigate to action URL
```

👉 This is the default behavior.

---

## ❌ Problem in JS apps

If you are using JavaScript:

```js id="js1"
form.addEventListener("submit", (event) => {
  // JS logic
});
```

Without `preventDefault()`:

👉 The page will still reload
👉 Your JS code may never finish properly
👉 You lose control of the flow

---

## ✅ With preventDefault()

```js id="js2"
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Form handled by JS only");
});
```

### Now behavior becomes:

```txt id="flow2"
1. Stop browser reload
2. Run JS logic only
3. Stay on same page
```

---

# 🧠 2. DEFAULT BEHAVIOR BY ELEMENT TYPE

Here’s a clear cheat sheet:

---

## 🟢 FORM

### Default:

```txt id="formdef"
- submits data
- reloads page
- navigates to "action" URL
```

### preventDefault():

```txt id="formstop"
- no reload
- no navigation
- JS controls everything
```

---

## 🔵 ANCHOR (`<a>` links)

### Default:

```txt id="alinkdef"
- navigates to href
```

### Example:

```html id="a1"
<a href="https://google.com">Google</a>
```

### preventDefault():

```txt id="astop"
- link does NOT open
- JS decides what happens
```

Example:

```js id="a2"
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link blocked");
});
```

---

## 🟡 BUTTON

### Default behavior depends on type:

### 1. Inside form (default = submit)

```html id="btn1"
<button>Click</button>
```

👉 behaves like:

```txt id="btnflow"
submit form
```

---

### 2. Explicit button type

```html id="btn2"
<button type="button">Click</button>
```

👉 no submit behavior

---

### preventDefault on button:

* usually NOT needed
* unless inside special event flows

---

## 🟣 INPUT (special cases)

### Example: pressing Enter in form

* triggers submit event
* same default as submit button

---

## 🔴 PAGE NAVIGATION EVENTS

### Example:

* form submit
* link click
* sometimes drag/drop

All can have default browser behavior.

---

# 🧠 3. BIG IDEA (VERY IMPORTANT)

## Without JS control:

```txt id="auto"
Browser decides everything
```

## With preventDefault:

```txt id="control"
JavaScript decides everything
```

---

# 🔁 4. WHY THIS MATTERS IN REAL APPS

Modern apps (React, Vue, Node frontend systems):

👉 almost always use:

```js id="modern"
event.preventDefault();
```

because they want:

* no page reload
* dynamic updates
* API calls instead of navigation
* full control of UI

---

# 🧠 5. SIMPLE MENTAL MODEL

```txt id="model1"
Event happens
   ↓
Browser wants to do default action
   ↓
preventDefault() blocks it
   ↓
Your JS takes control
```

---

# ⚡ 6. ONE-LINE SUMMARY

```txt id="summary"
preventDefault() stops the browser from doing its built-in behavior so JavaScript can handle it instead.
```
