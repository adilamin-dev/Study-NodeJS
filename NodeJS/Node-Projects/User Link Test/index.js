// Dependencies
const http = require ('http');
const url = require ('url');


const app = {};

app.config = {
    port: 3000,
}

app.createServer = () => {
    http.createServer(app.reqResHandler).listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });

}

app.reqResHandler = (req, res) => {
    console.log('yo')
    res.end('Hello World!')
}

app.createServer();