import React from 'react';
import classes from './SideDrawer.module.css';

const SideDrawer = ({ Side, Mouse, mouse, sideDrawerClose }) => {

    let enter = null;
    if(mouse) {
        enter = 
        <ul className={classes.mouseClick}>
            <li style={{marginBottom: "10px"}}><a className={classes.mouse_li}  href="/user/fund">Fund Account</a></li>
            <li><a className={classes.mouse_li}  href="/user/withdraw">Withdrawals</a></li>
        </ul>
    }

    return (
        <>
        {Side ?
            <header>
                <div onClick={sideDrawerClose} style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                width: "100%",
                height: "100vh",
                position: "fixed",
                top: "0",
                zIndex: "110"
            }}></div>
            <div className={classes.sideDrawer} style={{
               tranform: Side ? "translateX(0)" : "translateX(-100vh)"
            }}>
            <nav>
                <ul className={classes.sideDrawer_ul}>
                    <li style={{marginBottom: "10px"}}><a className={classes.sideDrawer_li} href="/user/dashboard">Dashboard</a></li>
                    <li style={{
                       color: "green",
                       marginLeft: "3em",
                       marginBottom: "10px"
                     }} onClick={Mouse}>Accounts</li>
                    {enter}
                    <li style={{marginBottom: "10px"}}><a className={classes.sideDrawer_li}  href="/user/verify-account">Verify Account</a></li>
                    {/* <li style={{marginBottom: "10px"}}><a className={classes.sideDrawer_li}  href="/user/account-upgrade">Account Upgrade</a></li> */}
                    {/* <li><a className={classes.sideDrawer_li}  href="/user/trade-history">Trade History</a></li> */}
                </ul>
            </nav>
            </div>       
        </header> : null }
        </>
    );
};

export default SideDrawer;