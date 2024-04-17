const http = require('http')

const port = 8080;

const server = http.createServer((req,res)=>{
    if(req.url === '/home'){
        res.writeHead(200, {"content-type": "text/html"})
        res.end("<h1> Titulo </h1>")
    }
}
);

server.listen(port, () => console.log(`Rodando na porta ${port}`))