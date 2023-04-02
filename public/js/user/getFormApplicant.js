const mainColumnRight = document.querySelector('.main__column-right');
function getFormApplicant() {
  const userCard = document.querySelector('.user__card');
  userCard.remove();
  const addUserEl = document.createElement('div');
  addUserEl.innerHTML = `
  <form class="formAddApplicant" >
  <div class="row mb-2 me-1 text-end justify-content-end">
    <button id="btn-close-form" type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="row mb-3">
    <div class="col">
      <input type="text" name="applLastName" class="form-control" placeholder="Фамилия" />
    </div>
    <div class="col">
      <input type="text" name="applName" class="form-control" placeholder="Имя" />
    </div>
  </div>
  <div class="row mb-3">
    <div class="col">
        <input type="tel" name="phone" class="form-control" placeholder="Телефон" />
    </div>
    <div class="col">
        <input type="email" name="applEmail" class="form-control" placeholder="Эл.почта" />
    </div>
  </div>
  <div class="row mb-3">
      <div class="col">
        <input type="text" id="position" name="position" class="form-control" placeholder="Позиция">
      </div>
  </div>
    <div class="row mb-3">
      <div class="col">
        <input type="text" id="wage" name="wage" class="form-control" placeholder="Заработная плата">
      </div>
      <div class="col">
        <input type="text" id="location" name="location" class="form-control" placeholder="Локация">
      </div>
  </div>
  <div class="row mb-3">
    <div class="col">
        <input type="text" name="experience" class="form-control" placeholder="Опыт" />
    </div>
  
    <div class="col">
        <select class="form-select" name="stageId" aria-label="Default select example">
            <option selected>На каком этапе соискатель</option>
            <option value="1">Новые</option>
            <option value="2">Видео интервью</option>
            <option value="3">У заказчика</option>
            <option value="4">Интервью с заказчиком</option>
            <option value="5">Звонок скрининг</option>
            <option value="6">Офер</option>
            <option value="7">Принял Офер</option>
            <option value="8">Выход на работу</option>
            <option value="9">Отказ</option>
        </select>
    </div>
  </div>
  <div class="mb-3">
    <textarea class="form-control" name="about" rows="3" placeholder="О себе"></textarea>
  </div>
  <div class="mb-3">
      <input class="form-control" name="pdf" type="file" id="formFile" accept="application/pdf">
  </div>
  <button id="btn-addApplicant" type="submit" class="btn btn-outline-dark btn-addApplicant">Добавить</button>
</form>
  `;
  mainColumnRight.appendChild(addUserEl);

  const btnCloseForm = document.getElementById('btn-close-form');
  btnCloseForm.onclick = () => {
    const formAddApplicant = document.querySelector('.formAddApplicant');
    formAddApplicant.remove();
    location.assign('/');
  };
}
