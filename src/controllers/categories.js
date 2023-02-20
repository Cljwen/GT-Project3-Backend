const { listings } = require("../db/models");

module.exports = {
  // async getAllListings(req, res) {
  //   const retrieveListings = await listings.findAll();
  //   return res.json(retrieveListings);
  // },
  async getListingsByCategory(req, res) {
    const categoryListings = await listings.findAll({
      where: {
        category: req.query.category,
      },
    });
    return res.json(categoryListings);
  },
};
