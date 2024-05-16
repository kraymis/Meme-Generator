import React from 'react'
import './App.css'
import memelogo from 'D:/Fsociety/Kraymis/Front-End/Meme_Generator/public/images/Logo.png'
import memeimg from 'D:/Fsociety/Kraymis/Front-End/Meme_Generator/public/images/memeimg.png'
import daata from './memesData.js'  
function Nav(){
  return(
    <>
    <div className="nav-bar">
      <img src={memelogo} alt="" />
      <h5>React Course</h5>
    </div>
    </>
  )

}
function Hero(){
  let url;

  const [allMemes,setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
  }, [])


  const [memeIMG, setmemeIMG] = React.useState({
    text1:"",
    text2:"",
    img:memeimg
  });
  
  const [text,setText] = React.useState({
    text1:"",
    text2:""
  })
  
  function handleText(event){
    const {name,value} = event.target
    setText( prevText => ({
      ...prevText,
      [name]:value
    }))
   console.log(text.text1);
  }


  
  function changeIMG(){
    const memesArray = allMemes;
    let randomNumber = Math.floor(Math.random()*memesArray.length);
    url = memesArray[randomNumber].url;
    
    setmemeIMG( prevImg => ({
      text1:text.text1,
      text2:text.text2,
      img:url,
    }));

    
    
  }
  


  return(
    <>
    <div className="hero">
    
    <div className="btns">
    
    <div className="inputs">
    
    <input 
    type="text" 
    className="inpt-txt"
    name="text1"
    onChange={handleText}
    />
    <input 
    type="text" 
    className="inpt-txt"
    name="text2"
    onChange={handleText}
    />
    
    </div>
     <button 
     onClick={changeIMG}
     >Generate</button>
    </div>


    <div className="img-holder">
      <img src={memeIMG.img} alt=""  />
      <div className="text">
      <h6 className='text2'>{memeIMG.text1}</h6>
      <h6 className='text2'>{memeIMG.text2}</h6>
      </div>

    </div>
    
    </div>
    </>
  )
}

function Conntainer() {
  return (
    <div className="container">
      <Nav />
      <Hero />
    </div>
  )
}

export default function App(){
  return(
    <>
    <Conntainer />
   </>
  )
}

