import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { TextSectionProps } from '../../types/connect';

/**
 * Text section component for displaying centered heading and body text
 * 
 * This component provides a clean, centered text layout with customizable background color.
 * Ideal for informational sections, descriptions, and content-focused areas.
 * 
 * @param {TextSectionProps} props - Component props
 * @param {string} props.heading - Main heading text for the section
 * @param {string} props.text - Body text content, displayed below the heading
 * @param {string} [props.backgroundColor='transparent'] - Optional background color for the section
 * 
 * @example
 * <TextSection
 *   heading="Our Mission"
 *   text="We are dedicated to spreading the gospel and serving our community..."
 *   backgroundColor="#f5f5f5"
 * />
 */
const TextSection: React.FC<TextSectionProps> = ({ heading, text, backgroundColor }) => (
  <Box sx={{ py: 6, backgroundColor: backgroundColor || 'transparent', width: '100%' }}>
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center', color: '#333' }}>
        {heading}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '18px', lineHeight: 1.8, color: '#555', maxWidth: '800px', mx: 'auto' }}>
        {text}
      </Typography>
    </Container>
  </Box>
);

export default TextSection;
