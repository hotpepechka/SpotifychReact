import {connect} from "react-redux";
import music_list from "../Music_list/Music_list";
import player from "./Player";


let MapStateToProps = (state) => {
    return {
        musicTrack: state.musicTrack.musicTrack,
        newTextArea: state.musicTrack.newTextArea
    }
}
let MapDispatchToProps = (dispath) =>{
    return{

        }
    }



export default connect(MapStateToProps, MapDispatchToProps)(player)