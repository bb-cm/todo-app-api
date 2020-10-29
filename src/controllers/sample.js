const sampleService = require('../services/sample');

/**
 * GETサンプル
 * @param  {} req
 * @param  {} res
 */
exports.getSomething = async (req, res) => {
    try {
        const list = await sampleService.getSomething(req.query);
        return res.status(200).json({ list });
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || 'Internal server error.',
        });
    }
};

/**
 * GETサンプル パス指定
 * @param  {} req
 * @param  {} res
 */
exports.getPath = async (req, res) => {
    try {
        const list = await sampleService.getPath(req.query);
        return res.status(200).json({ list });
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || 'Internal server error.',
        });
    }
};