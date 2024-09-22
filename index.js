document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'blue';
        button.style.color = 'white';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '';
        button.style.color = '';
    });
    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = 'red';
    });
    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = 'blue';
    });
    button.addEventListener('click', () => {
        document.getElementById(button.getAttribute('data-target')).scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});
