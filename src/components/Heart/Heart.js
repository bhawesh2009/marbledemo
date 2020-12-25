import React from 'react'
import './Heart.css'

import photo2 from './photo/photo2.jpg';
import photo3 from './photo/photo3.jpg';
import photo4 from './photo/photo4.jpg';
import photo5 from './photo/photo5.jpg';
import photo6 from './photo/photo6.jpg';
import photo7 from './photo/photo7.jpg';
import photo8 from './photo/photo8.jpg';
import photo9 from './photo/photo9.jpg';
import photo10 from './photo/photo10.jpg';
import photo11 from './photo/photo11.jpg';
import photo12 from './photo/photo12.jpg';
import photo13 from './photo/photo13.jpg';
import photo14 from './photo/photo14.jpg';
import photo15 from './photo/photo15.jpg';
import photo16 from './photo/photo16.jpg';
import photo17 from './photo/photo17.jpg';
import photo18 from './photo/photo18.jpg';
import photo19 from './photo/photo19.jpg';
import photo20 from './photo/photo20.jpg';
import photo21 from './photo/photo21.jpg';
import photo22 from './photo/photo22.jpg';
import photo23 from './photo/photo23.jpg';
import photo35 from './photo/photo35.jpg';
import photo27 from './photo/photo27.jpg';
import photo30 from './photo/photo30.jpg';
import photo31 from './photo/photo31.jpg';
import photo32 from './photo/photo32.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import Footer from './../Footer'

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";





export default function Heart() {
   
     
    
    return (
          <div className="main">
      
     <div className="box">
       
       
        <Carousel className="box1"> 
        <img src={photo2} alt=""/>
        <img src={photo3} alt="" />
        <img src={photo4} alt=""/>
        <img src={photo5} alt="" />
        <img src={photo6} alt=""/>
        <img src={photo7} alt=""/>
        <img src={photo8} alt=""/>
        <img src={photo9} alt=""/>        
        <img src={photo10} alt=""/>
        <img src={photo11} alt=""/>      
        <img src={photo12} alt=""/>       
        <img src={photo13} alt=""/>  
        </Carousel>
         <div className="aboutme">
           <p>
           Our Factory Moto Marble is timeless the natural stone comes in many diffrerent varieties, 
           each with its own unique coloring and styling with its luxurious look and feel. 
           marble it is looks very beautiful of walls and floor any rooms and bathroom 
           it i also use in white marble counter tops and kichen and bathrooms.
           you know the some of the most exquisite marble in the world come from italy, 
           brazil, china, spain and india has historically produced some of the most 
           gorgeous granite and marble avalible But, did you know that there are some 
           pretty amazing natural stones that are qurried right here in the india.
           Indian marble is very famouse in all over the world varieouse marble avalible 
           The makrana white marble,morward white marble,nizarna white marble,jhanjer 
           white marble, Ageriya white marble,katni white marble. 
           it is one of the best and finest marble. which have the best and purest 
           quality of marble this is know for its best quality, beautiful texture, 
           strenth, and durability. the beauti of the indian marble is very attractive 
           and beautiful. it has natural shine. White marble is one of the best choice 
           rather then cerimic tiles  because it is natural. in my country white marble 
           is a on huge demand rather then cerimic tiles. 
           </p>
           
           <TransformWrapper>
        <TransformComponent>           
          <img src={photo35} alt=""/>
          
          </TransformComponent>
          </TransformWrapper>

          
           </div>
            </div> 
                
        <div className="discount">
        <img src={photo27} alt=""/>
        </div>
        <div className="happy">
        <img className="img1"src={photo30} alt=""/>
         
        <img className="img2"src={photo31} alt=""/> 
        
        <img className="img3"src={photo32} alt=""/>
      
        </div>



           
        <div className="secand">
        <Carousel className="box1"> 
        <img src={photo14} alt=""/>
        <img src={photo15} alt=""/>        
        <img src={photo16} alt="" />
        <img src={photo17} alt=""/>
       <img src={photo18} alt=""/>
       <img src={photo19} alt=""/>
       <img src={photo20} alt=""/>
       <img src={photo21} alt=""/>
       <img src={photo22} alt=""/>
       <img src={photo23} alt=""/>
       </Carousel>
      
       
       </div>
      
       <Footer/>
       
       
         
   </div>
   
    );
};
