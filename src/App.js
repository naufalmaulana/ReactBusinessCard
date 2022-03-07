import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="container p-5 bg-navy">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <div class="container">
              <div class="row justify-content-center align-item-center">
                <div class="col-12 text-center">
                    <img class="img-fluid" src="./profilepic.png" alt="profilepic"/>
                </div>
              </div>
              <div class="row justify-content-center align-items-center my-3">
                  <div class="col-12 text-center">
                      <h1 class="text-white fw-bold">Laura Smith</h1>
                      <h3 class="text-dark-peach">Frontend Developer</h3>
                      <p class="text-white">laurasmith.website</p>
                  </div>
              </div>
              <div class="row justify-content-center align-items-center mb-5 g-4">
                  <div class="col-md-6 text-center">
                      <button class="btn bg-light text-dark px-4 py-2 rounded btnwdth">
                        <h3><i class="bi bi-envelope-fill"></i> Email</h3>
                      </button>
                  </div>
                  <div class="col-md-6 text-center">
                      <button class="btn bg-blue text-white px-4 py-2 rounded btnwdth">
                        <h3><i class="bi bi-linkedin"></i> LinkedIn</h3>
                      </button>
                  </div>
              </div>
              <div class="row justify-content-center align-items-center mb-5">
                  <div class="about">
                      <h3 class="text-white fw-bold">About</h3>
                      <p class="text-white">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                  </div>
                  <div class="interest">
                      <h3 class="text-white fw-bold">Interest</h3>
                      <p class="text-white">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                  </div>
              </div>
              <div class="row justify-content-center align-items-center bg-black py-3 rounded">
                  <div class="col-3  txt-icon text-center">
                    <h3><i class="bi bi-twitter"></i></h3>
                  </div>
                  <div class="col-3  txt-icon text-center">
                    <h3><i class="bi bi-facebook "></i></h3>
                  </div>
                  <div class="col-3  txt-icon text-center">
                    <h3><i class="bi bi-instagram "></i></h3>                     
                  </div>
                  <div class="col-3  txt-icon text-center">
                    <h3><i class="bi bi-linkedin "></i></h3>
                  </div>
              </div>
            </div>
          </div>  
        </div>  
      </div>
    </div>
  );
}

export default App;
