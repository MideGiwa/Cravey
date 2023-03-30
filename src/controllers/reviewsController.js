const config = require("../config");
const axios = require("axios");

const list = async (req, res) =>  {
    const { query } = req;

    if (
        !query.offset ||
        !query.globalId ||
        !query.limit
    ) {
        res.status(400).send("Missing parameters.");
    }

    const options = {
        method: 'GET',
        url: config.url + 'reviews/list',
        params:  query,
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