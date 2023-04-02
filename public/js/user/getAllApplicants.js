async function getAllApplicants(event) {
  const menuChilds = document.getElementById('menuStage').children;
  for (let i = 0; i < menuChilds.length; i += 1) {
    if (menuChilds[i].firstChild.id === event.target.id) {
      menuChilds[i].classList.add('active');
    } else {
      menuChilds[i].classList.remove('active');
    }
  }

  const mainColumnLeftApll = document.querySelector('.main__column-left');

  while (mainColumnLeftApll.firstChild) {
    mainColumnLeftApll.removeChild(mainColumnLeftApll.firstChild);
  }

  try {
    const response = await fetch('/api/allapplicants');
    const result = await response.json();

    mainColumnLeftApll.innerHTML = `
      ${result.map((appl) => (
    `<div key=${appl.id} id=${appl.id} class="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
        <div class="col-3">
            <div class="user__preview-foto" style="background-image: url(${appl.applPhoto}); background-size: cover; background-position: center;"></div>
        </div>
        <div class="col-8 ms-2">
            <div class="row">
                <div class="preview-ref-fio">${appl.applName} ${appl.applLastName}</div>
            </div>
            <div class="row">
                <div class="preview-ref-position">${appl.position}</div>
            </div>
        </div>
    </div>`
  )).join('')}
    `;
  } catch (error) {
    console.log('Не могу отправить запрос на фильтр', error);
  }
}
