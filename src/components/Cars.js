import React ,{Component} from 'react';
import {data} from '../model/data'
import {Link} from 'react-router-dom';
export default class Cars extends Component{
    constructor(props){
        super(props);        
        this.state={
        cars:data
        }
    }
  
    render(){
        const carNode=this.state.cars.map((car)=>{
            return (
                <div key ={Math.random()}>
                    <img src={car.media} width="100" key={Math.random()}/>
                    <Link className="nav" to ={"/carDetails/"+car.id}  key={car.id}>
                    {car.name} - {car.model} - ( {car.price})</Link>
                </div>
            )
        })
        return(
            <div>
                <h2>Choose your favorite Car</h2>
                <div className="list-group">
                    {carNode}
                </div>

            </div>
        )
    }
}