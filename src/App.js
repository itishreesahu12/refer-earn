import React, { useState } from 'react';
import Hero from './component/Hero';
import ReferralModal from './component/ReferralModal';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const App = () => { 
  const [isModalOpen, setModalOpen] = useState(false);

  const handleReferNowClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  
  return(
    <ThemeProvider theme={theme}>
      <Hero onReferNowClick={handleReferNowClick}/>
      <ReferralModal open={isModalOpen} onClose={handleCloseModal}/>
    </ThemeProvider>
  );
};

export default App;
