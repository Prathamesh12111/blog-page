import logo from "./images/Group 1.png";
import arrow from "./images/ant-design_arrow-left-outlined.png";
import car from "./images/image 37.png";
import racing from "./images/image 25.png";
import imgone from "./images/image 38.png";
import imgtwo from "./images/image 39.png";
import imgthree from "./images/image 40.png";
import imgfour from "./images/image 41.png";
import imgfive from "./images/image 42.png";
import imgsix from "./images/Group 23.png";
import sae from "./images/SAE.png";
import linkedin from "./images/linkedin.png";
import gmail from "./images/gmail.png";
import rectangle from './images/Rectangle 12.png';

function App() {
  return (
    <div className="Container">
        {/* navbar */}
        <div className='section'>
      <div className="navbar">
        <img className="logo" src={logo}></img>
        <ul className="list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <button className="blog-btn">Blog</button>
      </div>

      <div className="back-btn">
        <a href="">
          <img src={arrow}></img>
        </a>
        <a href="">
          <p>Back</p>
        </a>
      </div>

      {/* content */}
      <div className="box">
        <div className="inner-one">
          <img className="img-one" src={car}></img>
          <p>The Greatest car ever made...No one bought</p>
          <img className="img-two" src={racing}></img>
        </div>
        <div className="inner-two">
          <p className="p-one">Topics: Car Markets, Toyota</p>
          <p className="p-two">Date: 27/12/2022</p>
        </div>
        <div className="para-one">
          <img src={imgone}></img>
          <h5>2000GT</h5>
          <p>
            {" "}
            The first thing that might come to your mind when you hear the word
            “Toyota” could be Supra or Lexus or a land-cruiser, but the world
            majorly knows it for being a profit hungry mass production brand of
            reliable, inoffensive, and cheap cars coming from a little island of
            anime and sushi. Well, Toyota being capable of much more, tried to
            change this notion of being a mass-production powerhouse by doing
            something special, something that the world didn’t expect, starting
            with a 2000GT in the 1970s, a masterpiece of its own time which
            helped them succeed by changing the world’s opinion about them. They
            then continued to give many hits like the Supra, GT-R, etc.,
            although nothing came close to the 2000GT. But the image faded as
            time passed, and the automotive industry evolved to have supercars
            on everyone’s mind.
          </p>
        </div>
        <div className="para-two">
          <p>
            And you guessed right, in 2001, Toyota once again saw a
            once-in-a-lifetime opportunity to create something truly special,
            but this time, they just paid for it, and Lexus did the rest, under
            a hero, the Enzo Ferrari of Japan, “Haruhiko Tanahashi.” Lexus,
            whose parent company is Toyota, started to work on a secret project
            of making a 320 kph+ supercar named the Lexus LF-A with the
            leadership, experience, and ideas of Tanahashi. With this project
            came many challenges and hard times, and after almost a decade of
            development, Toyota realized that they would never make profit from
            it, but still announced to produce 500 units of one of the most
            insane supercars to ever grace the planet.
          </p>
          <div className="harihuko">
            <img src={imgtwo}></img>
            <h5>Harihuko Tanahashi</h5>
          </div>
        </div>
        <div className="para-three">
          <img src={imgthree}></img>
          <p>
            {" "}
            The production began with every engine being hand-built and signed
            off. With almost 30 billion configurations of LF-A on the inside,
            every unit was unique and was documented from start to finish, with
            each car as a piece of Toyota’s history cataloged for future
            generations to research. The LF-A truly was a bespoke Japanese
            supercar. Every bit was extravagant, over the top, and as expensive
            as the timeless Italian masterpieces, and with a sound that would
            even make Ferraris and Lamborghinis shed tears. From a company like
            Toyota, this was a shot across the bow at the world. After making
            the automotive crowds go wild and winning the title of the best car
            ever made and driven, it struggled to sell, even with just 500
            units, because people could not afford it, those who could did not
            want a Lexus badge for the price it demanded. Well, this wasn’t the
            end of the LF-A; in 2011, Lexus revealed the Nürburgring edition of
            the LF-A as a tribute to the legendary racing driver “Hiromu Naruse”
            who passed away in an accident while testing it.
          </p>
        </div>
        </div>
      
        
        
        <div className="para-four">
          <div className="hiromu">
            <img src={imgfour}></img>
            <h5>Hiromu Naruse</h5>
          </div>
          <p>
            This Nürburgring edition of LF-A made more horsepower and was
            lighter, faster, and tighter, which essentially made this perfect
            car even more perfect. It shattered all records and became the
            fastest production car ever to lap the Nürburgring. This was the
            pinnacle of Japanese engineering with the engine singing a note that
            would set everyone’s heart on fire; refined to perfection; it
            eventually achieved success it deserved. After taking the world by
            storm and with Toyota losing money on every unit rolled out from the
            factory, the last LF-A was sold.
          </p>
        </div>
        <div className="para-five">
          <img src={imgfive}></img>
          <p>
            {" "}
            With this Toyota proved what Japanese engineering was capable of,
            nothing even from Italy to America came even close to the LF-A, and
            till date, nothing has beaten it since. A few of us might consider
            it a failure as it struggled a lot and the company made no profit,
            but for Toyota, it was a huge success, as what they created was
            exactly what they wanted- A Living Legend.
          </p>
        </div>
      </div>

      {/* footer */}
      <div className="footer">
        <hr />
        <div className="footer-box">
          <div className="contact-us">
            <div className="footer-logo">
              <img src={imgsix} />
              <img src={logo} />
            </div>
            <div className="contact-us-desc">
              <h2>Contact Us</h2>
              Indian Institute Of Technology
              <br />
              (Banaras Hindu University)
              <br />
              Varanasi. India
              <br />
              PIN: 221005
              <br />
              <br />
              <span>+91 7558525641</span>
            </div>
          </div>
          <div className="connect">
            <h2>
              SAE Collegiate Club 2022
              <br /> IIT (BHU) Varanasi
            </h2>
            <h4>Mail us at-</h4>
            <a href="">
              <img src={gmail} className="gmail-logo" />
              saecollegiateclub.iitbhu@gmail.com
            </a>
            <br />
            <h4>
              Connect to us on :{" "}
              <a href="">
                <img src={linkedin} className="linkedin-logo" />
              </a>
            </h4>
          </div>
          <div className="quick-links">
            <h2>Quick Links</h2>
            <h4>
              Check out our{" "}
              <span>
                <a href="">Blog</a>
              </span>{" "}
              with weekly updates
            </h4>
            <a href="">Projects</a> &nbsp;<a href="">Events</a>
            <br />
            <a href="">Alumni</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Gallery</a>
            <br />
            <a href="">About us</a>
            <a href="">Workshops</a>
            <br />
            <p className="return-to-top">
              <a href="">Return to top ↑ </a>
            </p>
          </div>
        </div>
      </div>
    
        
      </div>
  );
}

export default App;
