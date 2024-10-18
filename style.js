document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);

    alert('Form submitted successfully! Check the console for details.');
});
