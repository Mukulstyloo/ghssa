import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';



const Cards = (props) => {
  return(

    <div className="Cards">
     <div className="card">
      <img src={props.imgsrc} alt="my pic" className="card_img"/>
      <div className="card_info">
       <span className="card_category">{props.title} </span>
       <h3 className="card_title">{props.sname} </h3>
       <a  href={props.link2}>
         <button>Pics</button>
       </a>
       <a href={props.link} target="_blank">
         <button>Profile & videos </button>
       </a>
      </div>
     </div>
    </div>
);
}

export default Cards;
