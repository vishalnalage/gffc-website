import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './App.css';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true
    });

    const page4Animation = () => {
      const elemC = document.querySelector("#elem-container");
      const fixed = document.querySelector("#fixed-image");

      elemC.addEventListener("mouseenter", () => {
        fixed.style.display = "block";
      });

      elemC.addEventListener("mouseleave", () => {
        fixed.style.display = "none";
      });

      const elems = document.querySelectorAll(".elem");
      elems.forEach((e) => {
        e.addEventListener("mouseenter", () => {
          const image = e.getAttribute("data-image");
          fixed.style.backgroundImage = `url(${image})`;
        });
      });
    };

    const menuAnimation = () => {
      const menu = document.querySelector("nav h3");
      const full = document.querySelector("#full-scr");
      const navimg = document.querySelector("nav img");
      let flag = 0;

      menu.addEventListener("click", () => {
        if (flag === 0) {
          full.style.top = "0";
          navimg.style.opacity = "0";
          flag = 1;
        } else {
          full.style.top = "-100%";
          navimg.style.opacity = "1";
          flag = 0;
        }
      });
    };

    const loaderAnimation = () => {
      const loader = document.querySelector("#loader");
      setTimeout(() => {
        loader.style.top = "-100%";
      }, 4200);
    };
    document.addEventListener('DOMContentLoaded', function() {
      const contactLinks = document.querySelectorAll('#page5 .contact-info a');
      contactLinks.forEach(link => {
        link.addEventListener('click', function() {
          console.log(`Contact link clicked: ${this.href}`);
          // Add any additional tracking or functionality here
        });
      });
    });
    

    page4Animation();
    menuAnimation();
    loaderAnimation();
  }, []);

  return (
    <div>
      <div id="loader">
        <h1>ENVIRONMENTS</h1>
        <h1>EXPERIENCES</h1>
        <h1>CONTENT</h1>
      </div>
      <div id="fixed-image"></div>
      <div id="main">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        
      </div>
      <Page5 />
    </div>
  );
}

function Page1() {
  return (
    <div id="page1">

<div id="page1">
  <div class="upper-section">
  <nav>
        <img src="Assets/Golden feathers logo latest.png" alt="" className="responsive-image" />
        <div id="nav-part2">
          
          <h4><a href="#">About Us</a></h4>
          <h4><a href="#"></a>Admissions</h4>
          <h4><a href="#"></a>Careers</h4>
          <h4><a href="#">Contact Us</a></h4>
         
        </div>
        <h3>Menu</h3>
      </nav>
      <div id="center">
      
        <div id="left">
          {/* <h3>Welcome to Golden Feathers Football Club! <br />Empowering Future Football Stars in Pune, India</h3> */}
          
          {/* <img src="Assets/Golden feathers logo latest.png" alt="" /> */}
          <img src="Assets/gffc_new_jr-removebg-preview.png" alt="" />
          
          {/* <img src="Assets/calli2.png" alt="" /> */}
        </div>
        <div id="right">
        <h1>Unleashing <br/> Potential, <br/>Building Champions</h1>
        
        </div>
      </div>
  </div>
  <div class="lower-section">
  <div id="hero-shape">
        <div id="hero-1"></div>
        <div id="hero-2"></div>
        <div id="hero-3"></div>
      </div>
      <div id="videos">
        <video autoPlay loop muted src="Assets/gffc turf video.mp4"></video>
        <video autoPlay loop muted src="Assets/gffc turf video.mp4"></video>
        <video autoPlay loop muted src="Assets/gffc turf video.mp4"></video>
      </div>
    </div>
  </div>
</div>

      
    
  );
}


function Page2() {
  return (
    <div id="page2">
      <div id="moving-text">
  <div className="con">
    <h1>PASSION</h1>
    <div id="gola"></div>
    <h1>SKILLS</h1>
    <div id="gola"></div>
    <h1>TEAMWORK</h1>
    <div id="gola"></div>
  </div>
  <div className="con">
    <h1>PASSION</h1>
    <div id="gola"></div>
    <h1>SKILLS</h1>
    <div id="gola"></div>
    <h1>TEAMWORK</h1>
    <div id="gola"></div>
  </div>
  <div className="con">
    <h1>PASSION</h1>
    <div id="gola"></div>
    <h1>SKILLS</h1>
    <div id="gola"></div>
    <h1>TEAMWORK</h1>
    <div id="gola"></div>
  </div>
</div>

      <div id="page2-bottom">
        <div>
        <h1>About </h1>
        <h3>Golden Feathers Football Club aims to provide exceptional football training and mentorship for young players in Pune. Our experienced coaching staff and state-of-the-art facilities ensure that every player reaches their full potential.</h3>
        </div>
        
        <div id="bottom-part2">
          <img src="/Assets/nanak gffc jr.jpg" alt="" />
          <h3>Our Mission</h3>
          <p>To foster a love for football and develop skills that will lead to success on the field and in life.</p>
        </div>
      </div>
      <div id="gooey"></div>
    </div>
  );
}

function Page3() {
  const elements = [
    { id: 'elem1', image: 'Assets/u-12.jpg', title: 'UNDER-12' },
    { image: 'Assets/u-15.jpg', title: 'UNDER-15' },
    { image: 'Assets/u-18.jpg', title: 'UNDER-18' },
    { image: 'Assets/senior2.jpg', title: 'SENIOR TEAM' },
    
  ];

  return (
    <div id="page3">
      <div id="elem-container">
        {elements.map((elem) => (
          <div className="elem" key={elem.id} data-image={elem.image}>
            <h1>{elem.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}


function Page4() {
  return (
    <div id="page4">
      <h1>Gallery</h1>
      <div className="gallery">
        <div className="gallery-item">
          <img src="Assets/gallery1.jpg" alt="Gallery Image 1" />
        </div>
        <div className="gallery-item">
          <img src="Assets/gallery2.jpg" alt="Gallery Image 2" />
        </div>
        <div className="gallery-item">
          <img src="Assets/gallery3.jpg" alt="Gallery Image 3" />
        </div>
        <div className="gallery-item">
          <img src="Assets/gallery4.jpg" alt="Gallery Image 4" />
        </div>
        <div className="gallery-item">
          <img src="Assets/gallery5.jpg" alt="Gallery Image 5" />
        </div>
        <div className="gallery-item">
          <img src="Assets/gallery6.jpg" alt="Gallery Image 6" />
        </div>
      </div>
      <div id="lightbox" className="lightbox">
        <span className="close">&times;</span>
        <img className="lightbox-content" id="lightbox-img" />
      </div>
    </div>
  );
}


function Page5() {
  return (
    <div id="page5">
      <div id="footer">
        <h1>GFFC</h1>
        <div id="footer-div">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Phone: +91-7498533785</p>
            <p>Email: goldenfeathersfootballclub@gmail.com</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>Instagram: <a href="https://www.instagram.com/@golden_feathers_fc" target="_blank" rel="noopener noreferrer">@golden_feathers_fc</a></p>
          </div>
          <div className="footer-section">
            <h3>Useful Links</h3>
            <p><a href="#">About Us</a></p>
            <p><a href="#">Programs</a></p>
            <p><a href="#">Contact</a></p>
          </div>
        </div>
        <div id="footer-bottom">
          <p>&copy; 2024 Golden Feathers Football Club. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}




export default App;
