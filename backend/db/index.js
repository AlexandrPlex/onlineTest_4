import mysql from 'mysql';
import promiseMysql from 'promise-mysql';

import config from '../config.json';

const conf = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

export const db = mysql.createConnection(conf);

export const promiseDB = promiseMysql.createConnection(conf);
