// Dependencies
const url = require ('url');
const {StringDecoder} = require('string_decoder')

// Module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;
    const trimmedPath = pathName.replace(/^\/+|\/+$/g, '')
    const reqQuery = parsedUrl.query;
    const reqMethods = req.method.toLowerCase();
    const reqHeaders = req.headers;
    const decoder = new StringDecoder ('utf8');

    let realData = '';



    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    })

    req.on('end', () => {
        console.log(realData);
        realData += decoder.end;
        console.log(parsedUrl);
        console.log(reqMethods);
        console.log(reqHeaders);
        res.end('Hello World!');
    })

    
}

module.exports = handler;