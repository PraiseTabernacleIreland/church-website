import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { HeroSectionProps } from '../../types/connect';

/**
 * Hero section component that displays a full-width banner with background image and text overlay
 * 
 * This component is typically used at the top of pages to create an impactful visual introduction
 * with a title and optional message text centered over a background image.
 * 
 * @param {HeroSectionProps} props - Component props
 * @param {string} props.backGroundImageSrc - CSS background-image value (e.g., 'url(/path/to/image.jpg)')
 * @param {string} [props.height='50vh'] - CSS height value for the hero section
 * @param {string} props.title - Main heading text to display
 * @param {string} [props.message] - Optional subheading/message text
 * 
 * @example
 * <HeroSection
 *   backGroundImageSrc="url(/assets/about.jpg)"
 *   height="60vh"
 *   title="Welcome to Our Church"
 *   message="Join us every Sunday at 10am"
 * />
 */
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
