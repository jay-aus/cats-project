const express = require('express');
const { CAT_BREED_ENUM } = require('../common/constants.js');
// const { catServiceHandler } = require('../services/handler/catService')
const routes = express.Router({
    mergeParams: true
});
// const logger = require('simple-node-logger').createSimpleLogger();

routes.get('/', (req, res) => {
    res.status(200).json({})
});

routes.get('/top-five-cats', async (req, res) => {
    // logger.debug(req);
    const { breed_type } = req.query;
    if (!breed_type || !Object.values(CAT_BREED_ENUM).includes(breed_type.toLowerCase())) {
        return res.status(400).json({
            error:
            'Query string type should be one of child_friendly, stranger_friendly, dog_friendly or all',
        });
    }

    // const result = await catServiceHandler();
    res.status(201).json(result);
});


module.exports = {
    routes,
}
