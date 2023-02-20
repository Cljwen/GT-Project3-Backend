require("express-async-errors");
const { Router } = require("express");

const listingsRouter = require("./listings");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");

const appRouter = Router();

appRouter.use("/listings", listingsRouter);
appRouter.use("/users", usersRouter);
appRouter.use("/categories", categoriesRouter);

module.exports = appRouter;
