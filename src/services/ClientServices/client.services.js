import { ApiService } from "../api.services";

const clientService = {
  //Get all Customers/Users
  getCustomers: () => {
    return new Promise(function (resolve, reject) {
      ApiService.get("/users")
        .then(({ data }) => {
          resolve(data);
          window.console.log("customers is", data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Get all Transactions for one user
  getTransaction: () => {
    return new Promise(function (resolve, reject) {
      ApiService.get("/transactions/me")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Get all loans for one user
  getLoan: () => {
    return new Promise(function (resolve, reject) {
      ApiService.get("/loans/me")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Post loan
  postLoan: ({ amount, tenor, account, purpose, bank }) => {
    return new Promise(function (resolve, reject) {
      ApiService.post("/loans", {
        amount,
        tenor,
        account,
        purpose,
        bank
      })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Validate account
  validateAccount: ({ number }) => {
    return new Promise(function (resolve, reject) {
      ApiService.get(`/accounts/${number}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  }
};

export { clientService };
