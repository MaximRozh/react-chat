import { action, makeAutoObservable, runInAction } from "mobx";
import UserAdapter from "../models/adapters/user.adapter";
import UserModel from "../models/UserModel.model";
import httpService from "../services/httpService";
import { LoginType, SingUpType } from "../types/AuthTypes";

class Auth {
  userInfo: UserModel | null = null;
  rooms: string[] = [];
  constructor() {
    makeAutoObservable(this, {
      logout: action.bound,
    });
  }

  async login(body: LoginType) {
    const res = await httpService.post("user/login", body);
    const data = res.data;
    runInAction(() => {
      this.userInfo = UserAdapter.userDtoToUser(data);
    });
  }
  logout(): void {
    this.userInfo = null;
    this.rooms = [];
  }

  async singUp(body: SingUpType) {
    const res = await httpService.post("user/register", body);
    const data = res.data;

    runInAction(() => {
      this.userInfo = UserAdapter.userDtoToUser(data);
    });
  }

  async getRooms() {
    const res = await httpService.get("rooms");
    const data = res.data;
    runInAction(() => (this.rooms = data));
  }
}

const user = new Auth();
export default user;
