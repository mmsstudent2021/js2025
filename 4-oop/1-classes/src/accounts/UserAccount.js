class UserAccount {
  #password;
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.#password = password;
  }

  login(email, password) {
    if (this.email === email && this.#password === password) {
      return "You can login";
    }
    return "email or password wrongs";
  }

  // getter
  showPassword() {
    return this.#password;
  }

  // setter
  changePassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
      return "password changed";
    }
    return "old password wrongs";
  }
}

export default UserAccount;
