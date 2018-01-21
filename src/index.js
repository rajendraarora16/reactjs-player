import React from 'react'
import ReactDOM from 'react-dom'
import MusicPlayer from './MusicPlayer'

//package.json will be here.
var dummyData = [{
	url: "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
	cover: "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
	title: "Despacito",
	artist: [
		"Luis Fonsi",
		"Daddy Yankee"
	]
}];

ReactDOM.render(<MusicPlayer playlist={dummyData} autoplay />, document.getElementById('root'))
