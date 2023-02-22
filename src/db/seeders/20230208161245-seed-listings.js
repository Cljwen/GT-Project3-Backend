"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "listings",
      [
        {
          user_id: 2,
          photo_url:
            "https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80",
          category: "Furniture",
          item_name: "Super chic sofa",
          description:
            "Bought this just 2 months ago, unfortunately my hubby doesn't like it so I am giving it away. It's super comfy and super stylish. You'll love it.",
          condition: "Like New",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          photo_url:
            "https://images.unsplash.com/photo-1567113379515-6e85e7168eb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          category: "Sports",
          item_name: "Basketball",
          description: "Just bounce it la.",
          condition: "Brand New",
          listing_type: "Give ",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1675874305/nike_air_force_1.jpg",
          category: "Shoes",
          item_name: "Nike Air Force 1",
          description:
            "Bought it because my friend ask me to, but it is the wrong size, So I am giving it away for free!",
          condition: "Like New",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          photo_url:
            "https://images.unsplash.com/photo-1610886420679-1ace2990809d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
          category: "Appliances",
          item_name: "Shiok coffee machine",
          description: "Use this to wake up in the morning. Shiok bro",
          condition: "Like New",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1676225698/Harry_Potter_and_the_Deathly_Hallows.jpg",
          category: "Books",
          item_name: "Harry Potter and the Deathly Hallows",
          description:
            "My kid wants to read this but I can't find it anywhere!",
          condition: "Well Used",
          listing_type: "Take",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          photo_url:
            "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          category: "Appliances",
          item_name: "Quick Rice Cooker",
          description:
            "No money to buy one at the moment, need it to cook rice for my daughter.",
          condition: "Well Used",
          listing_type: "Take",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          photo_url:
            "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
          category: "Appliances",
          item_name: "Kitchen Blender",
          description: "It blends. Nuff' said.",
          condition: "Like New",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1676225805/animal_abc.jpg",
          category: "Books",
          item_name: "Animal ABC",
          description:
            "My kid is 2 years old, I think this good is good for him. Time to strt reading!",
          condition: "Brand New",
          listing_type: "Take",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          photo_url:
            "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          category: "Furniture",
          item_name: "Normal Chair",
          description: "Don't like it anymore so I'm giving it away.",
          condition: "Like New",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          photo_url:
            "https://images.unsplash.com/photo-1540544093-b0880061e1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80",
          category: "Appliances",
          item_name: "Hot Iron",
          description:
            "My son's school uniform needs to be ironed and I don't have one at the moment.",
          condition: "Like New",
          listing_type: "Take",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1676227383/longsleeve_shirt.jpg",
          category: "Clothes",
          item_name: "Long sleeve shirt",
          description: "Weather is too hot. Not wearing",
          condition: "Well Used",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          photo_url:
            "https://images.unsplash.com/photo-1556084123-fe76122cd5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
          category: "Games",
          item_name: "Chess Set",
          description: "Brainy game, giving it away as I have new one.",
          condition: "Brand New",
          listing_type: "Give ",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          photo_url:
            "https://images.unsplash.com/photo-1608354580875-30bd4168b351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          category: "Appliances",
          item_name: "Breville Espresso Machine",
          description: "Use this to wake up in the morning. Shiok bro",
          condition: "Like New",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1675874251/white_school_shoes.jpg",
          category: "Shoes",
          item_name: "White School Shoes",
          description:
            "Asking for donation of a size 12 for my child to go to school. Any condition will do. Old shoes also okay. We are poor and have problems paying the bills already! Much appreciated!",
          condition: "Any",
          listing_type: "Take",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          photo_url:
            "https://images.unsplash.com/photo-1616574808693-9fce87de38a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80",
          category: "Games",
          item_name: "New Uno Deck",
          description: "Kids love this game, hope to get a used deck!",
          condition: "Any",
          listing_type: "Take",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1676227255/animal_shirt.jpg",
          category: "Clothes",
          item_name: "Animal shirt",
          description: "So cute! But my girl has overgrown the shirt",
          condition: "Well Used",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1675874251/adidas_stan_smith.jpg",
          category: "Shoes",
          item_name: "Adidas Stan Smith",
          description:
            "Bought this during a sale 6 months ago, but did not get the chance to wear it. White with green at the back.",
          condition: "Brand New",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          photo_url:
            "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
          category: "Appliances",
          item_name: "Good hair dryer no brand",
          description:
            "Dries hair really quickly. I got the new Dyson one so barely use this one.",
          condition: "Like New",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          photo_url:
            "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80",
          category: "Furniture",
          item_name: "Sofa or chair? No one knows",
          description: "See title.",
          condition: "Any",
          listing_type: "Take",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("listings", null, {});
  },
};
