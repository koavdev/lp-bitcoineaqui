import React from 'react';
import Logo from '../Assets/logo2.png';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { AiFillHome, AiFillMail } from 'react-icons/ai';
import { GiOpenBook } from 'react-icons/gi';
import { MdCardTravel } from 'react-icons/md';
import { FaDonate, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const Navbar = () => {

    const [openMenu,setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon: <AiFillHome />,
        },
        {
            text:"Mapa",
            icon: <FaMapMarkerAlt />,
        },
        {
            text:"Turismo",
            icon: <MdCardTravel />,
        },
        {
            text:"Doações",
            icon: <FaDonate />,
        },
        {
            text:"Aprender+",
            icon: <GiOpenBook />,
        },
        {
            text:"Contato",
            icon: <AiFillMail />,
        },
    ];

  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt="" width='250px'/>
        </div>
        <div className='navbar-links-container'>
            <a href=''>Home</a>
            <a href=''>Mapa</a>
            <a href=''>Turismo</a>
            <a href=''>Doações</a>
            <a href=''>
                <GiOpenBook className="navbar-cart-icon" />
            </a>
            <button className='primary-button'>Contato</button>
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
            <Box sx={{width: 250 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
                <List>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.text}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </nav>
  )
}

export default Navbar