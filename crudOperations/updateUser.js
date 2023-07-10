const updateUser = (url, user) => {
  const response = fetch(url, {
    method: "Put",
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
  updateUser,
};
