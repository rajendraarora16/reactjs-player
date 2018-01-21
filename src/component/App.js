import React from 'react'
import MusicPlayer from '../MusicPlayer'
import musicData from './music.json'
import Header from './Header'

export default class App extends React.Component {
    render(){
        return(
            <div className="super-container">
                <Header />
                <MusicPlayer playlist={musicData}  />
            </div>
        );
    }
}