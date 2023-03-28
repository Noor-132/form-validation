const url = 'https://example.com/api/new';
const formElement = document.querySelector('#myForm');

formElement.addEventListener('submit', function(event) {
  event.preventDefault();
  var jsonData = formToJson(this);

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});

function formToJson(form) {
  var formData = new FormData(form);
  var obj = {};
  for (var key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return JSON.stringify(obj);
}


function validateForm() {
  const email = document.forms["myForm"]["email"].value;
  const fname = document.forms["myForm"]["fname"].value;
  const lname = document.forms["myForm"]["lname"].value;
  const city = document.forms["myForm"]["city"].value;
  const adress = document.forms["myForm"]["adress"].value;
  const payment = document.forms["myForm"]["payment"].checked;
  const agreement = document.forms["myForm"]["agreement"].checked;

    

  if (email === "" || fname === "" || lname === "" ||adress === "" ||code === "" ||instruction === "" || payment === false) {
    alert("Please fill in all required fields.");
    return false;
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // const numberRegex = /^[0-9]+$/;
  // if (!numberRegex.test(number)) {
  //   alert("Please enter a valid phone number.");
  //   return false;
  // }

  if (country === "" || city === "") {
    alert("Please fill in all required fields.");
    return false;
  }

  if (!agreement) {
    alert("Please agree to the terms and conditions.");
    return false;
  }

  return true;
}











