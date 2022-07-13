import { createServer } from 'http'

const server = createServer((req, res) => {
    switch (req.url) {
        case '/status': {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.write(JSON.stringify({
                status: 'okay'
            }));
            res.end();

            return;
        }


        // Qualquer coisa que não for /status resultará em 404
        default: {
            res.writeHead(404, 'Service not found');
            res.end();
        }
    }
});


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server está rodando em http://${HOSTNAME}:${PORT}`);

})
