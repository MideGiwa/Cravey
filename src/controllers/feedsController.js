const config = require("../config");
const axios = require("axios")


const autoComplete = async (req, res) => {
    const { query } = req;

    if (!query.q) {
        res.status(400).send("Missing parameters.");

    }

    const options = {
        method: 'GET',
        url: config.url + 'feeds/auto-complete',
        params: { q: query.q },
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

};

const search = async (req, res) => {
    const { query } = req;

    if (
        !query.start ||
        !query.maxResult
    ) {
        res.status(400).send("Missing parameters.");

    }

    const options = {
        method: 'GET',
        url: config.url + 'feeds/search',
        params: query,
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

};

const list = async (req, res) => {
    const { query } = req;

    if (
        !query.limit ||
        !query.start
    ) {
        res.status(400).send("Missing parameters.");

    }

    const options = {
        method: 'GET',
        url: config.url + 'feeds/list',
        params: query,
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

};

const listSimilarities = async (req, res) => {
    const { query } = req;

    if (
        !query.limit ||
        !query.start ||
        !query.id
    ) {
        res.status(400).send("Missing parameters.");
    }

    const options = {
        method: 'GET',
        url: config.url + 'feeds/listSimilarities',
        params: query,
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

};

module.exports = {
    autoComplete,
    search,
    list,
    listSimilarities
}

//TODO: response codes especially errors