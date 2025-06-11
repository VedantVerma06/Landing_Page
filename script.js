function scrollToApply() {
  document.getElementById('apply').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('applicationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Normally, you would send this data to a server or service here.
  // For demonstration, just show a success message.
  const formMessage = document.getElementById('formMessage');
  formMessage.textContent = 'Thank you for applying! We will review your application and get back to you soon.';

  // Optional: reset the form
  this.reset();
});
