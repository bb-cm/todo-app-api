const knex = require('../db/knex');

/**
 * ユーザーテーブルの値取得
 */
exports.getUsers = async () => knex.from('users');
