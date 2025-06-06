import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { CallToActionSectionProps } from '../../types/connect';
import { useNavigate } from 'react-router-dom';

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  heading,
  message,
  buttonText,
  buttonLink,
  backgroundColor,
  textColor,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (buttonLink.startsWith('http')) {
      window.open(buttonLink, '_blank');
    } else {
      navigate(buttonLink);
    }
  };

  return (
    <Box
      sx={{
        py: 8,
        mt: 4,
        backgroundColor: backgroundColor || '#055594',
        textAlign: 'center',
        color: textColor || '#fff',
        width: '100%',
      }}
    >
      <Container>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
          {heading}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '18px', lineHeight: 1.6 }}>
          {message}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: textColor || '#fff',
            color: backgroundColor || '#055594',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#ddd' },
          }}
          size="large"
          onClick={handleClick}
        >
          {buttonText}
        </Button>
      </Container>
    </Box>
  );
};

export default CallToActionSection;
