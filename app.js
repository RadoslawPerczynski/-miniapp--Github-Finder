const searchInput = document.getElementById('searchUser');

const github = new GitHub();
const ui = new UI();

searchInput.addEventListener('input', (e) => {
  let userProfile = e.target.value;
  if(userProfile !== '') {

    const user = github.getUserProfile(userProfile)
      .then(data => console.log(data.profile))
      .catch(err => console.log(err));

    //ui.showProfile(user);

  } else {
    //showing error
  }
})
