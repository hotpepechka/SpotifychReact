import React from "react";

import Music_list from "../components/Music_list/Music_list";

const add_music = 'add-music';
const update_area_text = 'update-area-text';
const songs_to_player = 'songs_to_player';
const update_artist_text = 'update_artist_text';

let initialState = {
    musicTrack: [
        {
            id: 1,
            artist:'Soda luv',
            name:"тысячи рук",
            src:'https://www.bensound.com/bensound-music/bensound-memories.mp3'
        },
        {
            id: 2,
            artist:'EeOneGuy',
            name:'watafak',
            src: 'https://www.bensound.com/bensound-music/bensound-november.mp3'
        },
        {
            id: 3,
            artist:'СЕРЕГА ПИРАТ',
            name:'Ну и что что я вор',
            src: ''
        },
    ],

    newArtistArea: 'OMFG',
    newTextArea: 'Hello',
}

const MusicTrackReducer = (state = initialState, action) => {
    switch (action.type) {
        case add_music:{
            let newMusic = {
                id: 4,
                artist: state.newArtistArea,
                name: state.newTextArea,
                src: ''
            };


                let StateCopy = {...state};
                StateCopy.musicTrack = [...state.musicTrack];
                StateCopy.musicTrack.push(newMusic)
                StateCopy.newTextArea = '';
                StateCopy.newArtistArea = '';
                return StateCopy
            };


        case update_area_text: {

                let StateCopy = {
                    ...state,

                    newTextArea: action.NewText
                }
                return StateCopy;
            }
        case update_artist_text:{
            let StateCopy = {
                ...state,
                newArtistArea: action.NewText,
            }
            return StateCopy;
        }

        default:
            return state;

    }
}
export let addMusicCreator = () =>{
    return{
        type: add_music
    }
}
export let updateArtistTextCreator = (text) =>{
    return{
        type: update_artist_text, NewText: text
    }
}
export let updateAreaTextCreator = (text) =>{
    return{
        type: update_area_text, NewText:text
    }
}


export let addMus = React.createRef();

export default MusicTrackReducer;