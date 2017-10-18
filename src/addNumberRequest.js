const request = require('request');

const urlAdd = 'http://localhost:3000/add/';
function addNumberRequest(a, b){
    return new Promise((resolve, reject) => {
        request(`${urlAdd}${a}/${b}`, (err, res, body) => {
            if (err) reject(new Error('Error'));
            const isNumber = typeof a === 'number' && typeof b === 'number';
            if (!isNumber) reject(new Error('Type Error'));
            resolve(+body);
        });
    });
}

module.exports = addNumberRequest;