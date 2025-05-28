import Footer from "./components/footer";
import Header from "./components/header";
import DetailSection from  "./components/detailSection";
import TopButton from "./components/topButton";

const ProfileDetail = () => {
    return(
      <>
        <Header/>
        <div className="border-b border-[#8FB0A9] mb-4 pt-4 md:pt-24"></div>
        <div className="mb-6 text-center">
          <DetailSection 
            title="自己紹介" 
            titleBg="#D66C52" 
            imgSrc="Rectangle 29" 
            text={[
              "薗部春樹",
              "2006年3月20日生まれ",
              "水戸生まれ水戸育ち",
              "血液型B型"
            ]}
            comment="使える画像がありませんでした..."
            />
          
          <DetailSection 
            title="学校活動" 
            titleBg="#4BA2A5" 
            imgSrc="profile1" 
            text={[
              "オープンキャンパスアルバイト",
              "スポーツフェスティバル実行委員",
              "卒業記念パーティー実行委員",
              "入学式在校生実行委員"
            ]}
            reverse={true}
            comment="卒業記念パーティー(照山先生・佐脇・浅野・薗部・鴨川)"
            />

          <DetailSection
            title="学んだ言語・ツール" 
            titleBg="#C2C852" 
            imgSrc="skill" 
            text={[
              "Python・Django",
              "JavaScript・TypeScript",
              "React・Next.js",
              "Java",
              "HTML・CSS",
              "GitHub・Figma"
            ]}
            comment="ReactやNext.jsは独学でしました。"
            />

          <DetailSection 
            title="今後学びたい言語・ツール" 
            titleBg="#EC9C78" 
            imgSrc="skill2" 
            text={[
              "PHP・Laravel",
              "Flutter・Kotlin・Swift",
              "Hono・Docker",
              "WebSocket Node.js"
            ]}
            reverse={true}
            comment="スマホアプリ制作がしてみたい!!"

            />

        </div>
        <TopButton />
        <Footer/>
      </>
    );
  };
  
  export default ProfileDetail;
  