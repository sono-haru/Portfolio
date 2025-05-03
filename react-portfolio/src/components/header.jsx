import '../App.css';

const Header=()=>{
    return(
        <>
            <header>
                <div className='container flex mx-auto mb-5 pt-5 px-4 md:px-10 flex-col md:flex-row items-center md:fixed z-10'>
                    <a href="/" className='text-2xl md:text-3xl mb-4 md:mb-0 font-bold'>Portfolio</a>

                    <nav className='md:ml-auto md:flex md:items-center font-kiwi text-[12px] md:text-sm'>
                        <a href="#studySection" className='mr-5 transition-colors duration-200 text_hover'>作ったもの</a>
                        <a href="#profileSection" className='mr-5 transition-colors duration-200 text_hover'>プロフィール</a>
                        <a href="#hobbySection" className='mr-5 transition-colors duration-200 text_hover'>趣味</a>
                        <a href="#contact" className='mr-5 transition-colors duration-200 text_hover'>お問い合わせ</a>
                    </nav>

                </div>
            </header>
        </>
    );
};
export default Header;
