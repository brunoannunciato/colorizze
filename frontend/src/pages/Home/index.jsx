import Header from "../../components/Header"
import Canvas from "./components/Canvas"
import Footer from "./components/Footer"
import useHome from "./hooks"

const Home = () => {
    const {pallete, getPalleteColor} = useHome()

    return <div className="w-full h-full flex flex-col">
        <Header onLogoClick={getPalleteColor}/>
        <Canvas colors={pallete.colors}/>
        <Footer pallete={pallete}/>
    </div>
}

export default Home