import { Component} from 'react';
import Topnav from '../barrenav/Topnav';
import Footer from '../footer/Footer';

const Layout=(props)=>{

    return (
        <div>
           <Topnav />
           {props.children}
           <Footer/>
        </div>
    )

    }
export default Layout;