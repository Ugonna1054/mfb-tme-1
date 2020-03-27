import { ApiService } from "../api.services";

const adminService = {
  //Create Agent
  createAgent: ({
    email,
    password,
    token,
    phone,
    dob,
    address,
    firstname,
    middlename,
    lastname,
    idCard,
    passport
  }) => {
    const formData = new FormData();
    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("middlename", middlename);
    formData.set("dob", dob);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("phone", phone);
    formData.set("address", address);
    formData.append("idCard", idCard);
    formData.append("passport", passport);

    return new Promise(function(resolve, reject) {
      ApiService.customRequest({
        method: "post",
        url: ApiService.getBaseUrl() + "/users/agent",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
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
    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
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
