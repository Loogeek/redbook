import { action, flow, observable } from "mobx";
import { request } from "@/utils/request";
import { save } from "@/utils/Storage";
import Loading from "@/components/widget/Loading";

class UserStore {
  @observable userInfo: any;

  @action
  setUserInfo = (info: any) => {
    this.userInfo = info;
  };

  requestLogin = flow(function* (
    this: UserStore,
    phone: string,
    pwd: string,
    callback: (success: boolean) => void
  ) {
    Loading.show();
    try {
      const params = {
        name: phone,
        pwd,
      };
      const { data } = yield request("login", params);
      if (data) {
        save("userInfo", JSON.stringify(data));
        this.userInfo = data;
        callback?.(true);
      } else {
        this.userInfo = null;
        callback?.(false);
      }
    } catch (error) {
      console.log(error);
      this.userInfo = null;
      callback?.(false);
    } finally {
      Loading.hide();
    }
  });
}

export default new UserStore();
