import React from 'react';
import { Box, Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { GridCardsSectionProps } from '../../types/connect';

const GridCardsSection: React.FC<GridCardsSectionProps> = ({ heading, items, backgroundColor }) => (
  <Box sx={{ py: 6, backgroundColor: backgroundColor || 'transparent', width: '100%' }}>
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center', color: '#333' }}>
        {heading}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', textAlign: 'center', p: 2 }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{ height: '180px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default GridCardsSection;
