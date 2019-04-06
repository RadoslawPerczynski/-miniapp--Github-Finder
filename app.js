const searchInput = document.getElementById('searchUser');

const github = new GitHub();
const ui = new UI();

searchInput.addEventListener('input', (e) => {
  let userProfile = e.target.value;
  if(userProfile !== '') {

    github.getUserProfile(userProfile)
      .then(data => {
   
        if(data.profile.message != 'Not Found') {

          ui.showProfile(data.profile);
          ui.showRepos(data.repos);

        } else {
          //sshow alers
        }
      })
      .catch(err => console.log(err));
    

  } else {
      ui.hideResult();
  }
})
