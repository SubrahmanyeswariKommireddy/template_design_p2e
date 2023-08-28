import React, { useState, useEffect } from 'react';
import TopNavBar from './components/TopNavbar'
import MobileComponents from './main_components/XLComponents';
import XLComponents from './main_components/MobileComponents';

const App = () => {
  const [isXlScreen, setIsXlScreen] = useState(window.innerWidth >= 1280); // XL breakpoint width

  useEffect(() => {
    const handleResize = () => {
      setIsXlScreen(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <TopNavBar />
      {isXlScreen ? <MobileComponents />:<XLComponents />}
    </div>
    
  );
};

export default App;

