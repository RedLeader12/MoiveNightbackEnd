const Router = require('koa-router');
const queries = require('../db/queries/favourites');

const router = new Router();
const BASE_URL = `/api/v1/favourites`;

router.get(BASE_URL, async (ctx) => {
    try {
      const favourites = await queries.getAllFavourites();
      ctx.body = {
        status: 'success',
        data: favourites
      };
    } catch (err) {
      console.log(err)
    }
  })

  router.post(`${BASE_URL}`, async (ctx) => {
    try {
      const favourite = await queries.addfavourite(ctx.request.body);
      if (favourite.length) {
        ctx.status = 201;
        ctx.body = {
          status: 'success',
          data: favourite
        };
      } else {
        ctx.status = 400;
        ctx.body = {
          status: 'error',
          message: 'Something went wrong.'
        };
      }
    } catch (err) {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    }
  })

  router.put(`${BASE_URL}/:id`, async (ctx) => {
    try {
      const favourite = await queries.updateFavourite(ctx.params.id, ctx.request.body);
      if (favourite.length) {
        ctx.status = 200;
        ctx.body = {
          status: 'success',
          data: favourite
        };
      } else {
        ctx.status = 404;
        ctx.body = {
          status: 'error',
          message: 'That favourite movie does not exist.'
        };
      }
    } catch (err) {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    }
  })

  router.delete(`${BASE_URL}/:id`, async (ctx) => {
    try {
      const favourite = await queries.deleteFavourite(ctx.params.id);
      if (favourite.length) {
        ctx.status = 200;
        ctx.body = {
          status: 'success',
          data: favourite
        };
      } else {
        ctx.status = 404;
        ctx.body = {
          status: 'error',
          message: 'That favourite movie does not exist.'
        };
      }
    } catch (err) {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    }
  })

module.exports = router;