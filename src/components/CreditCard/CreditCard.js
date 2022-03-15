import './CreditCard.css'

export function CreditCard({type, number, expirationYear, bank, owner, bgColor, color}){

    const bColor = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
      };

    return (
     
        <div className="card" style={bColor}>
            <div className="typeCard">{type}</div>
            <div className="numberCard">{hideNumbers({number})}</div>
            <div className="expireCardName"> {expirationYear} {owner}</div>
            <div className="bankName">{bank}</div>
          
        </div>
     
     
   
    )
}

function hideNumbers(n){
    const strLength = n.toString().length
    const lastFour = n.toString().length - 4
    const arr = []
    for (let i = 0; i < strLength; i++){
       if(i < lastFour){
      arr.push("#");
    }else{
      arr.push(n.number[i]);
    }
      
    }
    return arr.join('')
}