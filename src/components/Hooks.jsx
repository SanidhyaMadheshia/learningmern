import { useState} from "react";
import { sculptureList } from "./SculptureData";

export default function DisplaySculptures(){
    const [index,setIndex]=useState(0);
    const [showMore,setShowMore]=useState(false);
    function handleNextClick(){
        setIndex(index + 1);

    }
    function handleMoreClick(){
        setShowMore(!showMore);
    }
    let sculpture=sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                next
            </button>
            <h1>
                <i>{sculpture.name}</i> made by
                {sculpture.artist}
            </h1>
            <h3 onClick={handleMoreClick}>
                {showMore? 'hide ' : 'show'} details

            </h3>
            {showMore && <p>{sculpture.description}</p>}
        </>
    )
}