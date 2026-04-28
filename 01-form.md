# 🧪 Simple Working Example (2 HTML Pages)

* `form.html` → the form
* `success.html` → the page shown after submit

This example shows how a basic HTML form passes data between pages using **GET method**.

---

## 📄 1. Form Page (`form.html`)

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

---

### 🔑 Key Ideas

* `action="success.html"` → redirects to another page after submit
* `method="GET"` → sends data via URL (easy for learning and debugging)

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

You will be redirected to:

```
success.html?name=Juan&email=juan@email.com
```

---

## 📌 How GET works

* Data is added to the **URL**
* Data is:

  * visible
  * bookmarkable
  * easy to debug
* Not suitable for sensitive data

---

# ⚠️ Important: What about POST?

> When `method="POST"`, the form data is sent in the request body instead of the URL.

👉 However, in **pure vanilla HTML (without a backend like PHP, Node.js, etc.)**, you cannot directly see, receive, or process POST data.
👉 This is because there is **no server-side system running to handle the request body**.
👉 That’s why POST only becomes useful when paired with a backend or API.

---

# ⚡ Bonus: Display submitted data (using JavaScript)

To show the submitted values on the success page, update `success.html` like this:

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

    document.getElementById("output").textContent =
      "Hello " + name + "! Your email is " + email;
  </script>

</body>
</html>
```

---

# ⚠️ Final Notes

* This is a **frontend-only demo**
* No database or backend is involved
* Real-world applications usually send data to:

  * a server (Node.js, PHP, Python, etc.)
  * or an API endpoint
