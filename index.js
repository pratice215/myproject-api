import dotenv from 'dotenv';

import { init } from '@tonoid/helpers';
import express from '@tonoid/express';
import logger from '@tonoid/logger';
import redis from '@tonoid/redis';

import apiRoot from './api/index.js';

// Load env
dotenv.config();

(async () => {
  await init([
    redis(),
    express({
      endpoints: [
        {
          path: '/',
          handler: apiRoot,
        },
      ],
    }),
  ], { logger });
})();
