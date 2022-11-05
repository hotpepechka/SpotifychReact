import {NavLink} from "react-router-dom";
import Player from "../player/Player";
import Music_list from "../Music_list/Music_list";
import Music_list_container from "../Music_list/music_list_container";
import Player_container from "../player/Player_container";

function Home_page(props){
    return(
        <body>

            <Music_list_container></Music_list_container>
            <Player_container></Player_container>
            <button>

                <NavLink to='/'>back</NavLink>
            </button>
        </body>
    );
}

export default Home_page;