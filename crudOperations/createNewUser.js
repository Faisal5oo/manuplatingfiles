const createUser = (url, user) => {
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createUser,
};
