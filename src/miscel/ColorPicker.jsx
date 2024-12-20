import {useState} from "react"

function ColorPicker(){

    const [color, setColor] = useState("#000")

    function handleColor(e){
        setColor(e.target.value)
    }
    return(
        <>
            <div className="color-picker-app">
                <h2 className="color-head-text">Color Picker</h2>
                <div className="color-container" style={{backgroundColor : color}}>
                    <p>Selected Color :{color}</p>
                </div>
                <label className="input-color-label">Choose Your Color:</label>
                <input className="input-color" value={color} type = "color" onChange = {handleColor}/>
            </div>
        </>
    )
}

export default ColorPicker