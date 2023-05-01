import React from 'react'

export default function Button(){
    const onClickButtonOK =() =>{
        alert('OK')
    }
    const onClickButtonCANCEL =() =>{
        alert('CANCEL')
    }

    let banner = './images/ploy.jpg'
    let url ='https://www.nuggetmarket.com/departments/bakery/'

    const bannerClick = () =>{
        window.open(url)
    }
    return (
        <div>
        <img src={banner} onClick={bannerClick} style={{cursor:'pointer'}}/>
        <button onClick={onClickButtonOK}>OK</button>
        <button onClick={onClickButtonCANCEL}>CANCEL</button>
        </div>
    )
}