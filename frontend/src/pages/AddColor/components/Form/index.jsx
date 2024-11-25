import { useState } from "react"
import InputText from "../../../../components/InputText"
import ColorPicker from "../ColorPicker"

const Form = () => {
    const [colors, setColors] = useState([])
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const onSubmit = () => {
        const payload = {
            title,
            author,
            colors,
        }

        fetch('http://localhost:3001/colors', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(response => response.json())
        .then(response => {
            if (response.status === 200) {
                location.href = `/color/${response.data.palleteId}`
            }
        })
    }

    return (
        <div className="border-dotted border-2 border-sky-500 p-3 rounded-md">
            <h2 className="text-sky-500 w-96 mb-5">Add new color</h2>

            <InputText placeholder="Pallete name" name="title" value={title} onChange={event => setTitle(event.target.value)}/>
            <InputText placeholder="Author name" name="author" value={author} onChange={event => setAuthor(event.target.value)} />
            
            <ColorPicker colors={colors} setColors={setColors}/>

            <button onClick={onSubmit} className="border-2 w-full border-sky-500 text-sky-500 rounded-md py-2 mt-5 font-bold">
                Save
            </button>
        </div>
    )
}

export default Form