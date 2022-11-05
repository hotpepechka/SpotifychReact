import './header.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import {Button} from "@mui/material";

function Header(){
    return(

            <div className='all_head'>

                <header className='header'>
                    <Button>
                        <NavLink to='/Users'>Users</NavLink>
                    </Button>
                    <Button>
                        <NavLink to=''>Home Page</NavLink>
                    </Button>
                    <Button>
                        <NavLink to='/register'>register</NavLink>
                    </Button>

                </header>
                <h1>
                    <img src='https://cdn.discordapp.com/attachments/881580812070432831/1022067124174344272/6.png'/>
                </h1>
            </div>


    );
}

export default Header;