const getTheTitles = function(books) {
    var titles = [];
    for (i = 0; i < books.length; i++){
        titles.push(books[i].title)
    }
    return titles;
}

module.exports = getTheTitles;
