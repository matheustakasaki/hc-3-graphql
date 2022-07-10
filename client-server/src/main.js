import { createServer } from 'http'

const server = createServer((req, res) => {
    switch (req.url) {
        case '/status': {
            res.writeHead(200);
            res.write('okay');
            res.end();

            return;
        }
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server está rodando em http://127.0.0.1');

})
