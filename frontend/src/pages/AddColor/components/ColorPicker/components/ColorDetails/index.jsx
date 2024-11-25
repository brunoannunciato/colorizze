import { RiDeleteBin2Line } from "react-icons/ri";
import './style.css';

const ColorDetails = ({color, setColors}) => {
    const onRemoveIconClick = () => {
        setColors(state => {
           return state.filter(oldColor => oldColor != color)
        })
    }

    return (
        <div className='block h-9 grow overflow-hidden relative color-details' style={{backgroundColor: color}}>
            <div className="flex items-center justify-between h-full p-3 color-details__menu">
                <span className="bg-white opacity-50 w-full h-full absolute left-0 top-0"></span>
                <p className="z-10 relative text-black">{color}</p>

                <RiDeleteBin2Line className="relative z-10 cursor-pointer" color="#000000" onClick={onRemoveIconClick}/>
            </div>
        </div>
    )
}

export default ColorDetails