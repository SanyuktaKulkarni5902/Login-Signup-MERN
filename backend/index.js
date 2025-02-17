import express from 'express';
const app = express();
import './Models/db.js'
import bodyParser from 'body-parser';
import cors from 'cors';
import {router as authRouter} from './Routes/AuthRouter.js';
import {router as productRouter} from './Routes/ProductRouter.js';

const PORT = process.env.BACKEND_PORT;



app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRouter)
app.use('/products',productRouter);




app.listen(PORT ,()=>{
    console.log(`server is running on port ${PORT}`);

})