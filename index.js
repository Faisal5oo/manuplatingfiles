const { getAllUsers } = require("./crudOperations");
const { createUser } = require("./crudOperations/createNewUser");
const { updateUser } = require("./crudOperations/updateUser");

// getAllUsers("http://localhost:3001/users")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const user = {
  id: 5,
  name: "Feroz Khan",
  email: "ferozkhan@example.com",
  age: 24,
  dateOfBirth: "10-08-1997",
  address: {
    city: "Lahore",
    state: "Punjab",
    zipCode: "123",
  },
};

// "http://localhost:3001/users"

updateUser("http://localhost:3001/users/5", user);
