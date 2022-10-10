import React from 'react';
import './App.css';





function App() {
  
  let left = 0;
 
  function sLeft(){
    
    const poloska = document.querySelector(".polosa");
    left = left - 64;
    if(left < -192){
      left = 0;
    }
    poloska.style.left = left + "px";
  
  }
  function sRight(){
    
    const poloska = document.querySelector(".polosa");
    left = left + 64;
    if(left > 0){
      left = -192;
    }
    poloska.style.left = left + "px";
  }
  return (
    <div className="App">
     <div className="container">
    <div className="header">
        <div className="title">
           <h1>Pic slider for puggy</h1>
        </div>
        <div className="right-block"></div>
    </div>
    
    <div className="content-wrapper">
        <div className="content">
            <h3>Just slide and click</h3>
    <div className="body">
	    <div className="all">
	        <div className='slider'>
	            <div className='polosa'>
	                <a href="https://en.wikipedia.org/wiki/Deer"><div className="pic1"></div></a>
                  <a href="https://en.wikipedia.org/wiki/Giraffe"><div className="pic2"></div></a>
                  <a href="https://en.wikipedia.org/wiki/Jellyfish"><div className="pic3"></div></a>
                  <a href="https://en.wikipedia.org/wiki/Bear"><div className="pic4"></div></a>
                  
	            </div>
	        </div>
	    </div>
	    <button onClick={sLeft}>L</button>
	    <button onClick={sRight}>R</button>


	    
	</div>
              
        </div>
        <div className="sidebar">
            <ul>
              <li><a href="#">Did you click here?</a></li>
              <li><a href="#">These links</a></li>
              <li><a href="#">Does not work</a></li>
              <li><a href="#">They are here</a></li>
              <li><a href="#">Just for distraction</a></li>
            </ul>
        </div>
    </div>

    </div>
    </div>
  );
}

export default App;
