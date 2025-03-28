import { useState } from "react"

export default function Main() {
    /**
     * Challenge: move the hardcoded meme info into React
     * state. Use an object with `topText`, `bottomText`,
     * and `imageUrl` properties, and set the initial values to
     * the ones hardcoded below.
     */
    
    const [memeContent, setmemeContent] = useState(
        {
            topText: 'One does not simply',
            bottomText: 'Walk into Mordor',
            imageUrl: 'http://i.imgflip.com/1bij.jpg'
        }
    )

    function handleChange(e){
        const {value, name} = e.currentTarget
        setmemeContent(prevVal => ({...prevVal, [name]: value}))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder={memeContent.topText}
                        value={memeContent.topText}
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder={memeContent.bottomText}
                        value={memeContent.bottomText}
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeContent.imageUrl}/>
                <span className="top">{memeContent.topText}</span>
                <span className="bottom">{memeContent.bottomText}</span>
            </div>
        </main>
    )
}