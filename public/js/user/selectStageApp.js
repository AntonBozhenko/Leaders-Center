async function selectStageApp(event) {
  if (event.target.id === 'form-select') {
    const userCard = document.querySelector('.user__card');
    const getIdApplicant = userCard?.dataset.userid;

    const stageSelect = document.querySelector('select.form-select');
    const stageSelectId = stageSelect?.value;
    const selectedOption = stageSelect.selectedOptions[0];
    const selectedText = selectedOption.textContent;

    const getStageTitle = document.querySelector('.stage-title');

    try {
      const response = await fetch('/api/applicant', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: getIdApplicant, stageId: stageSelectId }),
      });
      if (response.status === 200) {
        getStageTitle.textContent = selectedText;
      }
    } catch (error) {
      console.log('Не могу отправит запрос на сервер изменить этап', error);
    }
  }
}
