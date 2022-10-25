class UserModel {
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  _id: string;

  constructor(data: Omit<UserModel, "fullName">) {
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.picture = data.picture;
    this._id = data._id;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default UserModel;
