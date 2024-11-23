const Header = ({onLogoClick}) => {
    return (
        <div className="shadow-xl w-full flex justify-between padd p-5 z-10">
            <button onClick={onLogoClick} className="text-2xl cursor-pointer">
                Colori<span className="text-rose-500">z</span><span className="text-purple-500">z</span>e
            </button>

            <button className="border-solid border-2 border-green-600 text-green-600 rounded-md py-1 px-2 font-bold">Create pallete</button>
        </div>
    )
}

export default Header