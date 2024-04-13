export { CreateUser };

class CreateUser {
  constructor(email, country, zipCode, formPassword) {
    (this.email = email),
      (this.country = country),
      (this.zipCode = zipCode),
      (this.formPassword = formPassword);
  }
}
