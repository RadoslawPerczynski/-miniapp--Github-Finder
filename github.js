class GitHub {
  constructor() {
    this.client_id = '8271c5338d83d8405adb';
    this.client_secret = '183ec6d2a95d10556765a76b57e2da40b75b1d9b';
  }

  async getUserProfile(userName) {

    try {
      const profileResponse = fetch(`https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const reposResponse = fetch(`https://api.github.com/users/${userName}/repos?sort=updated&per_page=15&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      //waiting for both to come back
      const [receivedProfileData, receivedReposData] = await Promise.all([profileResponse, reposResponse]);
      const profile = await receivedProfileData.json();
      const repos = await receivedReposData.json();

      return {
        profile,
        repos
      }

      
    } catch(err) {
      console.error(err);
    }
 
    
  }
}