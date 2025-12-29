import React from 'react';
import { Box, Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { GridCardsSectionProps } from '../../types/connect';

/**
 * Grid cards section component for displaying a collection of items in a responsive card layout
 * 
 * This component renders a grid of cards, each containing an image, name, and description.
 * The grid is responsive, adjusting from 1 column on mobile to 3 columns on desktop.
 * Perfect for showcasing ministries, activities, team members, or any collection of related items.
 * 
 * @param {GridCardsSectionProps} props - Component props
 * @param {string} props.heading - Main heading text displayed above the card grid
 * @param {Array} props.items - Array of items to display in cards
 * @param {string} props.items[].image - Image URL for the card
 * @param {string} props.items[].name - Title/name for the card
 * @param {string} props.items[].description - Description text for the card
 * @param {string} [props.backgroundColor='transparent'] - Optional background color for the section
 * 
 * @example
 * <GridCardsSection
 *   heading="Our Ministries"
 *   items={[
 *     { image: '/assets/worship.jpg', name: 'Worship', description: 'Join our praise team' },
 *     { image: '/assets/youth.jpg', name: 'Youth Ministry', description: 'For ages 13-18' }
 *   ]}
 *   backgroundColor="#f9f9f9"
 * />
 */
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
