import express from 'express';
import {userSignup,userLogin} from '../Controller/User-controller.js'
import { getProducts,getProductById } from '../Controller/product-controller.js';



const route = express.Router();
route.post('/signup',userSignup);
route.post('/login',userLogin)

route.get('/products',getProducts)
route.get(`/product/:id`,getProductById)
export default route;
