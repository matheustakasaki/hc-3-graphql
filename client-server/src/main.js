import { createServer } from 'http'
import { readFile } from 'fs'
import { resolve } from 'path'


// criando servidor

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

            break;
        }


        case '/sign-in': {

            const filePath = resolve(__dirname, './pages/sign-in.html')

            readFile(filePath, (error, file) => {
                if (error) {
                    res.writeHead(500, 'Cant process HTML file');
                    res.end();
                }

                res.writeHead(200);
                res.write(file);
                res.end()
            })
        }
        case '/authenticate': {
            break
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
