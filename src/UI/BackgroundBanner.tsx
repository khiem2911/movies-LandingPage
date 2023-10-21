import classes from './BackgroundBanner.module.css'
import Background from '../model/backgroundBanner'
import React from 'react'


const BackgroundBanner:React.FC<Background> = (props) =>{

    const style = {
        backgroundImage: `url(${props.bgDrop ? props.bgDrop : 'https://img.goodfon.com/wallpaper/nbig/c/d7/harley-quinn-otryad-samoubiyc.jpg'})`,
      
       
    }

    return (
       <div className={classes.backgroundImage} style={style} >
        {props.children}
       </div>
    )
}

export default BackgroundBanner