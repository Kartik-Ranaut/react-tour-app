import Card from "./Card";

function Tours(props){
    return(
        <div>
            <div>
                <h1>Plan with Love</h1>
            </div>
            <div>
                {
                    props.tour.map((element)=>{
                        return <Card {...element}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;