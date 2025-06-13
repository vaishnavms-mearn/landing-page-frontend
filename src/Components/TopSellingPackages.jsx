import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Alert,
    Button,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getTopSellingPackagesAPI } from '../../Services/AllApi';
import { base_Url } from '../../Services/base_Url';

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

export default function TopSellingPackages() {
    const { data: packages = [], isLoading, isError, error } = useQuery({
        queryKey: ['packages'],
        queryFn: getTopSellingPackagesAPI,
        retry: false,
    });

    const [expandedCardId, setExpandedCardId] = useState(null);

    const toggleDetails = (id) => {
        setExpandedCardId(prev => (prev === id ? null : id));
    };

    return (
        <Box sx={{
            backgroundColor: '#F9F9F9',
            textAlign: 'center',
            py: { xs: 6, md: 10 },
            px: { xs: 2, sm: 4, md: 6 },
            minHeight: '60vh'
        }}>
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
                Top Selling Tour Packages of India
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    maxWidth: 500,
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

            {isLoading && <CustomSpinner />}

            {isError && (
                <Alert severity="error" sx={{ maxWidth: 600, mx: 'auto', my: 4, fontFamily: 'Poppins' }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        Failed to load packages: {error?.message || 'Unknown error'}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Please try again later or contact support.
                    </Typography>
                </Alert>
            )}

            {!isLoading && !isError && (
                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    {packages.map((item, index) => {
                        const cardId = item._id || index;
                        const isExpanded = expandedCardId === cardId;

                        return (
                            <Grid item xs={12} sm={6} md={4} key={cardId}>
                                <Card
                                    sx={{
                                        width: '100%',
                                        maxWidth: 400,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
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
                                        height="260"
                                        image={`${base_Url}/uploads/${item.image}`}
                                        alt={item.name}
                                        sx={{ objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
                                    />
                                    <CardContent sx={{ px: 2, py: 2 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 700,
                                                fontFamily: 'Poppins',
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                                color: '#007B8F',
                                                textTransform: 'uppercase',
                                                mb: 1,
                                                textAlign: 'center',
                                            }}
                                        >
                                            {item.name}
                                        </Typography>

                                        {isExpanded && (
                                            <Box sx={{ mt: 2, textAlign: 'center' }}>
                                                <Typography variant="body2" sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
                                                    Price: ₹{item.price || '4999'}/-
                                                </Typography>
                                                <Typography variant="body2" sx={{ fontFamily: 'Poppins' }}>
                                                    Duration: {item.duration || '5 Days / 4 Nights'}
                                                </Typography>
                                            </Box>
                                        )}

                                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                                            <Button
                                                fullWidth
                                                size="medium"
                                                onClick={() => toggleDetails(cardId)}
                                                sx={{
                                                    backgroundColor: '#38C2B5',
                                                    color: '#fff',
                                                    fontWeight: 600,
                                                    borderRadius: '999px',
                                                    textTransform: 'uppercase',
                                                    fontFamily: 'Poppins',
                                                    py: 1,
                                                    '&:hover': {
                                                        backgroundColor: '#2FB0A5',
                                                    },
                                                }}
                                            >
                                                {isExpanded ? 'Hide Details' : 'View Details'}
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            )}
        </Box>
    );
}
