const fetch = require("node-fetch");

const requestEndpoint = `https://newsapi.org/v2/everything?q=apple&pageSize=10&apiKey=${process.env.REACT_APP_API_KEY}`;

const everything = async (req, res) => {
  const fetchOptions = {
    method: "GET",
  };
  try {
    const request = await fetch(requestEndpoint, fetchOptions);
    const response = await request.json();
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(400).json("Fail to fetch");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  everything,
};
