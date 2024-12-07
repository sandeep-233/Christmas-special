import "./App.css";

import Draggable from 'react-draggable'; 
import { TypeAnimation } from 'react-type-animation';

import tree_img from './assets/christmas_tree.png';
import deco1_img from './assets/deco_1.png';
import deco2_img from './assets/deco_2.png';
import goldedBulb1_img from './assets/golded_bulb1.png';
import goldedBulb2_img from './assets/golded_bulb2.png';
import redBulb_img from './assets//red_bulb.png';
import whiteBulb_img from './assets/white_bulb.png';
import santa from './assets/santa.gif'
import { useState } from "react";
import Snowflake from "./Snowflake";

function App() {

  const [flag, setFlag] = useState(false)
  function handleButton() {
    setFlag(!flag)
  }

  const [display, setDisplay] = useState(true);
  function handleDisplay() {
    setDisplay(!display)
  }

  function snow() {
    let animationDelay = '0s';
    let fontSize = '100px';
    let arr = Array.from('Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!')
     return arr.map((el, i) => {
      animationDelay = `${(Math.random()*16).toFixed(2)}s`;
      fontSize = `${(Math.floor(Math.random()*10) + 10)}px`;
      let style = {
        animationDelay,
        fontSize
      }
      return (<Snowflake key={i} id={i} style={style}/>)
     })
  }

  return (
    <div className=" h-[100vh] w-full flex flex-col justify-around bg-gray-900 items-center overflow-hidden">

      {
        flag && (
          <div className=" absolute top-0 flex w-[95%] h-fit">
          {snow()}
          </div>
        )
      }

      {
        flag && (
          <div className=" absolute gap-28 flex flex-row items-center md:text-3xl lg:text-5xl text-2xl">
            <TypeAnimation
              sequence={[
                'merry '
              ]}
              wrapper="span"
              speed={0.1}
              // style={{ fontSize: '5em', display: 'inline-block' }}
              repeat={0}
              cursor = {false}
              className=" uppercase text-slate-100 font-semibold glow_text"
            />
            <TypeAnimation
              sequence={[
                'christmas'
              ]}
              wrapper="span"
              speed={0.1}
              // style={{ fontSize: '5em', display: 'inline-block' }}
              repeat={0}
              cursor = {false}
              className=" ml-6 uppercase text-slate-100 font-semibold glow_text"
            />
          </div>
        )
        
      }
      
      {
        flag && (
          <img
            src={santa}
            className=" absolute bottom-0 right-0 w-24 "
          />
        )
      }

      <div className="tree w-full h-[75%] flex items-center justify-center mt-6">
        <img
          src={tree_img}
          alt="christmas tree"
          className=" h-[85vh]"
        />

        {
          flag && (
            <div className=" glow_star absolute w-3 h-3 top-[32px]"></div>
          )
        }
      </div>

        <div className="flex gap-2 flex-wrap">
          <Draggable>
          <img
          src={deco1_img}
          className=" w-[100%] md:w-[45%] h-[25%] cursor-pointer"
          />  
          </Draggable>  
          <Draggable>
          <img
          src={deco2_img}
          className=" w-[100%] md:w-[45%] h-[25%] cursor-pointer"
          />
          </Draggable>

          <Draggable>
          <img
          src={goldedBulb1_img}
          className={` w-[50%] md:w-[16%] h-[12%] ${flag === false ? ("") : ("glow_gold")}  cursor-pointer`}
          />
          </Draggable>
          <Draggable>
          <img
          src={goldedBulb2_img}
          className={`w-[50%] md:w-[16%] h-[12%] ${flag === false ? ("") : ("glow_gold")}  cursor-pointer`}
          />
          </Draggable>

          <Draggable>
          <img
          src={whiteBulb_img}
          className={` w-[50%] md:w-[16%] h-[12%]  ${flag === false ? ("") : ("glow_white")} cursor-pointer`}
          />
          </Draggable>
          <Draggable>
          <img
          src={whiteBulb_img}
          className={` w-[50%] md:w-[16%] h-[12%]  ${flag === false ? ("") : ("glow_white")} cursor-pointer`}
          />
          </Draggable>

          <Draggable>
          <img
          src={redBulb_img}
          className={` w-[50%] md:w-[16%] h-[12%] ${flag === false ? ("") : ("glow_red")} cursor-pointer`}
          />
          </Draggable>
          <Draggable>
          <img
          src={redBulb_img}
          className={`w-[50%] md:w-[16%] h-[12%] ${flag === false ? ("") : ("glow_red")} cursor-pointer`}
          />
          </Draggable>

        </div>

      <button onClick={handleButton}
          className=" absolute text-slate-50 bottom-0 border-purple-600 
          border-[1px] px-2 py-1 rounded-xl glow_button hover:scale-95 z-50"
        >
          {
            flag == true && (<p>OFF</p>)
          }
          {
            flag == false && (<p>ON</p>)
          }
      </button>
        
      {
        display && (
          <div className=" p-11 absolute glassmorphic flex flex-col gap-2 items-center justify-center text-lg text-center">
            <p className="glow_text">Drag the items to decorate the <b>CHRISTMAS TREE</b> .</p>
            <p className="glow_text">After that hit the <b>ON</b> button.</p>
            <button onClick={handleDisplay}
              className=" text-slate-50 border-purple-600 
          border-[1px] px-4 py-1 rounded-xl glow_button hover:scale-95 z-50"
            >
              OK
            </button>
          </div>
        )
      }
    </div>
  );
}

export default App;
