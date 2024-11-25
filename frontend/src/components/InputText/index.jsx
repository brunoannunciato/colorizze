const InputText = ({id, placeholder, onChange}) => {
    return (
        <div className="w-full relative mb-3 ">
            <input type="text" id={id} className="w-full border-b border-sky-600 bg-transparent focus:outline-none" placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default InputText