

export function CreditCard({type, number, expirationYear, bank, owner, bgColor, color}){

    const bColor = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
      };
    
  

    return (
        <div style={bColor}>
            <div className="typeCard">{type}</div>
            <div className="numberCard">  {number}</div>
            <div className="expireCardName"> {expirationYear} {owner}</div>
            <div className="bankName">{bank}</div>
          
        </div>
    )
}