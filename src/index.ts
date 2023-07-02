import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use('/public', express.static(__dirname + '/public'));

import partnerRoutes from './routes/partner.routes';
app.use('/partner', partnerRoutes);

import cartRoutes from './routes/cart.routes';
app.use('/cart', cartRoutes);

import orderRoutes from './routes/order.routes';
app.use('/order', orderRoutes);

import tagChatRoutes from './tagChat/index';
app.use('/chat', tagChatRoutes);

app.listen(3000, () => {
    console.log('App is up and running on port 3000!')
});

