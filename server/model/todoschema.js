const {Schema,model}=require('mongoose');
const Todo=new Schema({
    todoname:{
        type:String,
        require:true
    }

},{timestamps:true},)
module.exports=model('todos',Todo);
