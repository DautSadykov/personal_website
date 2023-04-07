import React from 'react'

export default function 
() {
  return (
    <div className="about_me_section">
        <div className="about_me_title">
            <h1>ABOUT ME</h1>
            <div className="big_underline">
                <div className="small_underline"></div>
            </div>
        </div>
        <div className="photo_and_description">
            <img src="portrait.png" alt="" className="portrait_photo" />
            <div className="profile_description">
                <h1>Hi There! I'm Daut Sadykov</h1>
                <h2>Front-end Web-Developer</h2>
                <p>I am a Visual Designer with a strong focus on digital branding. Visul design seeks to attract, inspire, 
                create desires and motivate people to respond to messages, with a view to making a favorable impact.<br/><br/>
                Phone : +7 922 351-9045<br/><br/>
                Email : sadykov.daut@yandex.ru<br/><br/>
                From : 70A, Vernadskogo Avenue, Moscow<br/><br/>
                Language : Russian, English<br/><br/>
                Freelance : Available
                </p>
                <a href="https://drive.google.com/drive/folders/1ww5L4UKC3S-ScnMS9hM5q2byNaOMrmmm?usp=share_link"><button>Download CV</button></a>
            </div>
        </div>
    </div>
  )
}
