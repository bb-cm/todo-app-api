const knex = require('../../knex');

/**
 * ユーザーテーブルの値取得
 */
exports.getUsers = async () => {
    try {
        return await knex.from('users');
    } catch (error) {
        throw error;
    }
};