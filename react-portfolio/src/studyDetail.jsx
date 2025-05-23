import Header from "./components/header";
import Footer from "./components/footer";
import DetailSection from  "./components/detailSection";


function StudyDetail() {
    return(
        <>
            <Header/>
                <div className="border-b border-[#8FB0A9] mb-4 pt-4 md:pt-24"></div>
                    <div className="mb-6 text-center">

                        <DetailSection 
                        title="SonoQuizについて" 
                        titleBg="#8FB0A9" 
                        imgSrc="quiz" 
                        text={[
                        "制作期間 : 3ヶ月",
                        "制作者 : 薗部春樹＆佐脇翔也",
                        "開発言語 : React・TypeScript",
                        "利用者数 : 20名弱"
                        ]}
                        comment="特徴的なので駐輪しておくとすぐにバレます"
                        />
                
                    <a
                        href="https://sonoquiz.jp/login"
                        className="md:mt-6 md:mb-6 inline-block bg-[#D98A66] text-[#FEFBF4] py-2 md:py-4 px-6 md:px-8 rounded-full hover:opacity-95 hover:scale-[99%] active:scale-[96%] transition-transform ease-in-out duration-200 text-sm md:text-base text-center"
                        style={{ boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)' }}

                        >
                        クリックでプレイ！
                    </a>

                </div>
            <Footer/>
        </>
    )
}
export default StudyDetail;