# 🧱 `<div>` (Block Element)

A `<div>` is a **block-level container**.

### 🔑 Behavior:

* Takes up **full width**
* Starts on a **new line**
* Used for **layout and sections**

### ✅ Example:

```html id="d6x1af"
<div style="background-color: lightblue;">
  This is a div
</div>

<div style="background-color: lightgreen;">
  Another div
</div>
```

👉 Output:

* Each div appears on its **own line**
* Each stretches across the page

---

# 🔤 `<span>` (Inline Element)

A `<span>` is an **inline container**.

### 🔑 Behavior:

* Takes only **as much width as needed**
* Stays **in the same line**
* Used for **styling small parts of text**

### ✅ Example:

```html id="j9m2ks"
<p>
  This is a <span style="color: red;">red</span> word.
</p>
```

👉 Output:

* Only the word **“red”** is styled
* Everything stays in one line

---

# ⚖️ Key Differences

| Feature      | `<div>`         | `<span>`      |
| ------------ | --------------- | ------------- |
| Display type | Block           | Inline        |
| New line     | Yes             | No            |
| Width        | Full width      | Content width |
| Use case     | Layout/sections | Text styling  |

---

# 🧪 Combined Example

```html id="l4c8wt"
<div style="border: 1px solid black; padding: 10px;">
  <p>
    Hello <span style="color: blue;">World</span>!
  </p>
</div>
```

* `<div>` → creates a box
* `<span>` → styles part of the text

---

# ⚡ Quick Mental Model

* `<div>` = **box / container**
* `<span>` = **highlighter**

---

# 🚀 Pro Tip

Modern HTML often uses:

* `<div>` for layout (or better: semantic tags like `<section>`, `<header>`)
* `<span>` for small styling hooks
