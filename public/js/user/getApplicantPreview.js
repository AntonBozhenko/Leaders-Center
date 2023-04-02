async function getApplicantPreview(event) {
  event.preventDefault();

  const allApplicants = document.getElementById('main__column-left').children;
  for (let i = 0; i < allApplicants.length; i += 1) {
    if (allApplicants[i].id === event.target.closest('.user__preview').id) {
      allApplicants[i].classList.add('active-person');
    } else {
      allApplicants[i].classList.remove('active-person');
    }
  }

  const el = event.target;
  let id;
  if (el.closest('.user__preview') || el.classList.contains('.user__preview')) id = el.closest('.user__preview').id;

  try {
    const response = await fetch(`/api/applicant/${id}`);
    const userCard = document.querySelector('.user__card');
    const result = await response.json();

    userCard.dataset.userid = result.id;
    userCard.innerHTML = `
      <div class="row">
        <div class="card-ref-title col-9 ms-3">
            <div class="card-ref-fio row mb-2"><p class="mb-0">${result.applName} ${result.applLastName}</p></div>
            <div class="card-ref-position row mb-2">
                <div class="col-6 text-start">Позиция:</div>
                <div class="col-6 text-end">${result.position}</div>
            </div>
            <div class="card-ref-salary row mb-2">
                <div class="col-6 text-start">Зарплата:</div>
                <div class="col-6 text-end">${result.wage} руб</div>
            </div>
            <div class="card-ref-phone row mb-2">
                <div class="col-6">Телефон:</div>
                <div class="col-6 text-end">${result.phone}</div>
            </div>
            <div class="card-ref-email row mb-2">
                <div class="col-6">Эл.почта:</div>
                <div class="col-6 text-end">${result.applEmail}</div>
            </div>
            <div class="card-ref-city row mb-2">
                <div class="col-6">Город:</div>
                <div class="col-6 text-end">${result.location}</div>
            </div>
            <div class="card-ref-about row mb-2">
                <div class="col-6">О себе:</div>
                <div class="col-6 text-end">${result.about}</div>
            </div>
        </div>
        <input type="file" id="card-ref-foto" accept="image/*" />
        <label  for="card-ref-foto" class="col-3 d-grid card-ref-foto" style="background-image: url(${result.applPhoto}); background-size: cover; background-position: center;">
        </label>
      </div>
      </div>
      <div class="row p-2">
        <div class="user__card-events p-4">
          <div class="d-flex align-items-start">
            <div class="card-events-stage-title col">
                <div class="stage-title">${result.Stage.stageName}</div>
            </div>
            <div class="col-4">    
                <select id="form-select" class="form-select" name="stageId" aria-label="Default select example">
                    <option selected>Сменит этап</option>
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
`;

    if (result.pdf) {
      const bio = document.querySelector('.card-ref-fio');
      bio.innerHTML += ` <a target="_blank" href=${result.pdf}><img class='pdf' src="https://cdn-icons-png.flaticon.com/512/136/136440.png" alt="pdf"></a>`;
    }
    const cardRefFoto = document.getElementById('card-ref-foto');
    cardRefFoto.addEventListener('change', async (evt) => {
      const data = new FormData();
      data.append('applPhoto', evt.target.files[0]);
      data.append('id', result.id);

      try {
        const res = await fetch('/api/applicant', {
          method: 'PATCH',
          body: data,
        });

        const resul = await res.json();

        const photo = document.querySelector('.card-ref-foto');
        photo.style.backgroundImage = `url("${resul.applPhoto}")`;

        for (let i = 0; i < allApplicants.length; i += 1) {
          if (Number(allApplicants[i].id) === Number(result.id)) {
            allApplicants[i].firstElementChild.firstElementChild.style.backgroundImage = `url("${resul.applPhoto}")`;
          }
        }
      } catch (error) {
        console.log(error);
      }
    });
  } catch (err) {
    console.log('Не могу отправить запрос', err);
  }
}
