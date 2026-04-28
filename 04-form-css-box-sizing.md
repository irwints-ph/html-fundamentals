**how width + padding + borders are calculated**.

---

# 🧠 Why your input can exceed the form width

When you write:

```css
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}
```

### ⚠️ The problem:

By default, CSS uses:

```txt
box-sizing: content-box;
```

That means:

> `width: 100%` applies ONLY to the content area
> Padding and border are added ON TOP of that width

---

## 📉 What actually happens

If your container is 320px:

* Input content = 320px
* * padding (10px left + 10px right = 20px)
* * border (1px left + 1px right = 2px)

👉 Total becomes **342px**

So it visually overflows the form.

---

# ✅ Fix (Best Practice)

## ✔ Use `box-sizing: border-box`

This makes width include padding + border inside the size.

```css
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}
```

---

## 💡 Even better (global fix)

Apply it to everything:

```css
* {
  box-sizing: border-box;
}
```

This is standard in modern web development because it prevents layout bugs like this.

---

# 🧪 Why this works

With `border-box`:

> width = total size (content + padding + border)

So your input stays perfectly inside the form container.

---

# 🎯 Quick mental model

| box-sizing            | What width means           |
| --------------------- | -------------------------- |
| content-box (default) | content only               |
| border-box            | content + padding + border |

---

# 🚀 Recommendation

For all your projects going forward, always include:

```css
* {
  box-sizing: border-box;
}
```

It saves you from 90% of sizing headaches in CSS layouts.

[next](04-form-css-box-zing-explain.md)