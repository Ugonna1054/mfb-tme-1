import { ApiService } from "./api.services";

const securityService = {
  //Change Password
  ChangePassword: ({ password, newPassword }) => {
    return new Promise(async (resolve, reject) => {
      ApiService.put("/auth/ChangePassword", {
        password,
        newPassword
      })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          reject(err.response.data);
        });
    });
  }
};

export { securityService };
