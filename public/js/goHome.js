function goHome(event) {
  event.preventDefault();

  const main = document.querySelector('main');
  const resultWindow = document.getElementById('resultWindow');

  const mainChildren = main.children;
  for (let i = 0; i < mainChildren.length; i += 1) {
    if (mainChildren[i].id !== 'resultWindow') mainChildren[i].remove();
  }

  resultWindow.classList.remove('d-none');
}
