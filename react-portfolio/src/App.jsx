import './App.css'
import MainSection from "./components/mainSection";
import Header from "./components/header";
import Footer from "./components/footer";
import StudyDetail from "./studyDetail"; 
import Contact from "./components/contact";
import SlideShow from "./components/slideShow";
import TopButton from "./components/topButton";
import ProfileDetail from "./profileDetail";
import HobbyDetail from "./hobbyDetail";
import ScrollDefault from "./components/scrollDefault";


import { useEffect } from 'react';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  
  return (
    <>
     <Header />
      <SlideShow />
      <MainSection 
        id="studySection"
        sectionTitle="作ったもの"
        sectionText="授業の復習用のアプリを制作しました。"
        sectionText2="制作者 : 薗部＆佐脇"
        imgUrl="/studySection.jpg"
        alt="クイズアプリ画像"
        detailUrl="/studyDetail"
        imgW={300}
        imgH={250}
      />

      <MainSection 
        id="profileSection"
        sectionTitle="プロフィール"
        sectionText="水戸情報ITクリエイター専門学校2年の"
        sectionText2="薗部春樹です。"
        imgUrl="/profile.jpg"
        alt="プロフィール画像"
        detailUrl="/profileDetail"
        imgW={350}
        imgH={250}
        reverse={true}
      />

      <MainSection 
        id="hobbySection"
        sectionTitle="趣味"
        sectionText="音楽鑑賞・古着・野球観戦・雑貨集め etc..."
        sectionText2="レトロなものは大体好きです。"
        imgUrl="/hobby.jpg"
        alt="趣味画像"
        detailUrl="/hobbyDetail"
        imgW={350}
        imgH={250}
      />

      <TopButton />
      <Contact id="contact"></Contact>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
    <ScrollDefault/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profileDetail" element={<ProfileDetail />} />
        <Route path="/studyDetail" element={<StudyDetail />} />
        <Route path="/hobbyDetail" element={<HobbyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


