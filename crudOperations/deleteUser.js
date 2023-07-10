const deleteUser = (url, user) => {
  const response = fetch(url, {
    method: "Delete",
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
  deleteUser,
};
