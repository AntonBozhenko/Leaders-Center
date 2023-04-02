async function register(event) {
  if (event.target.className === 'formSignUp') {
    event.preventDefault();

    if (document.getElementById('registerError')) {
      document.getElementById('registerError').remove();
    }

    const formSignUp = event.target;
    const formData = new FormData(formSignUp);
    const dataFormObj = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/guest/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataFormObj),
      });

      if (response.status === 203) {
        const errorMessage = document.createElement('p');
        errorMessage.id = 'registerError';
        errorMessage.classList = 'text-danger text-center';
        errorMessage.textContent = 'Такой пользователь уже зарегистрирован';
        event.target.append(errorMessage);
      } else if (response.status === 200) {
        location.assign('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
