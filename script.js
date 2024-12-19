// script.js
document.getElementById('surveyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedLanguage = document.querySelector('input[name="language"]:checked');
    
    if (selectedLanguage) {
      alert(`You selected: ${selectedLanguage.value}`);
      // Here, you can send the data to a backend or store it locally
    } else {
      alert('Please select a language');
    }
  });
  