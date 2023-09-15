const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const router = require("./routes");
const errorHandle = require("./middleware/errorHandle");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(morgan("combined"));
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.set("views", path.join(__dirname, "./views"));

router(app);
app.use(errorHandle);

app.listen(PORT, () => {
  console.log(`Server is runing at PORT ${PORT}`);
});
