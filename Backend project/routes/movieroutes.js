const express=require('express')

const router=express.Router()
const moviemodel=require('../model/moviedata')
router.use(express.json())
router.use(express.urlencoded({extended:true}))


//get
router.get('/',async (req,res)=>{
try {
    const data=await moviemodel.find();
res.status(200).send(data)
} catch (error) {
    res.status(404).send('data not found')
}
})


//post
router.post('/post',async(req,res)=>{
try {
    const data=req.body
    const data1=new moviemodel(data);
    const savedata=await data1.save();
    res.status(200).send('post successfull')

    
} catch (error) {
    
}

})

//put
router.put('/put/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const data=req.body
        const newdata=await moviemodel.findByIdAndUpdate(id,data)
        res.status(200).send("updated successfully")
    } catch (error) {
        res.status(404).send('update error')
        
    }
})

//delete
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const newdata=await moviemodel.findByIdAndDelete(id)
        res.status(200).send("deleted successfully")
    } catch (error) {
        res.status(404).send('delete error')
        
    }
})






module.exports=router