import store from "../../redux/store";
import {addMus, addMusicCreator, updateAreaTextCreator} from "../../redux/musicTrack-reducer";
import {Button, IconButton, Stack, SvgIcon} from "@mui/material";
import React, {useState} from "react";
import './Music_list.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
function Music_list(props){


    const [count, setCount] = useState(0)

    const CountPlus = () =>{
        setCount(count + 1)
    }
    let SongsArray = []

    let MusicToPlayer = () => {
        
    }

   // let newArray = props.list.map(name =>{
     //   return <Button size={'large'} variant='contained' className='songButton'>{name.name}</Button>

    return(
        <body className='fuck'>
        <button onClick={CountPlus}>{count}</button>
        {SongsArray = props.musicTrack.map(songs => <div key={songs.id} className='SongsLi'>
            <div className='Marginer'>
                <form className='SongsForm'>
                    <IconButton className='PlayButton' >
                        <SvgIcon  component={PlayCircleIcon}/>
                    </IconButton>
                    <p className='Songs'  >{songs.artist} - {songs.name}</p>
                    <IconButton className='NotLikedButton'>
                        <SvgIcon  component={FavoriteBorderIcon}/>
                    </IconButton>
                </form>
            </div>

        </div>)}
        <div className='SongLi'>
            <input type='text' placeholder='Название исполнителя' ref={addMus} className='AreaSongText' onChange={props.ArtistChange} value={props.newArtistArea}/>
            <input type='text' placeholder='Название трека' ref={addMus} className='AreaSongText' onChange={props.onAreaChange} value={props.newTextArea}/>

            <input className='InputFile' type='file' />
            <Button className='songButton' variant='contained' color='secondary' onClick={props.AddNewMusic}>new song</Button>
            </div>
        </body>
    );
     }
export default Music_list;