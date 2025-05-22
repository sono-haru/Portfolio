import React from 'react'
import Header from "./components/header";
import Footer from "./components/footer";
import DetailSection from  "./components/detailSection";
import TopButton from "./components/topButton";

const HobbyDetail = () => {
    return(
      <>
        <Header/>
        <div className="border-b border-[#8FB0A9] mb-4 pt-4 md:pt-24"></div>
        <div className="mb-6 text-center">
          <DetailSection 
            title="好きなバンド" 
            titleBg="#D66C52" 
            imgSrc="music" 
            text={[
              "WANDS : (PIECE OF MY SOUL)",
              "L⇔R : (Lefty in the Right)",
              "ZARD : (TODAY IS ANOTHER DAY)",
              "THE BEATLES : (RUBBER SOUL)",
              "JUDY AND MARY : (MIRACLE DIVING)",
              "Mr.Children : (Atomic Heart)"
            ]}
            comment="L⇔Rは日立市出身!!"
            />
          
          <DetailSection 
            title="雑貨1" 
            titleBg="#4BA2A5" 
            imgSrc="hobby1" 
            text={[
              "vintageの雑貨を集めるのが好きです。",
              "特にアメリカン雑貨が好み。",
            ]}
            reverse={true}
            comment="買いすぎて飾るところがなくなってきた..."
            />

          <DetailSection 
            title="雑貨2" 
            titleBg="#C2C852" 
            imgSrc="bike" 
            text={[
              "GIANTのEscape Rをレトロ風に",
              "カスタムした自転車に乗っています。",
            ]}
            comment="特徴的なので駐輪しておくとすぐにバレます"
            />

          <DetailSection 
            title="野球観戦" 
            titleBg="#EC9C78" 
            imgSrc="baseball" 
            text={[
              "NPBもMLBも好きです。",
              "巨人ファンですが、その他11球団も好きです。",
            ]}
            reverse={true}
            comment="今年は東京ドームで観戦したい!!"
            />

        </div>
        <TopButton />
        <Footer/>
      </>
    );
  };
  
  export default HobbyDetail;
  