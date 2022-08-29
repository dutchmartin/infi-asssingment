const fs = require("fs");

class Camera {
    constructor(number, description, Latitude, Longitude) {
        this.number = number;
        this.description = description;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
    }
    toString(){
        return this.number + ' | ' + this.description + ' | ' + this.Latitude + ' | ' + this.Longitude;
    }

}
// load csv file
function getCameraData()
{
    return fs.readFileSync(__dirname + "/../data/cameras-defb.csv")
        .toString()
        .split("\n")
        .slice(1) // Skip the labels
        .map(row => row.split(";"))
        .filter(row => row.length === 3) // Filters errors
        .map(row =>
            new Camera(
                parseInt(row[0].match(/UTR-CM-(\d{3})/)[1]),
                row[0],
                parseFloat(row[1]),
                parseFloat(row[2])
            ));
}

module.exports = { Camera, getCameraData }