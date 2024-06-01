import { useState} from "react";
export default function FeedBackForm(){
    const [text,setText]=useState("");
    const [isSending,setIsSending]=useState(false);
    const [isSent,setIsSent]=useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setIsSending(true);
        const data =await sendMessage(text);
        data.
        setIsSending(false);
        setIsSent(true);

    }
    if (isSent) {
        return <h1>Thanks for feedback!</h1>
      }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>are u doing fucking good..?</p>
                <textarea
                    disabled={isSending}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <br/>
                <button type="submit" disabled={isSending}>
                    send
                </button>
                {isSending && <p>is sending...</p>}
            </form>
        
        </>
    );

}   
function sendMessage(text){
    console.log(text);
    return new Promise((resolve)=>{
        setTimeout(resolve,2000);
        
    })
}
const initialItems=[
    { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 }   
]
export function SnackForm(){
    const [items,setItems]=useState(initialItems);
    const [selectedItem,setSelectedItem]=useState(items[0]);

    function handleItemChange(id,e){
        setItems(items.map((item)=>{
                if(item.id===id){
                    return {
                        ...item ,
                        title : e.target.value
                    };
                }else{
                    return item;
                }
            
        }));

    }


    return (
        <>
            <h2>what is your favourite sanck</h2>
            <ul>
                {
                    items.map(item=>{
                        return (
                            <li key={item.id}>
                                <input value={item.title} onChange={(e)=> {handleItemChange(item.id,e)}}/>
                                {'  '}
                                <button onClick={()=>{
                                    setSelectedItem(item);
                                }}>
                                    choose
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <p>you picked {selectedItem.title}</p>
        </>
    )
}