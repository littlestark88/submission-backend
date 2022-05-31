const { addNewBooksHandler, getBooksHandler, getBooksByIdHandler, updateBooksByIdHandler, deleteBooksByIdHandler, getBooksByNameHandler} = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addNewBooksHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBooksByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: updateBooksByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBooksByIdHandler,
    }
];

module.exports = routes;