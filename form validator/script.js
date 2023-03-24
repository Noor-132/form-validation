function validateForm() {
    
    const email = document.forms["myForm"]["email"].value;
    const fname = document.forms["myForm"]["fname"].value;
    const lname = document.forms["myForm"]["lname"].value;
    const number = document.forms["myForm"]["Number"].value;
    const country = document.forms["myForm"]["country"].value;
    const province = document.forms["myForm"]["province"].value;
    const city = document.forms["myForm"]["city"].value;
    const area = document.forms["myForm"]["area"].value;
    const payment = document.forms["myForm"]["payment"].value;
    const agreement = document.forms["myForm"]["vehicle1"].checked;
  
    if (email =="" || fname =="" || lname =="" || number =="" || country =="" || province =="" || city =="" || area =="" || payment =="") {
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
  
    if (!agreement) {
      alert("Please agree to the terms and conditions.");
      return false;
    }
  
    return true;
  }
  










// <form id="myForm">
//   <div id="firstHalf">
//     <!-- first half of the form -->
//     <label for="firstName">First Name:</label>
//     <input type="text" id="firstName" name="firstName"><br><br>
    
//     <label for="lastName">Last Name:</label>
//     <input type="text" id="lastName" name="lastName"><br><br>
    
//     <button onclick="showSecondHalf()">Next</button>
//   </div>
  
//   <div id="secondHalf" style="display:none">
//     <!-- second half of the form -->
//     <label for="email">Email:</label>
//     <input type="email" id="email" name="email"><br><br>
    
//     <label for="phone">Phone Number:</label>
//     <input type="text" id="phone" name="phone"><br><br>
    
//     <button type="submit">Submit</button>
//   </div>
// </form>

// <script>
// function showSecondHalf() {
//   document.getElementById("firstHalf").style.display = "none";
//   document.getElementById("secondHalf").style.display = "block";
// }
// </script>









