Here’s a clean, practical overview of **vanilla HTML basics**, focusing on structure, forms, and buttons—no frameworks, just core HTML.

---

# 🧱 1. Basic HTML Structure

Every HTML page follows this skeleton:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>

  <h1>Hello World</h1>
  <p>This is a paragraph.</p>

</body>
</html>
```

### Key parts:

* `<!DOCTYPE html>` → tells browser it's HTML5
* `<html>` → root element
* `<head>` → metadata (title, styles, scripts)
* `<body>` → visible content

---

# 🏷️ 2. Common HTML Elements

### Headings

```html
<h1>Main Title</h1>
<h2>Subtitle</h2>
```

### Paragraph & Text

```html
<p>This is a paragraph.</p>
<strong>Bold</strong>
<em>Italic</em>
```

### Links

```html
<a href="https://example.com">Visit site</a>
```

### Images

```html
<img src="image.jpg" alt="Description">
```

---

# 📋 3. Forms (Core Concept)

Forms collect user input and send it somewhere.

### Basic Form

```html
<form action="/submit" method="POST">
  <input type="text" name="username">
  <input type="submit" value="Send">
</form>
```

### Important attributes:

* `action` → where data goes
* `method` → `GET` or `POST`

---

# 🧾 4. Form Inputs

### Text Input

```html
<input type="text" name="name" placeholder="Enter name">
```

### Password

```html
<input type="password" name="password">
```

### Email

```html
<input type="email" name="email">
```

### Number

```html
<input type="number" name="age">
```

---

# 🔘 5. Buttons

### Basic Button

```html
<button>Click me</button>
```

### Submit Button (inside form)

```html
<button type="submit">Submit</button>
```

### Button Types

```html
<button type="button">Normal</button>
<button type="submit">Submit</button>
<button type="reset">Reset</button>
```

---

# ☑️ 6. Checkboxes & Radio Buttons

### Checkbox

```html
<input type="checkbox" name="hobby" value="music"> Music
```

### Radio (choose one)

```html
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
```

---

# 📦 7. Select Dropdown

```html
<select name="country">
  <option value="ph">Philippines</option>
  <option value="us">USA</option>
</select>
```

---

# 📝 8. Textarea

```html
<textarea name="message"></textarea>
```

---

# 🧩 9. Labels (Important for UX)

```html
<label for="name">Name:</label>
<input type="text" id="name" name="name">
```

Clicking the label focuses the input 👍

---

# 🧪 10. Complete Example

```html
<form action="/submit" method="POST">
  
  <label>Name:</label>
  <input type="text" name="name"><br><br>

  <label>Email:</label>
  <input type="email" name="email"><br><br>

  <label>Password:</label>
  <input type="password" name="password"><br><br>

  <label>Gender:</label>
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female<br><br>

  <label>Hobbies:</label>
  <input type="checkbox" name="hobby" value="music"> Music
  <input type="checkbox" name="hobby" value="sports"> Sports<br><br>

  <label>Country:</label>
  <select name="country">
    <option>Philippines</option>
    <option>Japan</option>
  </select><br><br>

  <label>Message:</label><br>
  <textarea name="message"></textarea><br><br>

  <button type="submit">Submit</button>
</form>
```

---

# ⚡ Quick Tips

* Always use `name` → backend uses it to read values
* Use `label` for accessibility
* Use `type="email"` or `required` for built-in validation
* Keep forms simple first
