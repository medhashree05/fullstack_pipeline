fetch("http://16.171.197.96:5000/student-details")
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").innerText = "Name: " + data.name;
    document.getElementById("roll").innerText = "Roll: " + data.roll_number;
    document.getElementById("reg").innerText = "Register: " + data.register_number;
  });