import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Cards from './Cards';
import './index.css';
import Sdata from './Sdata';




const Main = () => {
 return(

   <>
     <Nav/>
     <div className="set">
        <h1 className="h1">New Porn </h1>
      </div>
      <span className="sexy"><h1>sexiest Porn Ever</h1></span>

    <div className="container">
      {Sdata.map((user,index)=> {
      return(
      <Cards
      imgsrc={user.imgsrc}
      title={user.title}
      sname={user.sname}
      link={user.link}
      link2={user.link2}
      />);}
    )}
    </div>
 </>
  );

};

export default Main;
