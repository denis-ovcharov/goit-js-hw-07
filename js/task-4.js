const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", submit);

function submit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }
    const user = {
        email,
        password
    };
    console.log(user)
    form.reset();
}
