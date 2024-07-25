import './App.css';

function App() {
  return (
    <div className="App">
      <div className='homescreen-box'>
        <div className='homescreen-login-button'>
          <a href='/login'>
            Login
          </a>
        </div>
        <div className='homescreen-signup-button'>
        <a href='/signup'>
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
