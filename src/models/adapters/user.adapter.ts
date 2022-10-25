import { UserDto } from "../dto/user.dto";
import UserModel from "../UserModel.model";

class UserAdapter {
  static userDtoToUser(userInfo: UserDto): UserModel {
    return new UserModel({
      email: userInfo.email,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      picture: userInfo.picture,
      _id: userInfo._id,
    });
  }
}

export default UserAdapter;
