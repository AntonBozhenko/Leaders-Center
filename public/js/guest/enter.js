async function enter(event) {
  if (event.target.className === 'formSignIn') {
    event.preventDefault();

    if (document.getElementById('enterError')) {
      document.getElementById('enterError').remove();
    }

    const formSignIn = event.target;
    const formData = new FormData(formSignIn);
    const dataFormObj = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/guest/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataFormObj),
      });
      if (response.status === 203) {
        const errorMessage = document.createElement('p');
        errorMessage.id = 'enterError';
        errorMessage.classList = 'text-danger text-center';
        errorMessage.textContent = 'Неверный email или пароль';
        event.target.append(errorMessage);
      } else if (response.status === 200) {
        location.assign('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
