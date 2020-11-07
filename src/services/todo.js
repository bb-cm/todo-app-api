const todoModel = require('../models/todo');

/**
 * Todo取得
 * @param  {object} userId  ユーザーID
 */
exports.getTodo = async (userId) => {
  // Todo取得
  const result = await todoModel.getTodo(userId);
  if (typeof result === 'undefined') {
    throw new Error('Result is undefined');
  }
  return result;
};
