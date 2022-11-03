const {Router}= require('express');
const router=new Router();
const fetch= require('node-etch');
router.get('/', async (req,res)=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json();
    res.json(data);
});
module.exports=router;