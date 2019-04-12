const searchInput = document.getElementById('searchUser');
const github = new GitHub();
const ui = new UI();

searchInput.addEventListener('input', (e) => {
  let userProfile = e.target.value;

  //if field not empty, do something
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
          //if user has not been found
          ui.highlighInput('invalid');
          ui.loading('hide');

        }
      })
      .catch(function(error) {
        console.log('Network error: ' + error)
      });

  } else {
    //if input field is actually empty
      ui.hideResult();
      ui.highlighInput('clear');
  }
})
