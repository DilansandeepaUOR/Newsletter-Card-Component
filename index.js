// DON'T remove the below import
import "./style.css";

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const agree = document.getElementById('agree').checked;

    if (email && agree) {
        alert(`Thank you for subscribing with the email: ${email}`);
        
    } else {
        alert('Please enter a valid email address and agree to the terms.');
    }
});
