// import React from 'react';
// import Object from './object.js';
// function Input(props){
//     return(
//         <div>
//   <div className = "body">
// <p>{props.point1}</p>
// <p>{props.point2}</p>
// </div>
// </div>
//     )
// }

// function section(){
//     return(
// <div>
//         {Object.map(Vijay=>(
//             <Input
//           point1 = {Vijay.Brain} 
//           point2 = {Vijay.Body}
//             />))}
//     </div>)
// }
// export default section;

// import React from 'react';

// function False(){
//     return(
//         <div>
//             <form action="">
//                 <input type="text" placeholder = "Type your Email" />
//                 <input type="text" placeholder = "Password" />
//                 <button type = "submit">Submit</button>
//             </form>
//         </div>
//     )

// }

// export default False;


// import React from 'react';


// const Vishnu = (props)=>{
//     return(
//         <div>
//         <h1>{props.img}</h1>
//         <p>{props.pic}</p>
//         <p>{props.networth}</p>
//         </div>
//     )
// }
// const Ram = ()=>{
//     return(
// <Vishnu 
//    img =  {"HI MANIVARMAN"}
//    pic = {"Hi IAM TRILLIONAIRE"}
//    networth = {100000000000000}
// />
//     )
// }
// export default Ram;


// import React from 'react';


// const A =()=>{
 
//   const G = ()=>{
//      document.getElementById('root').style.backgroundColor = "Black";
//     document.getElementById('root').style.color = "white";
//     }
//  const F= ()=>{
// document.getElementById('root').style.backgroundColor= ("transparent")
// document.getElementById('root').style.color = "black"; }
//     return(
//       <div className = "Love">
//     <div>
//       <span>
//         <h1>Iam off to gym now</h1>
//         </span>
//     </div>
//     <button onMouseOver={G} onMouseOut={F}>In </button></div>
//   )
// }
// export default A;
// import React from "react";
// import Gandhi from './object';
// import './style.css';
// import Happy from './app';


// function Hippo(){
//   return(
//    <div>
//     <Happy 
//     morn = {Gandhi[0].Morning}
//     img = {Gandhi[0].mimg}
//     Morn = {Gandhi[1].noon}
//     Img = {Gandhi[1].nimg}
//   />
//   </div>
//     )
// }

// export default Hippo;
// import React from 'react';

//     const Divi = (props)=>{
//   return(
//     <div className = "Form">
//     <div onClick={()=>props.delete(props.name)
//     }> 
//     <li>{props.ex}</li>
//     </div>
//     </div>
//     )
// }
// export default Divi;

// import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// const System = (props)=>{

//         return(
//           <div className='container-fluid'>
           
//          <textarea  placeholder = "Pass it" value = {props.name}
//          type="text">{props.name}</textarea> 
//          <div>
//          <button className='btn susc' onClick={()=>props.delete(props.id)} 
//          ><DeleteIcon style ={{color : "white"}} /></button>  </div>
//       </div>
//       )} 

// export default System;

import React from "react";
import Handlechanges from "./app";
import Library from "./dummy.js";

const Passing =()=>{
  return(
    <div className="Fish">
<Handlechanges
head_1 = {Library[0].heading_1}
note_1 = {Library[0].notes_1}
pics_1 = {Library[0].pic_1}
button = {Library[0].button_1}
/>
<Handlechanges
head_1 = {Library[1].heading_2}
note_1 = {Library[1].notes_2}
pics_1 = {Library[1].pic_2}
button = {Library[1].button_2}
/>
<Handlechanges
head_1 = {Library[2].heading_3}
note_1 = {Library[2].notes_3}
pics_1 = {Library[2].pic_3}
button = {Library[2].button_3}
/>
</div>)}





export default Passing
