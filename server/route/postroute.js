const express=require('express');
const router=express.Router();
const{Posts,Gets,Deleted,Updated}=require('../controller/post.js');
router.use('/post',Posts);
router.use('/get',Gets);
router.use('/deleted/:id',Deleted);
router.use('/update/:id',Updated)
module.exports=router;