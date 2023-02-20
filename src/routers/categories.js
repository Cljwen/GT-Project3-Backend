const { Router } = require("express");
const categoriesController = require("../controllers/categories");
const authMiddleware = require("../middleware/auth");

const categoriesRouter = Router();
// categoriesRouter.get("/", categoriesController.getAllListings);
categoriesRouter.get("/", categoriesController.getListingsByCategory);

// everything below requires auth
categoriesRouter.use(authMiddleware);

// categoriesRouter.get(
//   "/:user_id/homepage/",
//   categoriesController.getListingsOfCategory
// );

module.exports = categoriesRouter;
