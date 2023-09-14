
import Profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <header className="flex justify-between items-center border-b-4 p-8 max-w-7xl mx-auto">
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;