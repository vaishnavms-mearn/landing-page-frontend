import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Alert
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getAllDestinationsAPI } from '../../Services/AllApi';
import { base_Url } from '../../Services/base_Url';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// Spinner
const CustomSpinner = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 8, gap: 2 }}>
    <Box sx={{
      width: 80,
      height: 80,
      borderRadius: '50%',
      border: '8px solid #007B8F',
      borderTop: '8px solid transparent',
      animation: 'spin 1s linear infinite',
      '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    }} />
    <Typography sx={{ color: '#007B8F', fontWeight: 500, fontFamily: 'Poppins' }}>
      Loading Destinations...
    </Typography>
  </Box>
);

export default function Destinations() {
  const { data: destinations = [], isLoading, isError, error } = useQuery({
    queryKey: ['destinations'],
    queryFn: getAllDestinationsAPI,
    retry: false,
  });

  return (
    <Box sx={{
      backgroundColor: '#F9F9F9',
      textAlign: 'center',
      py: { xs: 6, md: 10 },
      px: { xs: 2, sm: 4, md: 6 },
      minHeight: '60vh'
    }}>
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          fontFamily: 'Poppins',
          color: '#007B8F',
          mb: 2,
          textTransform: 'uppercase',
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
        }}
      >
        Explore Most Popular Destinations
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: 700,
          mx: 'auto',
          color: '#555',
          fontFamily: 'Poppins',
          fontWeight: 300,
          fontSize: { xs: '0.9rem', sm: '1rem' },
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Plan your perfect trip with our most loved and best-selling tour packages.
      </Typography>

      {/* Loading */}
      {isLoading && <CustomSpinner />}

      {/* Error */}
      {isError && (
        <Alert severity="error" sx={{ maxWidth: 600, mx: 'auto', my: 4, fontFamily: 'Poppins' }}>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            Failed to load destinations: {error?.message || 'Unknown error'}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Please try again later or contact support.
          </Typography>
        </Alert>
      )}


      {!isLoading && !isError && (
        <>
          <Grid container spacing={4} justifyContent="center">
            {destinations.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item._id} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    width: '100%',
                    maxWidth: 390,
                    borderRadius: 3,
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="280"
                    image={`${base_Url}/uploads/${item.image}`}
                    alt={item.name}
                    sx={{
                      objectFit: 'cover',
                      borderRadius: '12px 12px 0 0',
                      width: '100%' 
                    }}
                  />
                  <CardContent
                    sx={{
                      backgroundColor: '#fff',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      px: 2,
                      py: 3,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontFamily: 'Poppins',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        color: '#007B8F',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: { xs: '0.85rem', sm: '0.95rem' },
                        color: '#555',
                      }}
                    >
                      Starting from{' '}
                      <Box component="span" sx={{ color: '#007B8F', fontWeight: 600 }}>
                        ₹{item.price.toLocaleString()}
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 6, display: 'flex', justifyContent: 'right', gap: 4 }}>
            <Box
              sx={{
                width: 55,
                height: 55,
                borderRadius: '50%',
                backgroundColor: '#f1f1f1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#ddd' },
              }}
            >
              <BsArrowLeft size={20} />
            </Box>
            <Box
              sx={{
                width: 55,
                height: 55,
                borderRadius: '50%',
                backgroundColor: '#FFD43B',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#ffc800' },
              }}
            >
              <BsArrowRight size={20} />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
