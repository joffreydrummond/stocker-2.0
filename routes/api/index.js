const router = require("express").Router();

const strainRoutes = require("./strains");

router.use("/strains", strainRoutes);

module.exports = router;