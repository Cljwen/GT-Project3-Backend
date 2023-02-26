const { likes } = require("../db/models");

module.exports = {
  async getAllLikes(req, res) {
    const retrievedLikes = await likes.findAll({
      where: {
        user_id: req.params.original_id,
      },
    });
    return res.json(retrievedLikes);
  },
  async getAllLikesFromDatabase(req, res) {
    const retrievedLikes = await likes.findAll();
    return res.json(retrievedLikes);
  },
};