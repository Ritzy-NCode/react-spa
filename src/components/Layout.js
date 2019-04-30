import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import {Home} from './Home';
import {Customers} from './Customers';
import Login from './Login';
import Cars from './Cars';
import {Greet} from './Greet';
import {CarDetails} from './CarDetails';

export const Layout = ()=>(
    <div>
        <nav>
            <Link className ="nav" exact to='/'>Home</Link>
            <Link className ="nav" exact to='/users'>Customers</Link>
            <Link className ="nav" exact to='/cars'>Cars</Link>
            <Link className ="nav" exact to='/login'>Login</Link>
            <Link className ="nav" exact to='/greet/Ritzy'>Greet</Link>
        </nav>
    <main className="container">
        <Switch>
            <Route path="/" exact component= {Home}/>
            <Route path="/users" exact component= {Customers}/>
            <Route path="/login" exact component= {Login}/>
            <Route path="/cars" exact component= {Cars}/>
            <Route path="/carDetails/:carId" exact component= {CarDetails}/>
            <Route path="/greet/:username" render={(props)=>(<Greet{...props}/>)}/>
            <Route component= {NotFound}/>
        </Switch>
    </main>
    </div>

)
const NotFound =()=><h2>Sorry No Matching Route Found....</h2>


