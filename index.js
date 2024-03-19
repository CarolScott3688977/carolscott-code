// QuantumFlux.js
const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Fetches and returns the latest headlines from a news website.
 * @param {string} url - The URL of the news website.
 * @returns {Promise<Array<string>>} - A promise that resolves to an array of headlines.
 */
async function fetchLatestHeadlines(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const headlines = [];
        $('h2.headline').each((index, element) => {
            headlines.push($(element).text().trim());
        });
        return headlines;
    } catch (error) {
        throw new Error('Error fetching headlines: ' + error.message);
    }
}

/**
 * Generates a random password with the specified length.
 * @param {number} length - The length of the password.
 * @returns {string} - The generated password.
 */
function generateRandomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

module.exports = {
    fetchLatestHeadlines,
    generateRandomPassword
};
