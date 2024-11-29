import express from "express";
import axios from "axios";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello priya");
});

app.get("/http", async (req, res) => {
  try {
    const axiosRes = await axios.get("https://api.github.com/users/ayush3160");

    res.send(axiosRes.data);
  } catch (error) {
    res.send(error);
    console.error(error);
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
