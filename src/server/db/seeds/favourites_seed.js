exports.seed = (knex, Promise) => {
  return knex('favourites').del()
  .then(() => {
    return knex('favourites').insert({
      overview: 'The Haunted House',
      poster_path: "/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg",
      release_date: "2017-12-21",
      title: "Top Gun",
      vote_average: 5.0,
      popularity: 8.0
    });
  })
};