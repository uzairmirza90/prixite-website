import { AppBar, Box, Container, IconButton, Link, Menu, Toolbar, Typography, MenuItem, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logoImg from '../../public/images/logo.png'
import MenuIcon from "@mui/icons-material/Menu";
import { pages } from '../../constants/constants';
import { useRouter } from 'next/router';

const Header = ({ children, bgImg }) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null)
    };

    const router = useRouter()

    return (
        <Box 
            className='header-container' 
            sx={{ 
                background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImg?.src})` }}
        >
            <Box 
                className='header'
            >
            </Box>
            <AppBar 
                position='static' 
                className='app-bar'
            >
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Box 
                            sx={{ 
                                mr: 2, 
                                display: { xs: "none", md: "flex" } 
                            }}
                        >
                            <Image src={logoImg} alt='Prixite' />
                        </Box>
                        <Box 
                            sx={{ flexGrow: 1 }}
                        >
                        </Box>
                        <Box 
                            sx={{ 
                                flexGrow: 50, 
                                display: { xs: "flex", md: "none" } 
                                }}
                        >
                            <Image src={logoImg} alt="Prixite" />
                        </Box>
                        <Box 
                            sx={{ 
                                flexGrow: 0, 
                                display: { xs: "flex", md: "none" } 
                                }}
                        >
                            <IconButton
                                size='large'
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: "block", md: "none" } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                                        <Typography textAlign="center">{page.text}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box 
                            className='header-menu' 
                            sx={{ display: { xs: 'none', md: 'flex' } }}
                        >
                            {pages.map((page) => {
                                return (
                                    <>
                                        <Link href={page?.path}>
                                            <Typography
                                                className='typography'
                                                sx={{
                                                    mx: 2,
                                                    color: router.asPath == page.path ? "var(--primary-green)" : "white",
                                                }}
                                            >
                                                {page.text}
                                            </Typography>
                                        </Link>
                                    </>
                                )
                            })}
                            <Link href="/contact-us">
                                <Button
                                    className='contact-us-button'
                                    sx={{ mx: 2 }}
                                >
                                    Contact Us
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {children}
        </Box>
    )
}

export default Header