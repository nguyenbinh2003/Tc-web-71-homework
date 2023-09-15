const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index");
const logRequest = require("./middlewares/logRequest.js");

const app = express();
const PORT = 3001;

app.use(morgan("combined"));
app.use("/", logRequest, router);

app.listen(PORT, () => {
  console.log(`Server is runing at PORT ${PORT}`);
});
