import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){
    let description=`${info.substring(0,200)}....`;
    const [data,setdata]= useState(description);
    const [readmore,setreadmore]=useState(false);
    function readmoreHandler(){
        setreadmore(!readmore);
        if(!readmore){description=`${info}`;}
        else{
            description=`${info.substring(0,200)}....`;
        }
        setdata(description);
    }
    return(
        <div className="card">
            <img className="image" src={image}></img>
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>

            </div>
            <div className="description">
                {data}
                <span onClick={readmoreHandler}>
                    {readmore ? `  Show less`:`  Read more`}
                </span>
            </div>
            <button onClick={()=> removeTour(id)}>Not Intrested</button>
        </div>
    );
}

export default Card;