/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

// Importing CSS...
import './frontPage.css'

// Importing Images....
import Img1 from '../Assets/main-img.png'

const FrontPage = () => {

    const [typeEffect] = useTypewriter({
        words: [
            'Your Daily Dose of Insight.',
            'News for everyone! No VIP access needed. 💯',
            'Stories That Matter.',
            'Explore. Engage. Enlighten.',
            'Where Ideas Connect.',
            'Unlocking Knowledge, One Post at a Time.',
            'Your Voice Matters Here.'
        ],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })

    return (
        <div className="container mb-5">
            <div className="row">
                {/* <!-- Text Section --> */}
                <div className="col-md-8 fade-left d-flex justify-content-center align-items-center flex-column">
                    <h1>..Welcome to Posts World..</h1>
                    <h5><span>{typeEffect}</span></h5>
                    <p className="text-center">Hyy🙂🙂, Here we can give you daily news and updates about Rights and Lows.
                        Blogging is a wide concept and that is a booming business all over the world.
                        It could be about Fashion, Food, Travel, Religion, Education, Lifestyle,Art etc.<hr /></p>
                </div>

                {/* <!-- Image Section --> */}
                <div className="col-md-4 fade-right">
                    <img src={Img1} alt="Example Image" className="img-fluid d-block mx-auto img_size" />
                </div>
            </div>
            {/* This is the part-2 of main page........... */}
            <div className="container-fluid">
                <h3 className="text-center">***💬 Comments 💬***</h3>
                <div className="clearfix">
                    <lord-icon
                        src="https://cdn.lordicon.com/lrlxzbgj.json"
                        trigger="loop"
                        delay="1500"
                        stroke="bold"
                        state="in-reveal"
                        colors="primary:#16a9c7,secondary:#1b1091"
                        className="animation_icons col-md-4 float-md-start ms-md-3"
                        style={{ "width": "250px", "height": "250px" }}>
                    </lord-icon>
                    <p>
                        If you want to thank someone or show gratitude, keep it casual but heartfelt. A simple "Thanks for sharing this! 🙌✨" or "This made my day! 😄💫" is a nice way to express your appreciation and give positive vibes to the post. It shows you are paying attention and are grateful for the content.
                    </p>

                    <p>
                        Short comments can be just as impactful! A simple "Yesss! 👏🏼🔥" or "Such a vibe! 💯✨" can convey excitement or agreement in a compact way. If you don’t feel like writing a long comment, emojis can still show your appreciation and reaction in just a few words.
                    </p>

                    <p>
                        Compliments are always a hit, and emojis make them more vibrant! You can say things like "You nailed it! 👏🏼✨" or "Totally obsessed with this! 😍" to show your admiration for the content. It’s a positive way to encourage the creator and let them know you appreciate their work.
                    </p>

                    <p>
                        Lastly, showing support is always a win! Phrases like "Keep it up, you’re killing it! 🙌💥" or "You’ve got this! 💪💖" are positive and encouraging, making sure the poster knows you're rooting for them. Whether it’s a friend or someone you admire, supportive comments always create good vibes.Lastly, showing support is always a win! Phrases like "Keep it up, you’re killing it! 🙌💥" or "You’ve got this! 💪💖" are positive and encouraging, making sure the poster knows you're rooting for them. Whether it’s a friend or someone you admire, supportive comments always create good vibes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FrontPage