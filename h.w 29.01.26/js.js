
const form = document.querySelector('#studentForm');

  const nameInput = document.querySelector('#nameInput');
  const surnameInput = document.querySelector('#surnameInput');
  const ageInput = document.querySelector('#ageInput');
  const emailInput = document.querySelector('#emailInput');
  const classInput = document.querySelector('#classInput');
  const cityInput = document.querySelector('#cityInput');
  const aboutInput = document.querySelector('#aboutInput');

  const profileName = document.querySelector('#profileName');
  const profileSurname = document.querySelector('#profileSurname');
  const profileAge = document.querySelector('#profileAge');
  const profileEmail = document.querySelector('#profileEmail');
  const profileClass = document.querySelector('#profileClass');
  const profileCity = document.querySelector('#profileCity');
  const profileAbout = document.querySelector('#profileAbout');

  nameInput.addEventListener('input', () => {
    profileName.textContent = nameInput.value || '—';
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    profileName.textContent = nameInput.value;
    profileSurname.textContent = surnameInput.value;
    profileAge.textContent = ageInput.value;
    profileEmail.textContent = emailInput.value;
    profileClass.textContent = classInput.value || '—';
    profileCity.textContent = cityInput.value || '—';
    profileAbout.textContent = aboutInput.value || '—';
  }); 