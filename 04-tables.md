Here’s a solid, beginner-friendly guide to **HTML tables**—how they work and how to use them.

---

# 📊 Basic Table Structure

A table is made of rows and columns.

```html id="2k9qwe"
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Juan</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>22</td>
  </tr>
</table>
```

---

# 🧩 Key Tags

* `<table>` → the table container
* `<tr>` (table row) → one row
* `<th>` (table header) → bold header cell
* `<td>` (table data) → normal cell

---

# 🧪 What it looks like

| Name  | Age |
| ----- | --- |
| Juan  | 20  |
| Maria | 22  |

---

# 🎨 Styled Table (using `<style>`)

```html id="8h2jzx"
<!DOCTYPE html>
<html>
<head>
  <style>
    table {
      width: 50%;
      border-collapse: collapse;
      margin: 20px auto;
      font-family: Arial;
    }

    th, td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }

    th {
      background-color: #28a745;
      color: white;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>

  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Juan</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Maria</td>
      <td>22</td>
    </tr>
  </table>

</body>
</html>
```

---

# 🔀 Merge Cells

### Colspan (merge columns)

```html id="l5k2mz"
<tr>
  <td colspan="2">Merged columns</td>
</tr>
```

### Rowspan (merge rows)

```html id="v9q1xp"
<tr>
  <td rowspan="2">Merged rows</td>
  <td>Data</td>
</tr>
<tr>
  <td>More Data</td>
</tr>
```

---

# 🧱 Semantic Table (Better Structure)

```html id="0z8kcn"
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Juan</td>
      <td>20</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">End of table</td>
    </tr>
  </tfoot>
</table>
```

---

# ⚠️ Best Practices

* Use tables for **data**, not layout
* Use `<th>` for headers (accessibility)
* Avoid `border="1"` → use CSS instead
* Keep tables simple and readable

---

# ⚡ Quick Tip

If you're building layouts (like pages, cards, grids), use:

* `<div>` + CSS (Flexbox/Grid)

Tables are mainly for:

* lists
* reports
* structured data
