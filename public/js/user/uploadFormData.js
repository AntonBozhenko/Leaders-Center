async function uploadFormData(event) {
  if (event.target.className === 'formAddApplicant') {
    event.preventDefault();
    const formAddApplicant = event.target;

    const formData = new FormData(formAddApplicant);
    try {
      const response = await fetch('/api/applicant', {
        method: 'POST',
        body: formData,
      });

      formAddApplicant.parentNode.remove();
      if (response.status === 200) {
        location.assign('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
