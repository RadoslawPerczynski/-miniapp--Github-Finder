class UI {
  constructor() {
    //bind properties to all the needed fields in UI object
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
    //set the values for each fields depending on the data passed.
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
    let listOfRepositioriesToHtml = '';

    userRepos.forEach(x => {
      listOfRepositioriesToHtml += `
      <li class="list-group-item ">
        <a href="${x.html_url}" class="card-link" target="_blank">${x.name}</a>
        <span class="badge badge-primary badge-pill float-right">Stars: ${x.stargazers_count}</span>  
        <span class="badge badge-secondary badge-pill float-right">Watchers: ${x.watchers}</span>
        <span class="badge badge-success badge-pill float-right">Updated: ${this.convertDate(x.updated_at)}</span>
      </li>
      `
    });

    this.repositories.innerHTML = listOfRepositioriesToHtml;

  }

  hideResult() {
    this.userProfileScreen.style.display = 'none';
  }

  highlighInput(state) {
    const inputField = document.getElementById('searchUser');
    
    if(state === "valid") {
      inputField.className = "form-control is-valid"
    } else if(state === "invalid") {
      inputField.className = "form-control is-invalid"
    } else if(state === "clear") {
      inputField.className = "form-control"
    }
  }
  loading(state) {
    const loader = document.getElementById('loading');

    if(state === 'show') {
      loader.style.display = "block";
    } else if (state === 'hide') {
      loader.style.display = "none";

    }
  }
  
}