import React from 'react'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter()
  return (
    <Box className='footer-container'>
      <Typography className='heading-1'>
        Office Address: 4 Mozang Road, Near Family Hospital, Lahore, Pakistan
      </Typography>
      <Typography className='heading-2'>
        Phone: 042 37114925| Email:{" "}
        <span
            onClick={() => router.push("mailto:hi@prixite.com")}
            className='heading-3'
        >
          hi@prixite.com
        </span>
      </Typography>
      <Typography className='heading-4'>Copyright © 2022 Prixite</Typography>
    </Box>
  )
}

export default Footer