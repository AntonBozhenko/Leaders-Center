const homeLink = document.getElementById('home');
const logoutLink = document.getElementById('logout');

const FormApplicant = document.getElementById('getFormApplicant');

const allUsers = document.getElementById('allUsers');

const menuStage = document.getElementById('menuStage');

const userPreview = document.getElementById('main__column-left');

homeLink.addEventListener('click', goHome);

logoutLink.addEventListener('click', logOut);

window.addEventListener('change', selectStageApp);

allUsers.addEventListener('click', getAllApplicants);

menuStage.addEventListener('click', filter);

userPreview.addEventListener('click', getApplicantPreview);

FormApplicant.addEventListener('click', getFormApplicant);

window.addEventListener('submit', uploadFormData);
