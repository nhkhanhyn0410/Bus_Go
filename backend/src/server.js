import http from 'http';
import app from './app.js';
import config from './config/index.js';

const server = http.createServer(app)

const startServer = async () => {
    try {
        server.listen(config.port, () => {
            console.log(`Server khởi động thành công`, {
                port: config.port,
            });
        })
    } catch (error) {
        console.log(`Lỗi khi khởi động server`, {
            error: error.massage,
        })
    }
}

startServer();

export default server;