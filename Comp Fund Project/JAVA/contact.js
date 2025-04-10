function submitForm() {
	
	 // STORES NAME 
      var Name = document.getElementById("name").value;
     
	 //IF NAME IS EMPTY, SHOW ALERT AND RETURN TO FORM
	 if (Name.trim() === "") {
		 alert("Please enter your name.");
		 return;
	 }
	//STORES EMAIL
	 var Email = document.getElementById("email").value;
	 
	//IF EMAIL DOESNT HAVE @ . OR THE @ IS AFTER THE ., SHOW ALERT AND RETURN TO FORM
	if (!Email.includes("@") || !email.includes(".") || email.indexOf("@") > email.lastIndexOf(".")) {
		alert("Please enter a valid email.");
		return;
	}

      //FORM SUBMISSION ALERT
      alert("Form submitted! We'll be in contact with you soon " + Name + "!");
	  document.getElementById("contactForm").reset();
}