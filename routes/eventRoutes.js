const express = require('express');
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

const eventRoutes = (db) => {
    const router = express.Router();
    const { getEvents, getEvent, createEvent } = eventController(db);

    router.get('/', getEvents);
    router.get('/:id', getEvent);
    router.post('/', authMiddleware, createEvent);

    return router;
};

module.exports = eventRoutes;
