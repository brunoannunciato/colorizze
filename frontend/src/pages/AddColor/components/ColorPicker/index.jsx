import { useState } from "react"
import ColorDetails from "./components/ColorDetails"

const ColorPicker = ({colors, setColors}) => {
    const [pickedColor, setPickedColor] = useState('')

    const onAddColor = () => {
        setColors(state => {
            return [...state, pickedColor]
        })
    }

    return (
        <div className="text-sky-500">
            <p className="mb-2">Select new color: </p>
            <div className="flex gap-3 items-center mb-2">
                <input type="color" value={pickedColor} onChange={(event) => setPickedColor(event.target.value)}/>
                <button className="border px-2 py-1 rounded-md border-sky-500" onClick={onAddColor}>+ Add color to pallete</button>
            </div>

            <p className="mb-2">Pallete colors:</p>

            <div className="flex">
                {
                    colors.length ? colors.map((color) => { 
                        return (<ColorDetails color={color} key={color} setColors={setColors}/>)
                        })
                    : "Color pallete is empty"
                }
            </div>
        </div>
    )
}

export default ColorPicker