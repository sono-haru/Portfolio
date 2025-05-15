import '../App.css';

const Header = () => {
  return (
    <header>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center px-4 md:px-10 py-5 md:fixed z-10">
    
        <a href="/" className="text-2xl md:text-3xl font-bold">
          Portfolio
        </a>

        <nav className="flex items-center space-x-4 md:space-x-6 mt-2 md:mt-0 text-[12px] md:text-sm font-kiwi">
          <a href="/#studySection" className="transition-colors duration-200 text_hover">作ったもの</a>
          <a href="/#profileSection" className="transition-colors duration-200 text_hover">プロフィール</a>
          <a href="/#hobbySection" className="transition-colors duration-200 text_hover">趣味</a>
          <a href="/#contact" className="transition-colors duration-200 text_hover">お問い合わせ</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
