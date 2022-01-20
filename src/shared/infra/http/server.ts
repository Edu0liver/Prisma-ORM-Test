import express from 'express';
import { thingsRoutes } from './routes/things.routes';
import { userRoutes } from './routes/users.routes';

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(thingsRoutes);

app.listen(3000, ()=> console.log('Server is Running'));