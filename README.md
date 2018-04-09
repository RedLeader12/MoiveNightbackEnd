# MovieNight-2.0

Want to save your list of movies to reference later on? Use MovieNight where it connects to a database of movies and lists out your favourite movies to watch. Whether you have or not, it's a great guide for remembering what movies you haven't watched and what movies you would love to watch and recommend.

## Database Instructions

1. Create two database in postgresql called 'favourites' and 'favourites_test' 
2. Migrate the database 'knex migrate:latest'
3. Don't forget to seed if not it won't exist 'knex seed: run'

If you make a mistake, hey, at least there 'knex migrate:rollback'

## Database Structure

The database structure I followed was as given. The data has been altered before the data is entered into the database (the decimal points). This is why you cannot just pass in the full object.

```
{
    "_id": 396371,
    "overview": "Naval Aviator, Pete 'Maverick' Mitchell (Tom Cruise), takes a whirlwind adventure with partner Nick 'Goose' Bradshaw. Sexy, misunderstood, full-throttle machismo. Tremendous.",
    "posterPath": "/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg",
    "releaseDate": "2017-12-21",
    "title": "Top Gun",
    "ownScore": 5.0
    "communityScore": 9.9
}
```