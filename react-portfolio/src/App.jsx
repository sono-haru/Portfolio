import './App.css'
import Section from "./components/section";
import Header from "./components/header";
import Footer from "./components/footer";
import StudyDetail from "./studyDetail"; 
import Contact from "./components/contact";
import SlideShow from "./components/slideShow";


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
      <Section 
        id="profileSection"
        sectionTitle="プロフィール"
        sectionText="水戸情報ITクリエイター専門学校2年の薗部春樹です。"
        imgUrl=""
        alt="プロフィール画像"
        detailUrl="/profileDetail"
      />

      <Section 
        id="studySection"
        sectionTitle="作ったもの"
        sectionText="授業の復習ができるアプリを制作しました。"
        imgUrl="/studySection.jpg"
        alt="クイズアプリ画像"
        detailUrl="/studyDetail"
        reverse={true}
      />

      <Section 
        id="hobbySection"
        sectionTitle="趣味"
        sectionText="趣味テスト"
        alt="趣味画像"
        detailUrl="/hobbyDetail"
      />
      <Contact></Contact>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profileDetail" element={<profileDetail />} />
        <Route path="/studyDetail" element={<StudyDetail />} />
        <Route path="/hobbyDetail" element={<hobbyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


