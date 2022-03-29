import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function Header({ setOpen }) {

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt="airbnb_logo"
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p className="header__right-text">Become a host</p>
                <LanguageIcon  style={{ cursor: 'pointer' }} />
                <ExpandMoreIcon  style={{ cursor: 'pointer' }}/>
                <Avatar  style={{ cursor: 'pointer' }}/>
            </div>
            <div className="header_mobilemenu" onClick={() => setOpen(true)}>
                <FiMenu color="#000" size="2rem" />
            </div>
        </div>
    )
}

export default Header