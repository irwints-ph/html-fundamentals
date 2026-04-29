    function handleSubmit(event) {
      event.preventDefault();

      let name = document.getElementById("name").value;
      alert("Hello " + name);
    }

    function showName() {
      let value = document.getElementById("name").value;
      document.getElementById("output").innerText = "Hello " + value;
      for (let i = 1; i <= 5; i++) {
        console.log(i);
        document.getElementById("output").innerText += i;
      }      
    }
