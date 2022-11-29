const http = require('http');
const fs = require('fs/promises');
const path = require('path');
const getRequest = require('./requests/getRequest');
const postRequest = require('./requests/postRequest');
const deleteRequest = require('./requests/deleteRequest');
const patchRequest = require('./requests/patchRequest')

const PORT = 8000
const HOST = 'localhost'

const server = http.createServer(async (req, res) => {
    if (req.url.startsWith("/api/v1/task")) {
        const data = await fs.readFile(path.resolve('./data.json'), 'utf-8')
        if (req.method === 'GET') {
            getRequest(req, res, data)

        } else if (req.method === 'POST') {
            postRequest(req,res, data)

        } else if (req.method === 'DELETE') {
            deleteRequest(req, res, data)

        } else if (req.method === 'PATCH') {
            patchRequest(req, res, data)

        }
    } else {
        res.writeHead(503, "Bad request")
    }

    res.end();

})

server.listen(PORT, HOST);
console.log(`Server running http://${HOST}:${PORT}`);