import "../../index.css"
import { NArBtn } from "../Atoms/NormalButton";
import mee from "../../images/me-cameralego.jpg";

function Home(){
    return(
        <section id="hero">
            <div className="flex flex-col justify-end gap-8">
                <h1 className="font-extrabold text-[162px]/[80%] tracking-[-3px]">Albar<br/>Abdul<br/>Malik</h1>
                <span className="line"></span>
                <h2 className="text-lg uppercase">A creative designer portfolio,<br/>working remotely from <strong>Tangerang, Indonesia</strong></h2>
                <NArBtn text="LinkedIn"/>
            </div>
            <div className={`relative flex p-9 justify-end text-white flex-col h-[calc(100vh-42px)] w-174.5 bg-amdb/90 bg-blend-exclusion bg-[url(${mee})] bg-size-[120%] bg-position-[50%_85%] rounded-b-[30px]`}>
                <h1 className="text-[46px] font-bold">5+</h1>
                <h2 className="text-lg mb-7">Projects</h2>
                <h1 className="text-[46px] font-bold">3yrs+</h1>
                <h2 className="text-lg">Experience</h2>
            </div>
        </section>
    )
}
export default Home;