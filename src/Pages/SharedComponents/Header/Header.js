import AccountCircle from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Container, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuth from "../../../CustomHooks/useAuth";
import useGet from "../../../CustomHooks/useGet";
import ScrollingCartList from "./ScrollingCartList";
import WishListBtn from "./WishListBtn";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/userAccount/user/myProfile">Profile</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/userAccount/user/login">My account</Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box>
        <Link
          to="/"
          style={{
            color: "#555252",
            textDecoration: "none",
            margin: "0px 15px",
            fontWeight: "500",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Home
        </Link>{" "}
        <br />
        <Link
          to="/shop"
          style={{
            color: "#555252",
            textDecoration: "none",
            margin: "0px 15px",
            fontWeight: "500",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Shop
        </Link>{" "}
        <br />
        {/* <Link style={{ color: '#555252', textDecoration: 'none', margin: '0px 15px', fontWeight: '500', fontSize: '15px', cursor: 'pointer'}}>Pages<KeyboardArrowDownIcon style={{ fontSize: '15px'}} /></Link> */}
        <Link
          to="/contact"
          style={{
            color: "#555252",
            textDecoration: "none",
            margin: "0px 15px",
            fontWeight: "500",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Contact
        </Link>{" "}
        <br />
      </Box>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingBagOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const whiteTheme = createTheme({
    palette: {
      primary: {
        main: "#fefefe",
      },
    },
  });

  // Import product data from redux using custom hooks
  const { user } = useAuth();
  const gotData = useSelector(
    (state) => state.cartlistAllProducts.cartlistProducts
  );
  // const gotQuantity = useSelector((state) => state.cartlistAllProducts);
  const { loading } = useGet(`getFromCartList/${user?.email}`);

  const [scrollingCartList, setScrollingCartList] = useState(false);
  return (
    <Box>
      <ThemeProvider theme={whiteTheme}>
        <AppBar position="fixed">
          <Container>
            <Toolbar sx={{ padding: "0px!important" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: "block", sm: "block" },
                  fontSize: { md: 30, xs: 20 },
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                }}
              >
                E-SHOP
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Link
                  to="/"
                  style={{
                    color: "#555252",
                    textDecoration: "none",
                    margin: "0px 15px",
                    fontWeight: "500",
                    fontSize: "15px",
                    cursor: "pointer",
                    fontFamily: "Poppins",
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  style={{
                    color: "#555252",
                    textDecoration: "none",
                    margin: "0px 15px",
                    fontWeight: "500",
                    fontSize: "15px",
                    cursor: "pointer",
                    fontFamily: "Poppins",
                  }}
                >
                  Shop
                </Link>
                {/* <Link style={{ color: '#555252', textDecoration: 'none', margin: '0px 15px', fontWeight: '500', fontSize: '15px', cursor: 'pointer'}}>Pages<KeyboardArrowDownIcon style={{ fontSize: '15px'}} /></Link> */}
                <Link
                  to="/contact"
                  style={{
                    color: "#555252",
                    textDecoration: "none",
                    margin: "0px 15px",
                    fontWeight: "500",
                    fontSize: "15px",
                    cursor: "pointer",
                    fontFamily: "Poppins",
                  }}
                >
                  Contact
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "flex", md: "flex" } }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  sx={{ color: "text.disabled" }}
                >
                  <AccountCircleOutlinedIcon />
                </IconButton>
                <Link to="/wishlist">
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    sx={{ color: "text.disabled" }}
                  >
                    <WishListBtn />
                  </IconButton>
                </Link>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  sx={{ color: "text.disabled" }}
                  onClick={() => {
                    if (scrollingCartList === false) {
                      setScrollingCartList(true);
                    } else {
                      setScrollingCartList(false);
                    }
                  }}
                >
                  <Badge
                    badgeContent={gotData.length > 0 ? gotData.length : "0"}
                    color="secondary"
                  >
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                  {/* <Badge badgeContent={gotData?.length ? gotData.length : '0'} color="secondary">
                        <ShoppingBagOutlinedIcon />
                    </Badge> */}
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  sx={{ color: "#333" }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
      {renderMobileMenu}
      {renderMenu}
      <Grid>
        {scrollingCartList && <ScrollingCartList cartProductsList={gotData} />}
      </Grid>
    </Box>
  );
};

export default Header;
