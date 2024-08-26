import './App.css'
import { About } from './home/about';
import { Adress } from './home/adress';
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  const [showServices, setShowServices] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    const show = () => {
      const user1 = localStorage.getItem('username');
      setUser(user1);
       localStorage.removeItem('username'); 
      if (user!='') { 
        setShowServices(true);
      }
    };
    show();
  }, []);

  return (
    <>
      <nav id='top-nav'>
        <ul>
          {showServices &&
           <li>
            <Link to={'services'}>services</Link>
          </li>
          }
          <li>
            <Link to={''}>main</Link>
          </li>
          <li>
            <button><Link to={'signin'}>signin</Link> / <Link to={'signUp'}>signUp</Link></button>
          </li>
          <li>hello to {user}</li>
        </ul>
      </nav>
      <header>
        <About />
        <Adress />
      </header>



      <div>
        <Outlet />
      </div>
      
     
      <div id="wig-picture">
    </div>
    </>
  );
}

export default App;

