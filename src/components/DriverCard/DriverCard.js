import './DriverCard.css'

export function DriverCard({driverCard}){

    let rate = []
    for(let i = 0; i < 5; i++){
        if (i < Math.round(driverCard.rating)) {
            rate.push('★') 
        } else {
          rate.push('☆') 
        }
    }

    return( <div className="driverCardContainer">
    <div className="driverImg">
    <img src={driverCard.img} alt={driverCard.name} height="100px"/>
    </div>
    <div className="driverInfo">
    <span className="driverName"> {driverCard.name} </span>
    <span className="rate"> {rate}</span>
    <span>{driverCard.car.model} - {driverCard.car.licensePlate}</span>
    </div>
    </div>)
}