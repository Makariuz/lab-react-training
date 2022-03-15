import './BoxColor.css'

export function BoxColor({r, g, b}){

    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
      };
    
    return (
    <div className="containerColor" style={divStyle}>
    rgb({r},{g},{b})
    <br/>
    {"#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}
    </div>
    )
}