import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { CallToActionSectionProps } from '../../types/connect';
import { useNavigate } from 'react-router-dom';

/**
 * Call to action section component with heading, message, and action button
 * 
 * This component creates an attention-grabbing section with a prominent button that can
 * navigate to internal routes or open external links. The button intelligently handles
 * both internal navigation and external URLs.
 * 
 * @param {CallToActionSectionProps} props - Component props
 * @param {string} props.heading - Main heading text for the CTA
 * @param {string} props.message - Descriptive message text below the heading
 * @param {string} props.buttonText - Text displayed on the action button
 * @param {string} props.buttonLink - URL or route path for the button action
 * @param {string} [props.backgroundColor='#055594'] - Background color for the section
 * @param {string} [props.textColor='#fff'] - Text color for heading and message
 * 
 * @example
 * <CallToActionSection
 *   heading="Join Us This Sunday"
 *   message="Experience worship, fellowship, and the Word of God"
 *   buttonText="Plan Your Visit"
 *   buttonLink="/contact"
 *   backgroundColor="#055594"
 *   textColor="#fff"
 * />
 */
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
