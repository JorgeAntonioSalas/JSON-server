
const getRequest = (req, res, data) => {
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200)
    res.write(data)
}

module.exports = getRequest