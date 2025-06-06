import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { HeroSectionProps } from '../../types/connect';

const HeroSection: React.FC<HeroSectionProps> = ({ backGroundImageSrc, height, title, message }) => (
  <Box
    sx={{
      backgroundImage: backGroundImageSrc,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: height || '50vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
      px: 2,
    }}
  >
    <Container>
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        {title}
      </Typography>
      {message && (
        <Typography variant="h5">
          {message}
        </Typography>
      )}
    </Container>
  </Box>
);

export default HeroSection;
