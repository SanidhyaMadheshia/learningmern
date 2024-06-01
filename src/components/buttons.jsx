import { useState } from "react";
const COLORS = ["green", "pink", "blue", "yellow", "purple"];

export default function Buttons() {
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
    // const onButtonClick=(color)=>()=>{
    //     setBackgroundColor(color);
    // };
    function onButtonClick(color) {  
        return ()=> setBackgroundColor(color);
    }
    return (
        <div
            className="color"
            style={
                { backgroundColor }
            }
        >
            {
                COLORS.map((color) => {
                    return (
                        <button key={color}
                            onClick={onButtonClick(color)}
                            className={backgroundColor === color ? "selected" : ""}

                        >
                            {color}

                        </button>
                    );
                }
                )
            }

        </div>
    );
}
export function PlusThree(){
    const [count,setCount]=useState(0);
    function handleClick(){
        setCount(count+3);

    }
    return (
        <>
            <button onClick={handleClick}>
                +3
            </button>
            {count}
        </>
    );
}


// import { useState } from 'react';

export function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'relative',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  )
}


// import { useState } from "react";

// const COLORS = ["green", "pink", "blue", "yellow", "purple"];

// export default function Buttons() {
//     const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

//     function onButtonClick(color) {
//         return () => {
//             setBackgroundColor(color);
//         };
//     }

//     return (
//         <div
//             className="color"
//             style={{ backgroundColor }}
//         >
//             {COLORS.map((color) => {
//                 return (
//                     <button
//                         key={color}
//                         onClick={onButtonClick(color)}
//                         className={backgroundColor === color ? "selected" : ""}
//                     >
//                         {color}
//                     </button>
//                 );
//             })}
//         </div>
//     );
// }
