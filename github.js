class GitHub {
  constructor() {
    this.client_id = '8271c5338d83d8405adb';
    this.client_secret = '183ec6d2a95d10556765a76b57e2da40b75b1d9b';
  }

  async getUserProfile(userName) {

    try {
      const profileResponse = await fetch(`https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      
      return {
        profile
      }

    } catch(err) {
      console.error(err);
    }
 
    
  }
}