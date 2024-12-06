'use client';

import { useRef } from 'react';
import classes from './imagePicker.module.css';

export default function ImagePicker({label, name}) {
  const imageInput = useRef();

  function handlePickImage() {
    imageInput.current.click();
  }

  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
      <input
        className={classes.input} 
        ref={imageInput}
        type="file" id={name} name={name} accept="image/png, image/jpeg" />
      <button className={classes.button} type="button" onClick={handlePickImage}>
        Pick an Image
      </button>
    </div>
  </div>
}