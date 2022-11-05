import {connect} from "react-redux";
import music_list from "./Music_list";
import {
    addMusicCreator,
    updateAreaTextCreator,
    updateArtistTextCreator
} from "../../redux/musicTrack-reducer";
import './Music_list.css';


let MapStateToProps = (state) =>{
    return{
        musicTrack: state.musicTrack.musicTrack,
        newTextArea: state.musicTrack.newTextArea,
        newArtistArea: state.musicTrack.newArtistArea
    }
}
let MapDispatchToProps = (dispath) =>{
    return{
        onAreaChange: (text) =>{
            let action = updateAreaTextCreator(text.target.value);
            dispath(action);
        },
        AddNewMusic: () =>{
            dispath(addMusicCreator())
        },
        ArtistChange: (text) =>{
            let action = updateArtistTextCreator(text.target.value);
            dispath(action)
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(music_list)