const Canvas = ({colors}) => {
    return (
        <div className="grow flex w-full">
            {
                colors.map(color => {
                    return (
                        <div className="grow flex flex-col justify-end" key={color} style={{backgroundColor: color}}>
                            <div className="py-2 text-center font-bold relative">
                                <div className="absolute bg-slate-100 top-0 left-0 w-full h-full bg-opacity-50"></div>
                                <p className="z-10 relative">
                                    {color}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Canvas