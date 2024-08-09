const form = document.getElementById('contactForm');

function validateForm(event) {
    event.preventDefault();
    const errors = document.getElementsByClassName('error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].textContent = '';
    }
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const msg = document.getElementById('msg').value.trim();
    let isValid = true;

    if (fullname === '') {
        document.getElementById('fullnameError').textContent = 'Full Name is required';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email Address is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid Email Address';
        isValid = false;
    }

    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone Number is required';
        isValid = false;
    } else if (!isValidPhone(phone)) {
        document.getElementById('phoneError').textContent = 'Enter a valid Phone Number';
        isValid = false;
    }

    if (address === '') {
        document.getElementById('addressError').textContent = 'Address is required';
        isValid = false;
    }

    if (msg === '') {
        document.getElementById('msgError').textContent = 'Message is required';
        isValid = false;
    }
    if (isValid) {
        alert('Form submitted successfully');
        form.submit();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

form.addEventListener('submit', validateForm);