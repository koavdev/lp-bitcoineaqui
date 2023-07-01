import React, { useCallback } from 'react';
import Logo from '../Assets/logo3.png';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { AiFillHome, AiFillMail, AiFillQuestionCircle } from 'react-icons/ai';
import { FaBitcoin } from 'react-icons/fa';
import { MdCardTravel } from 'react-icons/md';
import { FaDonate, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const Navbar = () => {

    const [openMenu,setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Início",
            icon: <AiFillHome />,
            route:"/"
        },
        {
            text:"Sobre",
            icon: <AiFillQuestionCircle />,
            route:'/sobre'
        },
        {
            text:"Turismo",
            icon: <MdCardTravel />,
            route:'/turismo'
            
        },
        {
            text:"Comércio",
            icon: <FaMapMarkerAlt />,
            route:'/comercio'
        },
        {
            text:"Doações",
            icon: <FaDonate />,
            route:'/doacoes'
        },
        {
            text:"Aprender+",
            icon: <FaBitcoin />,
            route:'/aprender'
        },
        {
            text:"Contato",
            icon: <AiFillMail />,
            route:'/contato'
        },
    ];

  return (
    <nav>
        <div className='nav-logo-container'>
            <a href="/"><img id='logo' src={Logo} alt="logo"/></a>
        </div>
        <div className='navbar-links-container'>
            <a href='/'>Início</a>
            <a href='/sobre'>Sobre</a>
            <a href='/turismo'>Turismo</a>
            <a href='/comercio'>Comércio</a>
            <a href='/doacoes'>Doações</a>
            <a href='/aprenda'>Aprenda</a>
            <a href='/contato'>Contato</a>
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
                                <ListItemText><a href={item.route}>{item.text}</a></ListItemText>
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