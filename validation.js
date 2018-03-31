function FormValidation() {

    //variables to hold form data
    var firstName = document.getElementById("txtFirstName").value;
    var age = document.getElementById("txtAge").value;
    var email = document.getElementById("txtEmail").value;
    var phone = document.getElementById("txtPhone").value;

    //Regular expressions for phone number and email validation
  var phoneNumberExpression = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    var emailExp = /^\w+(\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    //Receive true/false value from methods below
    var nameTest = nameCheck(firstName);
    var ageTest = ageCheck(age);

    //variables to hold checked status of checkboxes
    var chkMusic = document.getElementById("chk1").checked;
    var chkSports = document.getElementById("chk2").checked;
    var chkReading = document.getElementById("chk3").checked;
    var chkVolunteering = document.getElementById("chk4").checked;

    //variables that will be assigned based on checkbox selected
    var chk1 = "";
    var chk2 = "";
    var chk3 = "";
    var chk4 = "";

    //get value of Radiobutton
    var preferredGenre = document.querySelector('input[name=genre]:checked').value;

    //get value of drop down list
    var ddlist = document.getElementById("colorList");
    var color = ddlist.options[ddlist.selectedIndex].value;

    //Begin TextBox validation
    if(firstName === "" || nameTest === true){
      alert("Please enter a valid first name.");
      return false;
    }

    if(age === "" || age <= 0 || age >= 125 || ageTest === true){
      alert("Please enter a valid age.");
      return false;
    }

    if(email === "" || !email.match(emailExp)){
      alert("Please enter a valid email address.");
      return false;
    }

    if(phone === "" || !phone.match(phoneNumberExpression)){
      alert("Please enter a telephone number in format 555-555-5555.");
      return false;
    }
    //End TextBox validation

    //decision logic to determine if user is interested in a certain checkbox
    if(chkMusic){
      chk1 = "Music" + "\n";
    }
    else{
      chk1 = "";
    }

    if(chkSports){
      chk2 = "Sports" + "\n";
    }
    else{
      chk2 = "";
    }

    if(chkReading){
      chk3 = "Reading" + "\n";
    }
    else{
      chk3 = "";
    }

    if(chkVolunteering){
      chk4 = "Volunteering" + "\n";
    }
    else{
      chk4 = "";
    }
    //end checkbox logic

    //Display information collected from the form.
    alert("This is the information you entered: " + "\n" +
          "First Name: " + firstName + "\n" +
          "Age: " + age + "\n" +
          "Email: " + email + "\n" +
          "Phone: " + phone + "\n" + "\n" +
          "Hobbies selected: " + "\n" +
          chk1 + chk2 + chk3 + chk4 + "\n" +
          "Music preference: " + "\n" + preferredGenre + "\n" + "\n" +
          "Favorite color: " + "\n" + color);
}

//testing if name contains numbers
function nameCheck(name){
  return /\d/.test(name);
}
//testing if age contains non-numerics
function ageCheck(age){
  return /\D/.test(age);
}
