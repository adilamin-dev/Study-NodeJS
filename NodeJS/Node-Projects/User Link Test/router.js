// Dependencies
const sampleHandler = require ('./hendlers/routingHandlers/sample');
const aboutHandler = require ('./hendlers/routingHandlers/about');

// Module scaffolding
const router = {
    sample: sampleHandler,
    about: aboutHandler,
}

module.exports = router;