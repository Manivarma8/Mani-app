//  import React from 'react';
//  import Build from './brief.js'
//  import Card from './contact'
//  import Avathar from './avathar'
//  function Cards(){                                       
//   return(
//     <div>

//         <Avathar
//         img = {"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} />
//      <Card
//      name= {Build[0].Name}
//       age= {Build[0].Age}
//       networth = {Build[0].Networth}
//       img = {Build[1].Url}
//       experiance = {Build[1].Experiance}
//       />

//       <Card
//       name= {Build[1].Name}
//       age= {Build[1].Age}
//       networth = {Build[1].Networth}
//       img = {Build[0].Url}
//       experiance = {Build[0].Experiance}
//       />  
//     <Card 
//     name = {Build[2].Name}
//     age= {Build[2].Age}
//     networth = {Build[2].Networth}
//     img = {Build[2].Url}
//     experiance = {Build[2].Experiance}
//     />
//    </div>
//   )}
 
//  export default Cards;





// import React from 'react';
// import Notes from './brief';
// import Caste from './contact'


// function change(Notes){
//         return (
//         <Caste
//         pic = {Notes.Pic} 
//         district = {Notes.District}
//         cost =  {Notes.Cost}
//         place = {Notes.Place}

//         />
//         )
// }
// function Body(){
// return(
//         <div>    
//                 <h1> My Wish of my life</h1>
//                <dl className = "body">{Notes.map(change)}</dl> 
//               </div>
// )

// }
// export default Body;
// import React from 'react';
// import Form from "./contact"
// var Ismani =false;

// function Dorm(){

//     return(
//        <div className = "form">    
//   <Form vijay = {Ismani}/> 
//        </div>

//     )
// }

// export default Dorm;


// function Vijay(){
//        return(
//        <State />)
// }
// export default Vijay;

// import React,{useState} from 'react';


// function App(){
//        setInterval(increase,1000)
//        const date = new Date().toLocaleTimeString();
//        const [count,timeout] = useState(date);

// function increase(){
//        const Dates = new Date().toLocaleTimeString();
       
// timeout(Dates)

// }

// return (
//        <div className='center'>
// <h1>{count}</h1>
// <button className='Btn' onClick={increase}>Date</button>
//        </div>
// )


// }
// export default App;



// import React from 'react';
// import Tables from './table';
// import Object from './object';

// function create(Contact){
     
//           return(  
//               <div className = "palace">
//            <Tables
//            title1 = {Contact.Title1}
//            title2 = {Contact.Title2}
//            title3 = {Contact.Title3} 
//            name = {Contact.Name}
//            aim = {Contact.Aim}
//            life = {Contact.Life}
//             />
//             </div>
//           )
//    }
//    function Content(){
//        return(
//     Object.map(create))
//        }
// export default Content;



// import React from "react";
// import Watch from './object';
// const [A, B, C] = Watch;

// const {Display :{type,Bright}}= A;
// const {Disp:{Type,bright}}= B;
// const{Dis:{types,brights}}= C;
// function Vijay(){
//     return (
//         <div>
//         <h1>Analysis</h1>
//     <table>
//           <tr>
//             <th>Company</th>
//             <th>Price</th>
//             <th>Display</th>
//             <th>Bright</th>
//             <th>Rating</th>
//           </tr>
//           <tr>
//         <td>{A.Company}</td>
//         <td>{A.Price}</td>
//         <td>{type}</td>
//         <td>{Bright}</td>
//         <td>{A.Rating}</td>
//           </tr>
//           <tr>
//             <td>{B.Comp}</td>
//             <td>{B.Pric}</td>
//             <td>{Type}</td>
//             <td>{bright}</td>
//             <td>{B.Rati}</td>
//           </tr>
//           <tr>
//             <td>{C.Com}</td>
//             <td>{C.Pri}</td>
//             <td>{types}</td>
//             <td>{brights}</td>
//             <td>{C.Rat}</td>
//           </tr>
//     </table>
//     </div>)
// }
// export default Vijay

// import React,{useState} from 'react';
// import Objects,{Tamil} from './object'


// function Dim(){
// const [mani,varman] = useState("Hello");
// const [Apple, Orange] = useState(false);
// const [name,age] = Objects;
//  const [Name, Age]=(Tamil(name));

//   function Modify(){
// Age("ji")
// }
// function Mouse(){
//     Orange(true)
// }
// function MouseOut(){
//     Orange(false)
// }

// return(
//     <div className='center'>
//     <h1>{mani}</h1>
//     <input type="text"placeholder="What is your name?"/>
//     <button onClick={Modify} onMouseOver={Mouse}
//     onMouseOut={MouseOut}
//     style = {{backgroundColor :  Apple ? "black" : "white", color : Apple ? "orange" : "teal"}}
//      >Submit</button>
//     </div>
// )
// }

// export default Dim;


// import React,{ useState } from "react";

// function Main(){
// const [Change,Print] = useState({
//     fname : "",
//     lname : ""
// })

//  function Modify(event){
// const {name,value} = event.target;

//  Print((previous)=>{
//     if(name === "fname"){
//         return{
//             fname : value,
//             lname : previous.lname
//         }}

//         else if(name === "lname"){
// return{
//    fname : previous.fname,
//    lname : value
// }
//    }
//  })



//  }

//     return(
//         <div>
//         <form>
//             <h1>🙏🏾{Change.fname} {Change.lname}</h1>
// <input name = "fname" placeholder ='FirstName' onChange={Modify}/>
// <input name = "lname" type="text" placeholder="Lastname" onChange={Modify}/>
// <button  onClick = {Modify}>Submit</button>
//         </form>
//         </div>
//     )
// }
// export default Main;

// import React,{useState} from "react";

// function App(){
// const [Left, Right]= useState({
//     fname : "",
//     lname : "",
//     mail : ""
// })

// function Change(event){
//     const {name, value} = event.target;
//     Right((Back=>{
//         return{
//         ...Back,
//         [name] : value}
//         if(name ==="fname"){
//             return{
//                 fname : value,
//                 lname : Back.lname,
//                 mail : Back.mail
//             }
//         }
//         else if(name === "lname"){
//             return{
//             fname : Back.fname,
//             lname : value,
//             mail : Back.mail
//         }}

//         else if(name === "mail"){
//             return{
//             fname : Back.fname,
//             lname : Back.lname,
//             mail : value
//             }
//         }

        
//     }))
// }
// return(
//     <div className="center">
//      <h1>I AM {Left.fname} {Left.lname}</h1>
//      <p>{Left.mail}</p>
//      <form>
//      <input name = "fname" onChange= {Change} value = {Left.fname} placeholder = "First name" type="text" />
//      <input name = "lname" onChange= {Change} value = {Left.lname} placeholder = "Second Name" type="text" />
//      <input name = "mail"  onChange= {Change} value = {Left.mail} placeholder = "Gmail" type="email"/>
//      <button onClick={Change}>Submit</button>
//      </form>
//     </div>
// )
// }

// export default App;
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
// import React,{useState} from 'react';

// function App(){
// const [tamil, Tamil] = useState(0);
// const [english, English] = useState(0);
// const [maths, Maths] = useState(0);
// const [science, Science] = useState(0);
// const [social, Social] = useState(0);
// const first = (event)=>{
// const a = event.target.value;
// Tamil(a)
// }
// const second = (event)=>{
//   const b = event.target.value
//   English(b)
//   }
//   const third = (event)=>{
//    const c =  event.target.value
//     Maths(c)
//     }
//     const fourth = (event)=>{
//     const d = event.target.value
//       Science(d)
//       }
//       const fifth = (event)=>{
//        const e = event.target.value
//        Social(e)
//         }
//         const Addnum = ()=>{
//           var sum = tamil + english + maths + science + social;
//           Tamil(sum)
//         }
    
//   return(
//     <div className='center'>
//   <h1>Total Marks</h1>
// <input type="number" placeholder='Tamil'   onChange={first} value = {tamil} />
// <input type="number" placeholder='English' onChange={second}  value = {english} />
// <input type="number" placeholder='Maths'   onChange={third} value = {maths} />
// <input type="number" placeholder='Science' onChange={fourth}  value = {science} />
// <input type="number" placeholder='Social'  onChange={fifth} value = {social} />
// <button onClick = {Addnum} type = "submit"> Submit </button>
// <p>Total =  {tamil}</p>
// </div>
//   )
// }
// export default App;
// import React,{ useState } from 'react';
// import Banu from './form';
// import Input from './input';
// function App(){
//   const [India,America] = useState("");
//   const [Second,China] = useState([]);
 
  
//   function Vijay(event){
    
//     const fish = event.target.value
//     America(fish)
//   }
//   function Mani(){
//     China((Prev)=>{
//   return[...Prev,India]
//   })
//   America("")
//   }
//  function ali(id){
//    China(prev=>{
//   return prev.filter(function(jiv,value){
//   return value !== id;
//    })})
//  }
//   return(
//     <div className='Push'>
//     <h1>To Do List</h1>
//     <span id = "Dash">

//     <Input
//     value = {India}
//     function = {Vijay}
//     />
//     <button className = "add" onClick = {Mani}>Add</button>
//     </span>
// {Second.map((Vijay,Coma) => 
//   <Banu 
//   key = {Coma}
//   id = {Coma}
//   text = {Vijay}
//   delete = {ali} 
//   />
// )}
//     </div>
//   )
// }
// export default App;
// import React from 'react';
// import True from './input';
// import False from './login';
// import  './style.css';

// var Vijay = false ;
//     function App(){
//       return(
//         <div className = "container">
//         {Vijay === true? <True/> : <False/>}
//         </div>
//       )
//     }
//  export default App;
// import React from 'react';
// import Bhuvaneswari from './input';

// const App = ()=>{
//   return(
//   <div>  
//     <Bhuvaneswari />
//   </div>)
// }
// export default App;
// import React from 'react';
// const El = (props)=>{
//   return(
//       <div className = "contain">
//       <h1>{props.morn}</h1>
//       <img className='img' src={props.img} alt="sorry Mani" />
//       <h1>{props.Morn}</h1>
//       <img src={props.Img} alt="Hek" />
//     </div>
//   )
// }
// export default El;

// import React,{useState} from 'react';

//   const Hari = ()=>{
//     const [Vijay, Varman] = useState(
//      { first : "",
//        last : "",
//       email : ""} 
//     )
// //eslint-disable-next-line
// const Gandhis = (event)=>{ 
//   const name= event.target.name;
//   const value = event.target.value;
//   Varman(prevValue => {
  
//     if(name === "first"){
//       return{
//         first : value,
//         last :  prevValue.last,
//         email : prevValue.email
//       }
//     }
//       else if(name === "last"){
//         return{
//           first : prevValue.first,
//           last : value,
//           email : prevValue.email

//         }
//       }
//       else if(name === "email"){
//         return{
//           first : prevValue.first,
//           last : prevValue.last,
//           email : value
//         }
//       }
//     })

// return(
//   <div className = "contain">
//     <h1>  Hello Trillionaire Mr.{Vijay.first} {Vijay.last}</h1>
//     <p>{Vijay.email}</p>
//     <input  type="text"  name = "first" placeholder='First name' onChange = {Gandhis} value = {Vijay.first}/>
//     <input  type="text"  name = "last"  placeholder='Last name' onChange = {Gandhis} value = {Vijay.last} />
//     <input  type="email" name = "email" onChange = {Gandhis} placeholder='Email' value = {Vijay.email} />
//     <button onChange={Gandhis}>Press me if you want to become a Trillionaire</button>
//   </div> 
// )
//   }}

//  export default Hari;


// import React,{useState} from "react";
// import Times from './input';
// import Form from  './form'
// const App = ()=>{
//   const [select, map] = useState([]);
//   const Delete = (id)=>{
//     return(
//      map(prevValue=>
//       {return prevValue.filter((item, index)=>{
//         return index !== id})
//       })
//     )}
//     const Modify = (Write)=>{
//       map((previous)=>{
//           return[...previous,Write]
//       })
      
//     }
    
//   return(
//     <div className = "container">
//   <Form Addnote = {Modify}/>

// <div>
//  {select.map((Time,indexes)=>(
//   <Times key = {indexes} 
//   name = {indexes}
//    delete = {Delete} 
//    ex = {Time} />
   
   
//    ))}
//  </div>
//    </div>

//  )
//  } 
// // // export default App;
// import React,{useState} from 'react';
// import Garm from './input';
// import Manivarman from './form';
// const App=()=>{
//   const[box, Box] = useState([]);
// const Delete = (id)=>{
//   return(
// Box(preval=>{
//  return preval.filter((Xam,Indexes)=>{
// return id !== Indexes})
// })
// )}
//  const Boxes = (Up)=>{
//           Box((preval)=>{
//           return[...preval,Up]
//          })}
//   return(
//     <div className='Gmail'>
//    <Manivarman  Sister = {Boxes}/>
  
//    <div className = "Sub">
//      {box.map((Vijay,Indexes)=>(
//     <Garm  name = {Vijay}  
//     key = {Indexes} 
//     id = {Indexes} 
//     delete = {Delete}/>
//      ))}</div>
// </div>
//   )
// } 
// export default App;



import {useState} from 'react';

const Structure = (props)=>{
  const[work, setwork] = useState(100)
  const[shade, Setshade] = useState(false)
  const[text,settext] = useState(false)
  const[zoom, Setzoom] = useState(1)
  const[bold, Setbold] = useState()
  const handle = ()=>{
    return(
      setwork(work + 20)
      )
  }

  const Font = text === false ? "black" : "white";
  const shades = ()=>{
    return(
      Setshade(true),
      settext(true),
      Setzoom(1.06),
      Setbold("bold")
    )
  }
  const Exit = ()=>{
    return(
      Setshade(false),
      settext(false),
      Setzoom(1),
      Setbold("normal")
      )
  }
  

  const correction = shade === true ? 'rgb(3, 2, 52)' : 'white';
  const Style = {
    backgroundColor : correction,
    color : Font,
    transition : "1s",
    transform : `scale(${zoom})`
  }
  return(
                                                   
   <>
        <div onMouseOver = {shades} onMouseOut={Exit}  style = {Style} className="boxes">
      <h1 className="heading">{props.head_1}</h1>
      <p className="notes">{props.note_1}</p>
      <img style= {{width : ` ${work}px` }} className = "img" src={props.pics_1} alt={props.alt}/>
   <button onClick = {handle} style = {{fontWeight : bold}} className = "btn btn-primary">{props.button}</button>
   </div>
</>
  

  )
  }
  export default Structure;



 




































































































