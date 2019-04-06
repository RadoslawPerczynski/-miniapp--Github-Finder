class UI {
  constructor() {
    this.userProfileScreen = document.getElementById('profile');;
    this.userLogin = document.getElementById('userLogin');
    this.userName = document.getElementById('userName');
    this.userMail = document.getElementById('userMail');
    this.userLocation = document.getElementById('userLocation');
    this.userImg = document.getElementById('userImg');
    this.userBio = document.getElementById('userBio');
    this.userReposCount = document.getElementById('userReposCount');
    this.userPublicGists = document.getElementById('userPublicGists');
    this.userFollowers = document.getElementById('userFollowers');
    this.userFollowing = document.getElementById('userFollowing');
    this.visitProfileButton = document.getElementById('visitProfileButton');
    this.profileUpdatedDate = document.getElementById('profileUpdatedDate');
    //repos
    this.repositories = document.getElementById('repositories');
  }

  showProfile(userResponse) {
    this.userLogin.textContent = userResponse.login;
    this.userName.textContent = userResponse.name;
    this.userMail.textContent = userResponse.email;
    this.userLocation.textContent = userResponse.location;
    this.userImg.src = userResponse.avatar_url;
    this.userBio.textContent = userResponse.bio;
    this.userReposCount.textContent = userResponse.public_repos;
    this.userPublicGists.textContent = userResponse.public_gists;
    this.userFollowers.textContent = userResponse.followers;
    this.userFollowing.textContent = userResponse.following;
    this.visitProfileButton.href = userResponse.html_url;
    this.profileUpdatedDate.textContent = this.convertDate(userResponse.updated_at);


    this.userProfileScreen.style.display = 'block'

  }
  convertDate(date) {
    let newDateObj = new Date(date)

    let localDate = newDateObj.toLocaleString("en-GB");
    return localDate;
  }

  showRepos(userRepos) {
    //check why I get undefined just once all the time what da fuck.
    let listOfRepositioriesToHtml = '';
    let self = this;

    userRepos.forEach(function(x) {
      listOfRepositioriesToHtml += `
      <li class="list-group-item ">
        <a href="${x.url}" class="card-link">${x.name}</a>
        <span class="badge badge-primary badge-pill float-right">Stars: ${x.stargazers_count}</span>  
        <span class="badge badge-secondary badge-pill float-right">Watchers: ${x.watchers}</span>
        <span class="badge badge-success badge-pill float-right">Updated: ${self.convertDate(x.updated_at)}</span>
      </li>
      `
    });

    this.repositories.innerHTML = listOfRepositioriesToHtml;


  }

  hideResult() {
    this.userProfileScreen.style.display = 'none';
  }
  
}