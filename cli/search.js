const {Camera, getCameraData} = require("../models/cameras")


// Parse arguments
let searchString = undefined;
for(let arg of process.argv){
    if(searchString !== ""){
        if(arg === "--name"){
            searchString = "";
        }
    }
    else {
        searchString = arg;
    }
}
if(!searchString && searchString !== ""){
    console.error("No command line argument --name found");
}

// load csv file
const cameras = getCameraData();

// Filter result
const searchResult = cameras.filter(camera => camera.description.includes(searchString))

// Display output
console.log(searchResult.map(c => c.toString()).join("\n"));