Yes—this is a great next step. I’ll show you a **simple working example** using two HTML pages:

* `form.html` → the form
* `success.html` → the page shown after submit

---

# 📄 1. Form Page (`form.html`)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Simple Form</title>
</head>
<body>

  <h2>Contact Form</h2>

  <form action="success.html" method="GET">
    
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <button type="submit">Submit</button>

  </form>

</body>
</html>
```

### 🔑 Key idea:

* `action="success.html"` → redirects to another page after submit
* `method="GET"` → sends data via URL (easy for demo)

---

# 📄 2. Success Page (`success.html`)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Success</title>
</head>
<body>

  <h2>Form Submitted!</h2>
  <p>Thank you for your submission.</p>

</body>
</html>
```

---

# 🔄 What happens when you submit?

If you enter:

```
Name: Juan
Email: juan@email.com
```

You’ll be redirected to:

```
success.html?name=Juan&email=juan@email.com
```

That’s how `GET` works—it appends data to the URL.

---

# ⚡ Bonus: Show submitted data on next page (JavaScript)

If you want to **display the submitted values**, update `success.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Success</title>
</head>
<body>

  <h2>Form Submitted!</h2>
  <p id="output"></p>

  <script>
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const email = params.get("email");

    document.getElementById("output").innerText =
      "Hello " + name + "! Your email is " + email;
  </script>

</body>
</html>
```

---

# ⚠️ Important Notes

* This is **frontend only** (no database, no backend)
* For real apps, you usually send data to:

  * a server (Node.js, PHP, etc.)
  * or an API

