import './Hero.css'
import {Button} from '@mui/material'

function Hero() {

  return (
    <div className="hero-page">
      <div className="hero-page-left">
        <h1>Fresh Spice Mixes</h1>
        <h2>Check out the lineup</h2>
        <Button variant="contained" size="large" href="/shop">Shop Now</Button>
      </div>
      <div className="hero-page-right">
        <img src='/fire.jpg' className="hero-image"/>
      </div>
    </div>
  );
}

export default Hero;