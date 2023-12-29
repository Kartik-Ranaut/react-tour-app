import { useState } from "react";

function Card({id,image,info,price,name}){
    let description=`${info.substring(0,200)}....`;
    const [readmore,setreadmore]=useState(false);
    function readmoreHandler(){
        setreadmore(!readmore);
    }
    return(
        <div className="card">
            <img src={image}></img>
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>

            </div>
            <div className="description">
                {description}
                <span onClick={readmoreHandler}>
                    {readmore ? `Show less`:`Read more`}
                </span>
            </div>
            <button >Not Intrested</button>
        </div>
    );
}

export default Card;