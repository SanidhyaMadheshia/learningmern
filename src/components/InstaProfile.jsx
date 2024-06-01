// import { id } from "ethers";
import { useState } from "react";
export default function DisplayInsta(){
    const initialData = {
        likes : 100,
        dislikes : 100,
        isLike : false,
        isDisliked : false
    };
    const [data,setData]=useState(initialData);
    function handleLikes(){
        setData((prevData)=>{
            return (
                {
                    ...prevData,
                    likes : prevData.isLike ? prevData.likes-1 : prevData.likes + 1,
                    isLike : !prevData.isLike
                }
            );
        })
    }
     
    return (
        <div>
            <button className={`like-button ${data.isLike? 'liked' : ''}`}
                onClick={handleLikes}
            >
            likes | <span className="likes-counter" >{data.likes}</span>
            </button>
        </div>
    )
}