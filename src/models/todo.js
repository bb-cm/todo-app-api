const knex = require('../db/knex');

/**
 * Todo取得
 * @param  {object} userId  ユーザーID
 */
exports.getTodo = async (userId) => {
  try {
    return await knex
      .select('id', 'title')
      .from('todo')
      .where('user_id', userId);
  } catch (error) {
    throw new Error('An error occurred selecting data');
  }
};
