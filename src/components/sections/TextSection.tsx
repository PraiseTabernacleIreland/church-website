import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { TextSectionProps } from '../../types/connect';

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
