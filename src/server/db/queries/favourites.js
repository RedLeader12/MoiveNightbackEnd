const knex = require('../connection');

function getAllFavourites() {
    return knex('favourites')
    .select('*');
}

function addfavourite(favourite) {
    return knex('favourites')
    .insert(favourite)
    .returning('*');
}

function updateFavourite(id, favourite) {
    return knex('favourites')
    .update(favourite)
    .where({ id: parseInt(id) })
    .returning('*');
  }

function deleteFavourite(id) {
    return knex('favourites')
    .del()
    .where({ id: parseInt(id) })
    .returning('*');
}
  
module.exports = {
    getAllFavourites,
    addfavourite,
    updateFavourite,
    deleteFavourite
}