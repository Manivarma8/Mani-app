// import React from 'react';

// function Login(){
//    return (
//     <div>
//    <input type="text" placeholder='password'/>
//    <input type="text" placeholder='confirm password'/>
//    <button>log in</button>
//    </div>)}

// export default Login;

// import React,{ useState } from "react";

// function App(){
//     const [Boxing,Karathe] = useState("")
//     const [apple, Orange] = useState([])
//             function Click(event){
//         const io =  event.target.value;
//      Karathe(io)}
//         function Down(){
//       Orange((Previous)=>{
//       return [...Previous,Boxing]
//       })
//       Karathe("")
//         }

// return(
//     <div className="Push">
//         <h1>To-Do-List </h1>
//         <span id = "Dash">
//             <input  onChange={Click} value = {Boxing} type="text"/>
//       <button className="add" onClick={Down}>Add</button>
//       </span>
//       <ul>
//       {apple.map(mango =>
//        <li>{mango}</li>)}
//       </ul>
//     </div>
// )
// }
// export default App;
// import object from "./object.js";
// import Form from './form';


// function Range(){
//    return(
//       <div>
// {object.map(mani=>(
//       <Form 
//       name = {mani.Place}
//       con = {mani.Image}
//       yrs = {mani.Reason}
//       />))
   
// }
//    </div>)
// }
// export default Range;



// import React from 'react';

// function True(){
//     return(
//       <h1>Hello Manivarman 😎😎😎🥰</h1>
//     )
// }

// export default True;
import React from 'react';

    const Time = (props)=>{
   return(
    <div>
        <input type="text" onClick = {props.work}  onChange = {props.worth}/>
        <button onClick = {props.fuct}></button>
    </div>
   )
}

export default Time;


