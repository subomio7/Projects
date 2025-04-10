$(document).ready(function () {
  $('#button').click(function(event) {
    let isValid = true;

    // Validate Name
    if ($('#name').val().trim() === '') {
      alert('Name is required.');
      isValid = false;
    }

    // Validate Email
    const email = $('#email').val();
    if (!email.includes('@') || !email.includes('.')) {
      alert('Enter a valid email that contains "@" and "."');
      isValid = false;
    }

    // Additional Email Validation (disallow certain characters)
    if (email.includes('!') || email.includes('&') || email.includes('#') || email.includes('*') || 
        email.includes('%') || email.includes(',') || email.includes('=') || email.includes('+')) {
      alert('Email cannot contain special characters like !, &, #, *, %, , =, +');
      isValid = false;
    }

    // Validate Message
    if ($('#message').val().trim() === '') {
      alert('A message is required.');
      isValid = false;
    }

    // If the form is valid, alert success
    if (isValid) {
      alert('Form submitted successfully!');
    }

    event.preventDefault(); // Prevent the default form submission
  });
});