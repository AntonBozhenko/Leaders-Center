// TODO: Добавить чтоб на любой клик по документу удалялась форма с входом

function signIn() {
  const resultWindow = document.getElementById('resultWindow');

  if (resultWindow) resultWindow.remove();

  const guestColumnRight = document.querySelector('.guest__column-right');
  guestColumnRight.style.display = 'block';

  createFormSignIn(guestColumnRight);
}

function createFormSignIn(guestColumnRight) {
  const resultWindow = document.createElement('div');
  resultWindow.id = 'resultWindow';

  resultWindow.insertAdjacentHTML('beforeend', `<form class="formSignIn">
    <div class="mb-3">
      <label htmlFor="exampleInputEmail" class="form-label">Эл. почта</label>
      <input
        type="email"
        name="userEmail" 
        class="form-control"
        id="exampleInputEmail"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label htmlFor="exampleInputPassword" class="form-label">Пароль</label>
      <input type="password" name="userPassword" class="form-control" id="exampleInputPassword" />
    </div>
    <button type="submit" class="btn btn-outline-light signIn">Войти</button>
  </form>`);
  guestColumnRight.appendChild(resultWindow);
}
