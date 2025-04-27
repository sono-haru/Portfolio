import '../App.css';

const Header=()=>{
    return(
        <>
            <header>
                <div className='container flex mx-auto mb-5 pt-5 px-10 flex-col md:flex-row items-center fixed z-10'>
                    <a href="/" className='text-3xl mb-4 md:mb-0 font-bold'>Portfolio</a>

                    <nav className='md:ml-auto font-kiwi'>
                        <a href="#profileSection" className='mr-5 transition-colors duration-200 text_hover'>プロフィール</a>
                        <a href="#studySection" className='mr-5 transition-colors duration-200 text_hover'>学習内容</a>
                        <a href="#hobbySection" className='mr-5 transition-colors duration-200 text_hover'>趣味</a>
                        <a href="#contact" className='mr-5 transition-colors duration-200 text_hover'>お問い合わせ</a>
                    </nav>

                </div>
            </header>
        </>
    );
};
export default Header;
