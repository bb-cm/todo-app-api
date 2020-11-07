const todoService = require('../services/todo');

/**
 * Todo取得
 * @param  {} req
 * @param  {} res
 */
exports.getTodo = async (req, res) => {
  try {
    const list = await todoService.getTodo(req.query.userId);
    return res.status(200).json({ list });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || 'Internal server error.',
    });
  }
};
