import React from 'react'
import twitter from '../src/icons/twitter.svg';
import telegram from '../src/icons/Telegram.png';
import pinterest from '../src/icons/pinterest.svg';

const Share = ({quote}) => {
    return (
        <div className="share">
            <h3 style={{margin:"2rem 0 0.8rem"}}>Share this on:</h3>
            <div className="icons" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <a href={`https://twitter.com/intent/tweet?text=${quote.author + " once said: " + quote.content}`} target='blank'><img style={{width: "2rem"}} src={twitter} alt="Twitter" /></a>
                <a href={`https://t.me/share/url?url=https%3A//github.com/Radwaamer/quote-generator&text=${quote.author + " once said: " + quote.content}`} target='blank'><img style={{width: "4.7rem"}} src={telegram} alt="Telegram" /></a>
                <a href={`https://pinterest.com/pin/create/button/?url=github.com/Radwaamer/quote-generator&media=&description=${quote.author + " once said: " + quote.content}`} target='blank'><img style={{width: "2.3rem"}} src={pinterest} alt="Pinterest" /></a>
            </div>
        </div>
    )
}

export default Share;