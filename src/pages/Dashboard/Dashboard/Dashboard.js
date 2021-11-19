import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import './Dashboard.css';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logOut, admin } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="nested-nav">
            <Toolbar />
            <Divider />
            <Link to="/home"><Button color="inherit">Home</Button></Link>
            <br />
            {admin && <Box>
                <Link to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></Link>
                <br />
                <Link to={`${url}/addProduct`}><Button color="inherit">Add A Product</Button></Link>
                <br />
                <Link to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
                <br />
                <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
            </Box>}
            {!admin && <Box>
                <Link to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>
                <br />
                <Link to={`${url}/review`}><Button color="inherit">Review</Button></Link>
                <br />
                <Link to={`${url}/pay`}><Button color="inherit">Pay</Button></Link>
            </Box>}
            <Button onClick={logOut} color="inherit">Log Out</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: "rgba(7,7,25, 0.8)" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    {!admin && <Route exact path={path}>
                        <MyOrders />
                    </Route>}
                    {admin && <Route exact path={path}>
                        <ManageAllOrders />
                    </Route>}
                    <Route path={`${path}/myOrders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders />
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;