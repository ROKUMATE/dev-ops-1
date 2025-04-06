import { Client } from '@repo/db/client';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('established the http backend ');
});

app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);

    const userDetails = await Client.user.create({
        data: {
            username: username,
            password: password,
        },
    });
    res.json({
        message: 'successfully connected ',
        id: userDetails.id,
    });
});

app.listen(3002);
