const { Router } = require("express");
const likesController = require("../controllers/likes");
const authMiddleware = require("../middleware/auth");

const likesRouter = Router();

//this one need to edit to new Auth user
likesRouter.get("/:original_id/likes", likesController.getAllLikes);
likesRouter.get("/:original_id/likesfromdatabase", likesController.getAllLikesFromDatabase)

//everything below requires auth
likesRouter.use(authMiddleware);

module.exports = likesRouter;
