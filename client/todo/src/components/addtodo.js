import React,{Component} from 'react';
import axios from 'axios';
class Addtodo extends  Component{
    constructor(props){
        super(props);
        this.state={
            item:"",
            todo:[],
        }

    }
    change=(e)=>{
        console.log(e.target.value);
        this.setState({
            item:e.target.value,
        })
    }
    submithandler=async (e)=>{
        e.preventDefault();
        console.log(this.state.item);
        const response= await axios({
            method:'post',
            url:'http://localhost:5000/todo/post',
            data:{
                todoname:this.state.item
            }
        })
        

    }
    del=async(id)=>{
        console.log(id);
        const response=await axios.get(`http://localhost:5000/todo/deleted/${id}`);
        console.log(response);

    }
    async componentDidMount(){
        const response=await axios.get('http://localhost:5000/todo/get');
        console.log(response.data.data);
        this.setState({
            todo:response.data.data
        })
        console.log(this.state.todo);
    }
    async componentDidUpdate(){
        const response=await axios.get('http://localhost:5000/todo/get');
        
        this.setState({
            todo:response.data.data
        })
        
    }

    render(){
        
        return(
            <div>
            <form>
                <input type="text" placeholder="enter todo here" onChange={this.change}/>
                <input type="submit"  onClick={this.submithandler} value="Add-todo"/>
            </form>
            <div>
                <ul>
                    {
                        this.state.todo.map((todo,index)=>(
 <div><div>{todo.todoname}</div><button onClick={(e)=>this.del(todo._id)}>deleted</button><button>Edit</button></div>

                        ))

                    }

                </ul>
            </div>
            </div>

        )
    }
}
export default Addtodo;