const searchInput = document.getElementById('searchUser');

const github = new GitHub();
const ui = new UI();

searchInput.addEventListener('input', (e) => {
  let userProfile = e.target.value;
  if(userProfile !== '') {
    ui.highlighInput('clear');
    ui.loading('show');

    github.getUserProfile(userProfile)
      .then(data => {
   
        if(data.profile.message != 'Not Found') {

          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
          ui.highlighInput('valid');
          ui.loading('hide');

        } else {
          ui.highlighInput('invalid');
          ui.loading('hide');

        }
      })
      .catch(err => console.log(err));
    

  } else {
      ui.hideResult();
      ui.highlighInput('clear');
  }
})
