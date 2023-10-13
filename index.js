console.log("hello there");

const http = require("http");
const fs = require("fs/promises");


function sendError(res) {
    res.statusCode = 400;
    res.end("Nie znaleziono strony")
}


const server = http.createServer(async function (req, res) {

    if (req.method === "GET") {
        if (req.url === "/") {
            const html = await fs.readFile("views/index.html", { encoding: "utf-8" });
            res.setHeader('Content-Type', 'text/html');
            res.end(html);

        } else {
            sendError(res);
        }
    }

});

server.listen(8000, () => {
    console.log("App started!");
})