import React from 'react';

const FindArtButtons = ({PichiAvo}) => {

  return (

      <button onClick={PichiAvo}style={button}>PichiAvo - Click to see the art</button>

    )//end of return
};

export default FindArtButtons;

const button = {
  marginTop: 20,
  height: 50,
  backgroundColor: 'cornflowerblue',
  border: 'transparent'
}

// https://www.google.com/maps/@21.2968616,-157.8607178,3a,75y,275.53h,92.58t/data=!3m8!1e1!3m6!1sAF1QipN1DHIfNmoiDA3IbO2lzqx5hN8Amn4IrM4beJqN!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN1DHIfNmoiDA3IbO2lzqx5hN8Amn4IrM4beJqN%3Dw203-h100-k-no-pi-0-ya310.98105-ro0-fo100!7i8000!8i4000