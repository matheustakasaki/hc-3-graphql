import { createServer } from 'http'
import { readFile } from 'fs'
import { resolve } from 'path'

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
            const path = resolve(__dirname, './pages/sign-in.html')
            readFile(path, (error, file) => {
                if (error) {
                    res.writeHead(500, 'Can´t process HTML FILE');
                    res.end();
                    return
                }

                res.writeHead(200);
                res.write(file);
            })
        }
        case '/authenticate': {
            let data = ''
            req.on('data', (chunk) => {
                data += chunk;
            });
            req.on('end', () => {
                console.log(data)
                res.writeHead(200);
                res.write(file);
            })
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
