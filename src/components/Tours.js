import Card from "./Card";

function Tours(props){
    return(
        <div className="container">
            <div className="title">
                <h1>Plan with Kartik</h1>
            </div>
            <div className="cards">
                {
                    props.tour.map((element)=>{
                        return <Card key={element.id} {...element} removeTour={props.removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;