import React from 'react';
import './Sidebar.css';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { FiMenu } from "react-icons/fi";

const Sidebar = ({ open, setOpen }) => {
    return (
        <div className='sidebar' style={{ opacity: open ? 1 : 0, right: open ? '0' : '-100%', top: open ? '0' : '-100%' }}>
            <p  style={{ cursor: 'pointer' }}>Become a host</p>
            <div style={{display: 'flex'}}>
            <LanguageIcon  />
            <ExpandMoreIcon style={{ cursor: 'pointer' }}/>
            </div>
            <Avatar style={{ cursor: 'pointer' }}/>
            <FiMenu style={{ cursor: 'pointer' }} onClick={() => setOpen(false)}  color="#000" size="20px" />
    </div >
  )
}

export default Sidebar