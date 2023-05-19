// Dependencies
const http = require ('http');
const {handleReqRes} = require ('./helpers/reqResHandler')


const app = {};

app.config = {
    port: 3000,
}

app.createServer = () => {
    http.createServer(app.handleReqRes).listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });

}

app.handleReqRes = handleReqRes;



app.createServer();