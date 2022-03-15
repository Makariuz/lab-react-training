
export function Rating({children}){


  //☆ ★  
  //i tried i < 6 but it added a new star

  //later figured out that it counted the 0 too lol

  let rate = []
  for(let i = 0; i < 5; i++){
      if (i < Math.round(children)) {
          rate.push('★') 
      } else {
        rate.push('☆') 
      }
  }
  return <div> || {rate} || </div>

}