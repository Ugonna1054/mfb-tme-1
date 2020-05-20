import { ApiService } from "../api.services";

const adminService = {
  //Login Admin
  Login: (email, password) => {
    return new Promise(function (resolve, reject) {
      ApiService.post("/auth/admin/login", {
        email,
        password
      })
        .then(({ data }) => {
          resolve(data);
          //ApiService.setHeader(data.token);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Get Current User Details
  Authorize: async () => {
    return await ApiService.get("/admin/me")
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(error => {
        return Promise.reject(error.response.data);
      });
  },


  //Create Backoffice officer
  createAdmin: ({
    email,
    password,
    phone,
    role,
    gender,
    firstname,
    middlename,
    lastname,
    idCard,
    displayPicture
  }) => {
    const formData = new FormData();
    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("middlename", middlename);
    formData.set("role", role);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("phone", phone);
    formData.set("gender", gender);
    formData.append("idCard", idCard);
    formData.append("displayPicture", displayPicture);

    return new Promise(function (resolve, reject) {
      ApiService.post("/admin/create", formData)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Create User/Customer by CSO
  createUser: ({
    email,
    phone,
    dob,
    address,
    gender,
    firstname,
    middlename,
    lastname,
    idCard,
    displayPicture
  }) => {
    const formData = new FormData();
    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("middlename", middlename);
    formData.set("dob", dob);
    formData.set("address", address);
    formData.set("email", email);
    formData.set("phone", phone);
    formData.set("gender", gender);
    formData.append("idCard", idCard);
    formData.append("displayPicture", displayPicture);

    return new Promise(function (resolve, reject) {
      ApiService.post("/users", formData)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Get all Agents
  getAgents: () => {
    return new Promise(function (resolve, reject) {
      ApiService.get("/users/agent")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Get all Transactions
  getTransactions: () => {
    return new Promise(function (resolve, reject) {
      ApiService.get("/transactions")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Update User status to Approved
  updateApprove: ({ id }) => {
    return new Promise(function (resolve, reject) {
      ApiService.put(`/users/update/approve/${id}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Update User status to Declined
  updateDecline: ({ id }) => {
    return new Promise(function (resolve, reject) {
      ApiService.put(`/users/update/decline/${id}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Update Transaction status to Approved
  updateApproveT: ({ id, agentId }) => {
    return new Promise(function (resolve, reject) {
      ApiService.put(`/transactions/update/approve/${id}`, {
        agentId
      })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Update Transaction status to Declined
  updateDeclineT: ({ id }) => {
    return new Promise(function (resolve, reject) {
      ApiService.put(`/transactions/update/decline/${id}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Get all loans for all users
  getLoan: () => {
    return new Promise(function (resolve, reject) {
      ApiService.get("/loans")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Update Loan status to Approved
  updateApproveL: ({ id }) => {
    return new Promise(function (resolve, reject) {
      ApiService.put(`/loans/update/approve/${id}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },
  //Update Transaction status to Declined
  updateDeclineL: ({ id }) => {
    return new Promise(function (resolve, reject) {
      ApiService.put(`/loans/update/decline/${id}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },
};

export { adminService };
