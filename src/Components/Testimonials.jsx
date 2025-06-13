import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
const testimonials = [
    {
        img: 'https://randomuser.me/api/portraits/men/32.jpg',
        text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
        name: "Name",
        designation: "Company / Designation"
    },
    {
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
        name: "Name",
        designation: "Company / Designation"
    },
    {
        img: 'https://randomuser.me/api/portraits/men/65.jpg',
        text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
        name: "Name",
        designation: "Company / Designation"
    }
];

export default function Testimonials() {
    return (
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 4, md: 6 }, backgroundColor: '#fff' }}>
            {/* Section Title */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    fontFamily: 'Poppins',
                    color: '#000',
                    textAlign: 'left',
                    mb: 6,

                    ml: { xs: 2, sm: 6, md: 10 }, 
                    fontSize: { xs: '1.8rem', sm: '2.2rem' }
                }}
            >
                Testimonials
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                {testimonials.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '400px',
                            backgroundColor: '#f7f7f7',
                            p: 3,
                            mt: 5,
                            borderRadius: 2,
                            textAlign: 'center',
                            boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.05)',
                            minHeight: 350,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative'
                        }}
                    >
                        <Avatar
                            src={item.img}
                            alt={item.name}
                            sx={{
                                width: 100,
                                height: 100,
                                position: 'absolute',
                                top: -40,
                                left: '20%',
                                transform: 'translateX(-50%)',
                                border: '4px solid white',
                                boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                        <Box sx={{ pt: 6 }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '0.95rem',
                                    color: '#333',
                                    lineHeight: 1.7,
                                    mb: 2,
                                    textAlign: "left"

                                }}
                            >
                                {item.text}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ fontFamily: 'Poppins', fontWeight: 600, color: '#000', textAlign: "left" }}>
                                {item.name}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ fontFamily: 'Poppins', color: '#777', textAlign: "left" }}>
                                {item.designation}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
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
        </Box>
    );
}