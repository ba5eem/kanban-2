import React from 'react';


const image = "http://bit.ly/2kaPLce"
const img ={
  width: "100%",
  height: "50%"
}

const Header = () => {
  return (

    <div className='header'>
      <img style={img} src={image} alt="null"/>
    </div>



    )
}

export default Header;

