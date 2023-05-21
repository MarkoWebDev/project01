const fetch = require("node-fetch");

const infiniteNews = async (req, res) => {
  const fetchOptions = {
    method: "GET",
  };
  try {
    const { page } = req.query;
    const request = await fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&page=${page}&pageSize=10&apiKey=${process.env.REACT_APP_API_KEY}`,
      fetchOptions
    );
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
  infiniteNews,
};
