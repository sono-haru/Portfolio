import { useState, useEffect } from 'react';

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setShowButton(true); // 300px以上スクロールしたら表示
      } else {
        setShowButton(false); // それ以外は非表示
      }
    };

    window.addEventListener('scroll', handleScroll);

    // コンポーネントのアンマウント時にイベントリスナーをクリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{ ...styles.button, opacity: showButton ? 1 : 0 }} // opacityでフェードイン
          className="transition-opacity duration-500" // 500msかけてフェードイン
        >
          ↑
        </button>
      )}
    </>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '80px',
    right: '40px',
    padding: '20px 25px',
    backgroundColor: '#8FB0A9',
    color: '#FEFBF4',
    border: 'none',
    borderRadius: '50%',
    fontSize: '20px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'opacity 0.3s ease',
    zIndex: 100,
  },
};

export default TopButton;
