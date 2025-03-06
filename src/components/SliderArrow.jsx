import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SliderArrow = ({ direction, onClick }) => {
    const isLeft = direction === 'left';

    return (
        <IconButton onClick={onClick} style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: isLeft ? 16 : 'auto',
            right: isLeft ? 'auto' : 16,
            background: 'rgba(255, 255, 255, 0.7)',
            zIndex: 1,
        }}>
            {isLeft ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
        </IconButton>
    );
};

export default SliderArrow;
