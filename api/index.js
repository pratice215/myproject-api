import { context as ctx } from '@tonoid/helpers';

export default ({ getRouter, asyncHandler }) => {
  const router = getRouter();

  router.get('/', asyncHandler((req, res) => {
    res.send({ index: true });
  }));

  router.get('/lastDate', asyncHandler(async (req, res) => {
    const lastDate = await ctx.redis.getValue('lastDate');
    await ctx.redis.setValue('lastDate', new Date().toISOString());
    res.send({ lastDate });
  }));

  return router;
};
