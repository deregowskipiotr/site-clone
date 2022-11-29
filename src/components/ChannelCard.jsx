import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "10px",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '326px', md: '300px', },
      height: '326px',
      margin: 'auto',
      marginTop
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.hight?.url || demoProfilePicture }
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "250px",
            width: "250px",
            mb: 2,
            border: "1px solid grey",
          }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: "grey", ml: "5px" }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'grey'}}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);
 

export default ChannelCard;

