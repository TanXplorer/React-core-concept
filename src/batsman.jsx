import { useState } from "react"

export default function Batsman(){

const [runs,setRuns] = useState(0)
const [sixes,setSixes] = useState(0)

const handleSingle=() =>
{
   const updatedRuns = runs+1;
   setRuns(updatedRuns);

}
const handleFour=()=>{

  const updatedRuns = runs+4
  setRuns(updatedRuns)
}

const handleSix=()=>{
    const updatedRuns = runs+6;
    const updateSixes= sixes+1;
    setRuns(updatedRuns)
    setSixes(updateSixes)
}
return (

    <div>

        <h3>Player: Bangladeshi Batsman</h3>
        <p><small>Six: {sixes}</small></p>
        <h1>Score: {runs}</h1>

        <button onClick={handleSingle}>Singles</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>
    </div>

)



}