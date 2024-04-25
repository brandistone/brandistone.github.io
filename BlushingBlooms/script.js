document.getElementById('contact-submit').addEventListener('click', function() {
    // Get input field values
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var message = document.getElementById('messageInput').value;
    
    // Validate input fields (you can add more validation if needed)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Prepare data to send to Flask backend
    var data = {
        name: name,
        email: email,
        message: message
    };
    console.log(data);
    // Send data to Flask backend using fetch API
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Email sent successfully');
            // Clear input fields after successful submission
            document.getElementById('nameInput').value = '';
            document.getElementById('emailInput').value = '';
            document.getElementById('messageInput').value = '';
        } else {
            alert('Failed to send email');
        }
    })
    .catch(error => {
        console.error('Error sending email:', error);
        alert('An error occurred while sending email');
    });
});

