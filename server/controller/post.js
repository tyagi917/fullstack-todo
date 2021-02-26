const Todos=require('../model/todoschema.js');
exports.Posts=(req,res)=>{
    console.log(req.body);
    const t=new Todos();
    const{todoname}=req.body;
    t.todoname=todoname
    t.save((err,post)=>{
        if(err)
        {
        return res.status(400).json({error:"failed",message:"failed fetch post"})
    }
    return res.json({message:"succ"});
    
    
})

}
exports.Gets=async (req,res)=>{
    const ans= await Todos.find();
    console.log(ans);
    if(ans){
        return res.status(200).json({
            msg:"succesfully",
            data:ans
        })
    }else{
        return res.status(404).json({
            message:false,error:err
        })
    }
}
exports.Deleted=(req,res)=>{
    const id=req.params.id;
   Todos.findByIdAndRemove(id, function (err, docs) { 
        if (err){ 
            return res.status(404).json({error:err});
        } 
        else{ 
            return res.status(200).json({msg:"succesfully deleted"})
        } 
    }); 

}
exports.Updated=async(req,res)=>{
    const id=req.params.id;
    console.log(id);
    const {todoname}=req.body;
    console.log(todoname);
    const ans= await Todos.findByIdAndUpdate(id,{todoname:todoname})
    console.log(ans);
    if(res){
        return res.status(200).json({
            msg:"succesfully updated"
        })
    }else{
        return res.status(404).json({
            Error:err
        })
    }
   /* Todos.findByIdAndUpdate(id, {todoname:todoname }, 
                            function (err, docs) { 
    if (err){ 
        return res.status(404).json({
            error:err
        })
    } 
    else{ 
        return res.status(200).json({
            msg:"update succesfully",
            data:docs
        })
    } 
}); */

}