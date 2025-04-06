import { WebSocketServer } from 'ws';
import { Client } from '@repo/db/client';

const ws = new WebSocketServer({
    port: 3001,
});

ws.on('connection', async (socket) => {
    const userDetails = await Client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        },
    });
    const id = userDetails.id;
    socket.send(`Connected successfully --  ${id}`);
});
