const getTheTitles = function(books) {
    return books.map(book => book.title);

    // Alternative solution
    // return books.reduce((acc, value) => {
    //     acc.push(value.title);
    //     return acc;
    // }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
