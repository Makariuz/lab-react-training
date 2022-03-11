

export function Random({min, max}){
    min = Math.ceil(min);
    max = Math.floor(max);
    return (
        <div> 
        random number between {min} and {max} => {Math.floor(Math.random() * (max - min) + min)}
        </div>
        ); 
}