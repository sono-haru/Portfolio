import Header from "./components/header";
import Section from "./components/section";
import Footer from "./components/footer";
import DetailText from "./components/detailText";


function StudyDetail() {
    return(
        <>
            <Header/>
                <div className="max-w-full px-4 md:px-40">
                    <p className="text-center">~ SonoQuiz ~</p>
                    <div className="mt-4 md:mt-0 flex justify-center">
                        <img src="/quiz-icon.png" alt="" className="rounded-lg border-2 border-solid w-24"/>
                    </div>
                    
                    <div className="mt-10 md:mt-0 ">
                        <DetailText title="制作期間" text="3ヶ月" borderColor="#8FB0A9"/>
                    </div>
                </div>

            <Footer/>
        </>
    )
}
export default StudyDetail;