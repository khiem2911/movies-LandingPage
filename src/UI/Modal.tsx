import classes from './Modal.module.css'
import YouTube from "react-youtube";
import React from 'react'
import modal from '../model/modal';

const Modal: React.FC<modal> = (props) => {
    return (
        <div onClick={props.onClick} className={classes.modal}>
            <div className={classes.custom_youtube}>
                <YouTube videoId={props.videoKey} />
            </div>
        </div>
    )
}
export default Modal