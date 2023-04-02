async function logOut() {
  try {
    const response = await fetch('/logout');
    console.log('Status Logout', response.status);
    if (response.status === 200) location.assign('/guest');
  } catch (error) {
    console.log(error);
  }
}
