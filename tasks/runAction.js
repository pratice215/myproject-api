import dotenv from 'dotenv';

import { init, context as ctx } from '@tonoid/helpers';
import logger from '@tonoid/logger';
import redis from '@tonoid/redis';

// Load env
dotenv.config();

// Load action
(async () => {
  await init([
    redis(),
  ], { logger });

  const lastDate = await ctx.redis.getValue('lastDate');
  await ctx.redis.setValue('lastDate', new Date().toISOString());
  ctx.logger.info(`lastDate updated: ${lastDate}`);
  process.exit();
})();
