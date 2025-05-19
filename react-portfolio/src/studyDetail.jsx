import Header from "./components/header";
import Section from "./components/section";
import Footer from "./components/footer";
import ReturnTop from "./components/returnTop";



function StudyDetail() {
    return(
        <>
            <Header/>
                <div className="md:pt-20 text-center">
                    <div className="border-b border-[#8FB0A9]"></div>
                    <p className="inline-block rounded-full py-4 px-8 text-lg">~ SonoQuizについて ~</p>
                    <div className="flex justify-evenly max-w-full px-4 md:px-60">
                        <img src="/k.svg" alt="" className="hidden md:block"/>
                        <img src="/k2.svg" alt="" className="hidden md:block"/>
                        <img src="/quiz-icon.png" alt="" className="rounded-lg border-2 w-20 md:w-24"/>
                        <img src="/k3.svg" alt="" className="hidden md:block"/>
                        <img src="/k4.svg" alt="" className="hidden md:block"/>
                       
                    </div>
                   <div className="flex justify-center my-6 max-w-full">
                        <div className="px-14 md:px-40 py-6 border-2 border-[#8FB0A9] rounded-full text-[14px] md:text-base">
                            <div className="text-start space-y-2">
                            <p>・制作期間 : 3ヶ月</p>
                            <p>・制作者 : 薗部春樹＆佐脇翔也</p>
                            <p>・開発言語 : React・TypeScript</p>
                            <p>・利用者数 : 20名弱</p>
                            </div>
                        </div>
                    </div>

                
                    <div className="inline-block bg-[#D98A66] text-[#FEFBF4] py-2 md:py-4 px-6 md:px-8 rounded-full mb-6 hover:opacity-95 hover:scale-[99%] active:scale-[96%] transition-transform ease-in-out duration-200">
                        <a href="https://sonoquiz.jp/login" className="text-sm md:text-base">クリックでプレイ！</a>
                    </div>
                </div>
            
            <ReturnTop/>
            <Footer/>
        </>
    )
}
export default StudyDetail;