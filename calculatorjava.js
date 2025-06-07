let calculation = localStorage.getItem('calculation') || '';

    displayCalculation();

    function updateCalculation(value) {
      calculation += value;
      displayCalculation(); // fixed typo here
      saveCalculation();
    }

    function saveCalculation() {
      localStorage.setItem('calculation', calculation);
    }

    function displayCalculation() {
      document.querySelector('.onScreen').innerHTML = calculation;
    }

