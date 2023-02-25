const { users, listings } = require("../db/models");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  async createUser(req, res) {
    const { body: payload } = req;
    const currentDate = new Date();

    const newUser = await users.create({
      ...payload,
      created_at: currentDate,
      updated_at: currentDate,
    });

    return res.json(newUser);
  },
  async getOneUser(req, res) {
    const user = await users.findOne({
      where: {
        id: req.params.user_id,
      },
    });
    return res.json(user);
  },
  async getUserByEmail(req, res) {
    const user = await users.findOne({
      where: {
        email: req.params.email,
      },
    });
    return res.json(user);
  },
  async getAllUsers(req, res) {
    const retrievedUsers = await users.findAll();
    return res.json(retrievedUsers);
  },
  //this edit listing may have some issue with what the model returns
  async editUser(req, res) {
    const { body: payload } = req;
    const currentDate = new Date();
    const editedData = await users.update(
      {
        ...payload,
        updated_at: currentDate,
      },
      {
        where: {
          id: req.params.user_id,
        },
      }
    );
    return res.json(editedData);
  },
  async deleteUser(req, res) {
    const deleteResult = await users.destroy({
      where: {
        id: req.params.user_id,
      },
    });
    return res.json(deleteResult);
  },
  async sendgridEmail(req, res) {
    const { body: payload } = req;
    await sgMail
      .send({
        ...payload,
      })
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].headers);
      })
      .catch((error) => {
        console.error(error.response.body.errors);
      });
    return res.send(req.body);
  },
  async createLike(req, res){
    const { body: payload } = req;
    const liker = await users.findOne({
      where: {
        id: payload.original_id,
      },
    });
    const likedlisting = await listings.findOne({
      where: {
        id: payload.listing_id,
      },
    });

    const newLike = await likedlisting.addUsers(liker);

    return res.json(newLike);
  },
  async deleteLike(req, res){
    const { original_id, listing_id } = req.params;

    const disliker = await users.findOne({
      where: {
        id: original_id,
      },
    });
    const dislikedlisting = await listings.findOne({
      where: {
        id: listing_id,
      },
    });

    const removeLike = await dislikedlisting.removeUsers(disliker);

    return res.json(removeLike);
  }
};


// {
//       ...payload,
//       created_at: currentDate,
//       updated_at: currentDate,
//     }