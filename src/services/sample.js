const sampleModel = require('../models/sample');

/**
 * GETサンプル
 * @param  {object} query  リクエストクエリ
 */
exports.getSomething = async (query) => {
  // objectをただ返却
  const result = { test: 'aaa', ...query };
  return result;
};

/**
 * GETサンプル パス指定
 * @param  {object} query  リクエストクエリ
 */
exports.getPath = async () => {
  // ユーザーテーブルの値取得
  const result = await sampleModel.getUsers();
  if (typeof result === 'undefined') {
    throw new Error('Result is undefined');
  }
  return result;
};
