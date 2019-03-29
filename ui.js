class UI {
  showProfile(userResponse) {
    const profile = document.getElementById('profile');
    profile.innerHTML = `
      <h1>${userResponse.login}</h1>
    `
  }
}