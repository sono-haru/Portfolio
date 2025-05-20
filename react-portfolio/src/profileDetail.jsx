import DetailText from "./components/detailText";
import Footer from "./components/footer";
import Header from "./components/header";
import ProfileSection from  "./components/profileSection";
import TopButton from "./components/topButton";


const ProfileDetail = () => {
    return(
      <>
        <Header/>
        <div className="border border-green-200"></div>
        <div className="pt-4 md:pt-32 mb-16 text-center">
          <ProfileSection 
            title="自己紹介" 
            titleBg="#D66C52" 
            imgSrc="20250304_064312457_iOS" 
            text={[
              "薗部春樹",
              "2006年3月20日生まれ",
              "水戸生まれ水戸育ち",
              "血液型B型"
            ]}
            />
          
          <ProfileSection 
            title="学校活動" 
            titleBg="#4BA2A5" 
            imgSrc="20250304_064312457_iOS" 
            text={[
              "オープンキャンパスアルバイト",
              "スポーツフェスティバル実行委員",
              "卒業記念パーティー実行委員",
              "入学式在校生実行委員"
            ]}
            reverse={true}
            />

          <ProfileSection 
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
            />

          <ProfileSection 
            title="今後学びたい言語・ツール" 
            titleBg="#D66C52" 
            imgSrc="skill" 
            text={[
              "PHP・Laravel",
              "Flutter・Kotlin・Swift",
              "Hono・Docker"
            ]}
            reverse={true}
            />

        </div>
        <TopButton />
        <Footer/>
      </>
    );
  };
  
  export default ProfileDetail;
  