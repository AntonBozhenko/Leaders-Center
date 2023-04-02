// TODO: Добавить чтоб на любой клик по документу удалялась форма с регистрацией

function signUp() {
  const resultWindow = document.getElementById('resultWindow');

  if (resultWindow) resultWindow.remove();

  const guestColumnRight = document.querySelector('.guest__column-right');
  guestColumnRight.style.display = 'block';
  createFormSignUp(guestColumnRight);
}

function createFormSignUp(guestColumnRight) {
  const resultWindow = document.createElement('div');
  resultWindow.id = 'resultWindow';
  resultWindow.insertAdjacentHTML('beforeend', `<form class="formSignUp">
                  <div class="mb-3">
                    <label htmlFor="exampleInputName"class="form-label">Ведите Ваше имя</label>
                    <input
                      type="text"
                       name="userName" 
                      class="form-control"
                      id="exampleInputText"
                      aria-describedby="textHelp"
                    />
                  </div>
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
                    <input type="password" name="userPassword"  class="form-control" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" class="btn btn-outline-light signUp">Зарегистрироваться</button>
                  </form>
   `);
  guestColumnRight.appendChild(resultWindow);
}
