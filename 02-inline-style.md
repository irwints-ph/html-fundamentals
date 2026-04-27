Here’s the same form, but styled using **inline CSS** (inside the HTML tags themselves). This is quick for small demos, though not ideal for large projects.

---

# 🎨 Example: Form with Inline Styles

```html id="m1x9zp"
<!DOCTYPE html>
<html>
<head>
  <title>Styled Form</title>
</head>
<body style="font-family: Arial; background-color: #f4f4f4;">

  <div style="width: 300px; margin: 100px auto; padding: 20px; background: white; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    
    <h2 style="text-align: center;">Contact Form</h2>

    <form action="success.html" method="GET">

      <label style="font-weight: bold;">Name:</label><br>
      <input 
        type="text" 
        name="name" 
        required
        style="width: 100%; padding: 8px; margin: 5px 0 15px; border: 1px solid #ccc; border-radius: 5px;"
      >

      <label style="font-weight: bold;">Email:</label><br>
      <input 
        type="email" 
        name="email" 
        required
        style="width: 100%; padding: 8px; margin: 5px 0 15px; border: 1px solid #ccc; border-radius: 5px;"
      >

      <button 
        type="submit"
        style="width: 100%; padding: 10px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;"
      >
        Submit
      </button>

    </form>

  </div>

</body>
</html>
```

---

# ✨ What’s happening here

* `style="..."` → adds CSS directly to elements
* Centered form using:

  * `margin: 100px auto`
* Card-like design:

  * `background: white`
  * `border-radius`
  * `box-shadow`
* Inputs:

  * full width (`width: 100%`)
  * padding + rounded corners
* Button:

  * green background + no border

---

# ⚠️ When to use inline styles

Good for:

* quick demos
* testing layouts

Avoid for:

* large projects (hard to maintain)

👉 In real apps, you’d move styles to:

* `<style>` tag or
* separate `.css` file
