import Header from "../../components/Header"
import Content from "./components/Content"
import Form from "./components/Form"
import useAddColor from "./hooks"

const AddColor = () => {
    const {onLogoClick, colors, setColors} = useAddColor()

    return (
        <div className="h-full w-full flex flex-col">
            <Header onLogoClick={onLogoClick}/>
            <Content>
                <Form colors={colors} setColors={setColors}/>
            </Content>
        </div>
    )
}

export default AddColor