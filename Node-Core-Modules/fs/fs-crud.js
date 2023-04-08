const fs = require("fs");

//let myScrapedData = "aoirhfguahrg oaidrhgio aodirjg ao goeirjg eorgh ergij aeriogherg e dfgr."

// fs.appendFile("yo-read-me.txt", myScrapedData, function (err){
//     if (err) throw err;
//     console.log("yo Saved!")
// });

// let myFile = "./yo-read-me.txt";


// fs.readFile(myFile, function(err){
//     if(err) throw err;
//     console.log(myFile)
// });

// fs.open("myFileToOpen.txt", "w", function(err, file){
//     if (err) throw err;
//     console.log("File Opened!")
// })


// fs.unlink("yo-read-me.txt", function(err){
//     if(err) throw err;
//     console.log("File Deleted!")
// })



fs.rename("myFileToOpen.txt", "My File To Opened.txt", function(err){
    if(err) throw err;
    console.log("File Renamed!")
})



