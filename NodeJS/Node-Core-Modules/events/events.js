const fs = require('fs');
const rs = require('./demofile.txt');

rs.on('open', function (){
	console.log('File is opened.')
})