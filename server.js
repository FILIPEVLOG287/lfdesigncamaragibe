const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {

    let arquivo = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url
    );

    fs.readFile(arquivo, (erro, dados) => {

        if (erro) {
            res.writeHead(404);
            return res.end("Página não encontrada");
        }

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(dados);

    });

});

server.listen(PORT, () => {

    console.log("");
    console.log("================================");
    console.log("LF DESIGN CAMARAGIBE");
    console.log("SITE FUNCIONANDO!");
    console.log("LF DESIGN CAMARAGIBE");
    console.log("================================");

});
