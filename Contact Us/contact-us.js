document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value;
    
    var emailInput = document.getElementById("emailInput");
    var email = emailInput.value;
    
    var phoneNumberInput = document.getElementById("phoneNumber");
    var phoneNumber = phoneNumberInput.value;
    
    var messageInput = document.getElementById("message");
    var message = messageInput.value;
    
    var contactMethodInputs = document.getElementsByName("contact-method");
    var selectedContactMethod = null;
    
    for (var i = 0; i < contactMethodInputs.length; i++) {
      if (contactMethodInputs[i].checked) {
        selectedContactMethod = contactMethodInputs[i].value;
        break;
      }
    }
    
    name = name.trim();
    email = email.trim();
    phoneNumber = phoneNumber.trim();
    message = message.trim();
    
    if (name === "") {
      alert("Please enter a name.");
    } else if (hasNumericValues(name)) {
      alert("Name should not contain numeric values.");
    } else if (email === "") {
      alert("Please enter an email.");
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
    } else if (phoneNumber === "") {
      alert("Please enter a phone number.");
    } else if (isNaN(phoneNumber)) {
      alert("Phone number should be numeric.");
    } else if (phoneNumber.length < 9 || phoneNumber.length > 13) {
      alert("Phone number should be between 9 and 13 digits.");
    } else if (message === "") {
      alert("Please enter a message.");
    } else if (selectedContactMethod === null) {
      alert("Please select a preferred contact method.");
    } else {
      alert("Feedback submitted successfully!");
      
      document.getElementById("nameForm").reset();
      document.getElementById("emailForm").reset();
      document.getElementById("myPhone").reset();
      document.getElementsByClassName("message-jcc")[0].reset();
      
      for (var i = 0; i < contactMethodInputs.length; i++) {
        contactMethodInputs[i].checked = false;
      }
    }
  });
  
  function isValidEmail(email) {
    var atIndex = email.indexOf("@");
    var dotIndex = email.lastIndexOf(".");
    
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
      return false;
    }
    
    return true;
  }
  
  function hasNumericValues(name) {
    for (var i = 0; i < name.length; i++) {
      var charCode = name.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        return true;
      }
    }
    return false;
  }  