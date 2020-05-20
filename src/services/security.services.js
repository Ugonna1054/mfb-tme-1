import { ApiService } from "./api.services";

const securityService = {
  //Change Password
  ChangePassword: ({ password, newPassword }) => {
    return new Promise((resolve, reject) => {
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
  },

  //Send Password reset link to email to user/admin
  SendResetEmail: email => {
    return new Promise((resolve, reject) => {
      ApiService.post(`/auth/resetPasswordEmail/${email}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          reject(err.response.data);
        });
    });
  },

  //Reset password user/admin
  ResetPassword: ({ password, token }) => {
    return new Promise((resolve, reject) => {
      ApiService.put(`/auth/ResetPassword/${token}`, {
        password
      })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          reject(err.response.data);
        });
    });
  },
};

export { securityService };
