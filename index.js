console.log("hello there");

const http = require("http");
const fs = require("fs/promises");


function sendError(res) {
    res.statusCode = 400;
    res.end("Nie znaleziono strony")
}


const server = http.createServer(async function (req, res) {

    if (req.method === "GET") {
        console.log(req.url)
        if (req.url === "/") {
            const html = await fs.readFile("views/index.html", { encoding: "utf-8" });
            res.setHeader('Content-Type', 'text/html');
            res.end(html);

        } 
        else if (req.url === "/login") {
            const html = await fs.readFile("views/login.html", { encoding: "utf-8" });
            res.setHeader('Content-Type', 'text/html');
            res.end(html);

        }

        else {
            sendError(res);
        }
    }

    if (req.method === "POST") {
       console.log(req.url) 
    }
});

server.listen(8000, () => {
    console.log("App started!");
})