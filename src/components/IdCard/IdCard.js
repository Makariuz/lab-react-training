import './IdCard.css'

export function IdCard({picture, firstName, lastName, gender, height, date}){
    return(
        <div className="idCards">
          <div className="imageDiv">
           <img src={picture} alt="pic"/> 
            </div>
        <div className="infoDiv">
        <ul>
        <li> <b>First Name: </b>{firstName}</li>
            <li> <b>Last Name: </b>{lastName}</li>
            <li>  <b>Gender: </b>{gender}</li>
            <li>  <b>Height: </b>{height}</li>
           <li> <b>Birth: </b>{date}</li>
         
         
        </ul>
</div>
        </div>
    )
}