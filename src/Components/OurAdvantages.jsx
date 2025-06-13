import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { BsClock, BsWallet2, BsChatDots, BsJournalBookmark } from 'react-icons/bs';

export default function OurAdvantages() {
  const items = [
    {
      icon: <BsClock size={32} color="#007B8F" />,
      title: 'Save Time',
      description: 'No More Switching For Packages Or Plans.',
    },
    {
      icon: <BsWallet2 size={32} color="#007B8F" />,
      title: 'Save Money',
      description: 'Compare, Negotiate, And Choose The Best.',
    },
    {
      icon: <BsChatDots size={32} color="#007B8F" />,
      title: 'Trusted Network',
      description: 'A Trusted Network Of 7000+ Travel Agents',
    },
    {
      icon: <BsJournalBookmark size={32} color="#007B8F" />,
      title: 'Multiple Options',
      description: 'Itineraries & Travel Tips From Trusted Agents',
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#7AD0C5', py: 10, px: 2, textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{ color: 'white', fontWeight: 700, mb: 1 , fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: '36px', sm: '50px', md: '55px' },
            }}
      >
        Our Advantages
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'white',
          fontWeight: 300,
          maxWidth: 600,
          mx: 'auto',
          mb: 6,
        }}
      >
        You can rely on our experience and the quality of services we provide. <br />
        Here are other reasons to book tours at Treat Holidays
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                {item.icon}
              </Box>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: 'white', mb: 1 }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'white', fontWeight: 300 }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
