const data = require('../Appdata/appData');


const Home = (req, res) => {
    res.send(data.appData);
}

module.exports.Home = Home;