import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PreLoader from './components/PreLoader/PreLoader';
import WebRoutes from './components/WebRoutes/WebRoutes';
import './css/font-awesome.css';
import './css/animate.css';
import './App.css';
import './css/font.css';


function App() {
  const [windowLoad, setWindowLoad] = useState(false);
  useEffect(() => {
    setWindowLoad(true);
  }, [windowLoad]);

  return (
    <div>
      {!windowLoad ?
        <PreLoader />
        :
        <WebRoutes />
      }
    </div>
  );
}

export default App;
