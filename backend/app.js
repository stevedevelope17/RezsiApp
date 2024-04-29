const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");

const backendRoutes = require("./routes/index.js");
const frontendRoutes = path.join(__dirname, "..", "frontend");

const host = "127.0.0.1";
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/frontend", express.static(frontendRoutes));
app.use("/", backendRoutes);

app.listen(port, host, () => {
  console.log(`A szerver itt fut: http://${host}:${port}`);
});
