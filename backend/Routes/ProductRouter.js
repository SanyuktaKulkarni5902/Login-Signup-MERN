import { ensureAuthenticated } from "../Middlewares/Auth.js";

import { Router } from "express";
const router=Router();


router.get('/',ensureAuthenticated,(req,res)=>{
    console.log('logged in user info',req.user)
    res.status(200).json([
        {
            name:'mobile',
            price:10000

        },
        {
            name:'laptop',
            price:50000
        },
    ])
});

export {router}
