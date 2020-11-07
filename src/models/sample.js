const knex = require('../db/knex');

/**
 * ユーザーテーブルの値取得
 */
exports.getUsers = async () => {
  try {
    return await knex.from('user');
  } catch (error) {
    throw new Error('An error occurred selecting data');
  }
};
