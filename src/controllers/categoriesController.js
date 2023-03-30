const config = require("../config");
const axios = require("axios");

const list = async (req, res) =>  {
    const options = {
        method: 'GET',
        url: config.url + 'categories/list',
        headers: {
            'X-RapidAPI-Key': config.apiKey,
            'X-RapidAPI-Host': config.host
        }
    };

    try {
        await axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data);
        })
    } catch (error) {
        console.error(error);
    };
}

module.exports = {
    list,
}