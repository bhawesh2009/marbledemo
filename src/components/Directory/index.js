import React from 'react';
import { Link } from 'react-router-dom';
import white from './../../assets/white.jpg';
import toranto from './../../assets/toranto.jpg';
import southblack from './../../assets/southblack.jpg';
import slate from './../../assets/slate.jpg';
import red from './../../assets/red.jpg';
import rajasthan from './../../assets/rajasthan.jpg';
import panda from './../../assets/panda.jpg';
import jodhpur from './../../assets/jodhpur.jpg';
import green from './../../assets/green.jpg';
import blackm from './../../assets/blackm.jpg';
import alaskagold from './../../assets/alaskagold.jpg';
import alaska from './../../assets/alaska.jpg';
import Heart from './../Heart/Heart';
import './styles.scss';




const Directory = props => {
  

  
  
  return (
    

    <div className="directory">
      <div className="wrap">
       
          <div
          
          className="item"
          style={{
            backgroundImage: `url(${white})`
          }}
        >
          <Link to="/search/white">
                White Marble
              </Link>

        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${toranto})`
          }}
        >
         


          <Link to="/search/toranto">
                Toranto Marble
              </Link>
        </div>
      
      
        <div
          className="item"
          style={{
            backgroundImage: `url(${southblack})`
          }}
        >

          

          <Link to="/search/southblack">
                South black
              </Link>
        
        </div>
      
      
      
        <div
          className="item"
          style={{
            backgroundImage: `url(${slate})`
          }}
        >
           <Link to="/search/slate">
                Slate marble
              </Link>
        </div>
      
      
        <div
          className="item"
          style={{
            backgroundImage: `url(${red})`
          }}
        >
          <Link to="/search/red">
                Red Marble
              </Link>
      
      
        </div>
      
      
        <div
          className="item"
          style={{
            backgroundImage: `url(${rajasthan})`
          }}
        >
           <Link to="/search/rajasthan">
                R Black Granite
              </Link>
      
        </div>
      
      
        <div
          className="item"
          style={{
            backgroundImage: `url(${panda})`
          }}
        >
          <Link to="/search/panda">
                Panda White
              </Link>
        
        </div>
      
      
        <div
          className="item"
          style={{
            backgroundImage: `url(${jodhpur})`
          }}
        >
          <Link to="/search/jodhpur">
                Jodhpuri Marble
              </Link>
        </div>
      
        <div
          className="item"
          style={{
            backgroundImage: `url(${green})`
          }}
        >
          <Link to="/search/green">
                Green Marble 
              </Link>
        </div>
      
        <div
          className="item"
          style={{
            backgroundImage: `url(${blackm})`
          }}
        >
           <Link to="/search/blackMurcury">
                Black Murcury
              </Link>
        </div>
      
        <div
          className="item"
          style={{
            backgroundImage: `url(${alaskagold})`
          }}
        >
           <Link to="/search/alaskagold">
                Alask Gold
              </Link>
        </div>
      
        <div
          className="item"
          style={{
            backgroundImage: `url(${alaska})`
          }}
        >
           <Link to="/search/alaskawhite">
                Alask White
              </Link>
        </div>
        
              
      </div>

       <Heart/>

    </div>
  
   









  );
};

export default Directory;
