require("express-async-errors");
const { Router } = require("express");

const listingsRouter = require("./listings");
const usersRouter = require("./users");
const likesRouter = require("./likes");

const appRouter = Router();

appRouter.use("/", listingsRouter);
appRouter.use("/", usersRouter);
appRouter.use("/", likesRouter);

module.exports = appRouter;
