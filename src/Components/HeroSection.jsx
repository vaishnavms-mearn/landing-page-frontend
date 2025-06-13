import * as React from 'react';
import Box from '@mui/material/Box';
import hero from '../assets/images/hero.webp';
import { Button, Stack, Typography } from '@mui/material';
import logo from '../assets/images/design.png';

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        height: '100vh',
        width: '100%',
        m: 0,
        p: 0,
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        pl: { xs: 2, sm: 6, md: 10 },
        pr: { xs: 2, sm: 4, md: 0 },
        flexWrap: 'wrap'
      }}
    >
      {/* TEXT CONTENT */}
      <Stack spacing={3} alignItems="flex-start" maxWidth="630px">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: '36px', sm: '50px', md: '65px' },
            lineHeight: 1.2,
          }}
        >
          Discover Your Next Adventure
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            lineHeight: 1.6,
          }}
        >
          Choose from our curated experiences, customized for every kind of traveler.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            px: { xs: 4, sm: 6, md: 7 },
            py: 1,
            borderRadius: 10,
            fontWeight: 'bold',
            fontSize: { xs: '16px', md: '20px' },
            textTransform: 'uppercase',
            backgroundColor: '#ffb703',
            color: 'black',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          Book Now
        </Button>
      </Stack>

      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2,
          px: 2,
          gap: 2,
          position: 'absolute',
          bottom: 10,
          left: { xs: 10, sm: 20, md: 40 },
          width: { xs: '90%', sm: 'auto', md: '700px' },
          borderRadius: 2,
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        {["Easy Booking", "Curated Destinations", "Trusted Support"].map((text, index) => (
          <React.Fragment key={index}>
            <Typography
              sx={{
                fontSize: { xs: '14px', sm: '18px' },
                fontWeight: 600,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              {text}
            </Typography>

            {index < 2 && (
              <Box
                sx={{
                  height: '30px',
                  width: '2px',
                  backgroundColor: 'white',
                  display: { xs: 'none', sm: 'block' },
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>

      <Box
        component="img"
        src={logo}
        alt="Logo Design"
        sx={{
          position: 'absolute',
          bottom: -40,
          right: { xs: 20, sm: 60, md: 100 },
          width: { xs: '80px', sm: '100px',md:'100px', lg: '300px',xl:'400px' },
          zIndex: 2,
        }}
      />
    </Box>
  );
}
