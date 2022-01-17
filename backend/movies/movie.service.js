const csvdb = require('csv-database');

module.exports = {
    getAll,
};

async function getAll() {
    const databaseObject = await csvdb("./database/movies.csv", ["Film","Genre","Lead Studio","Audience score %","Profitability","Rotten Tomatoes %","Worldwide Gross","Year"], ",");
    return await databaseObject.get();
}