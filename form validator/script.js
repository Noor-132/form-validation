function validateForm() {
  const email = document.forms["myForm"]["email"].value;
  const fname = document.forms["myForm"]["fname"].value;
  const lname = document.forms["myForm"]["lname"].value;
  const city = document.forms["myForm"]["city"].value;
  const area = document.forms["myForm"]["area"].value;
  const payment = document.forms["myForm"]["payment"].checked;
  const agreement = document.forms["myForm"]["agreement"].checked;

  if (email === "" || fname === "" || lname === "" || number === "" || payment === false) {
    alert("Please fill in all required fields.");
    return false;
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  const numberRegex = /^[0-9]+$/;
  if (!numberRegex.test(number)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  if (country === "" || province === "" || city === "") {
    alert("Please fill in all required fields.");
    return false;
  }

  if (!agreement) {
    alert("Please agree to the terms and conditions.");
    return false;
  }

  return true;
}
