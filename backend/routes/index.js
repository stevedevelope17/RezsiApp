const express = require("express");
const router = express.Router();

// html
const loginHTMLRoute = require("./html/loginHTML.js");
const registerHTMLRoute = require("./html/registerHTML.js");
const homeHTMLRoutes = require("./html/homeHTML.js");
const gasHTMLRoutes = require("./html/gasHTML.js");
const electricityHTMLRoutes = require("./html/electricityHTML.js");

// bootstrap
const bootstrapRoutes = require("./bootstrap/bootstrap.js");
// frontend
const loginJSRoute = require("./js/login.js");
const logoutJSRoute = require("./js/logout.js");
const registerJSRoute = require("./js/register.js");
const homeJSRoute = require("./js/home.js");
const gasJSRoute = require("./js/gas.js");
const electricityJSRoute = require("./js/electricity.js");

// css
const homeCSSRoutes = require("./css/home.js");
const gasCSSRoutes = require("./css/gas.js");
const electricityCSSRoutes = require("./css/electricity.js");
const registerCSSRoute = require("./css/login-and-register.js");
// API
const registrationRoute = require("./API/registration.js");
const loginRoute = require("./API/login.js");
const logoutRoute = require("./API/logout.js");
const gasRoutes = require("./API/gas.js");
const electricityRoutes = require("./API/electricity.js");
const homeRoutes = require("./API/home.js");

// HTML oldalak használata
router.use("/", homeHTMLRoutes);
router.use("/", gasHTMLRoutes);
router.use("/", electricityHTMLRoutes);
router.use("/", registerHTMLRoute);
router.use("/", loginHTMLRoute);

// Frontends JS fájlok használata
router.use("/", loginJSRoute);
router.use("/", logoutJSRoute);
router.use("/", registerJSRoute);
router.use("/", homeJSRoute);
router.use("/", gasJSRoute);
router.use("/", electricityJSRoute);

//Bootstrap fájl használata
router.use("/", bootstrapRoutes);

// CSS fájlok használata
router.use("/", homeCSSRoutes);
router.use("/", registerCSSRoute);
router.use("/", gasCSSRoutes);
router.use("/", electricityCSSRoutes);

//API-k használata
router.use("/", registrationRoute);
router.use("/", loginRoute);
router.use("/", logoutRoute);
router.use("/", gasRoutes);
router.use("/", electricityRoutes);
router.use("/", homeRoutes);

module.exports = router;
