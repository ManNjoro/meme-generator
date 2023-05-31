import memesData from "../memesData"
import React from "react"

export default function Meme() {
    const [memeImage,setMemeImage] = React.useState("https://i.imgflip.com/1bij.jpg")
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url 
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="Top text"></input>
                <input type="text" className="form-input" placeholder="bottom text"></input>
                <button type="" className="btn" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <img src ={meme.randomImage} alt="" className="meme-image"></img>
        </main>
    )
}