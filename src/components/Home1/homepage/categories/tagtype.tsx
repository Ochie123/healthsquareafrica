import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Link from 'next/link';
import React from 'react';

function TagType() {
  return (
    <>
      <Link href="/">
        <Box sx={{ width: 200, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
          <Typography level="h3" fontSize="xl" sx={{ mb: 0 }}>
            <img
              src="/images/type/Explore_By-Product_Reviews.png.webp"
              loading="lazy"
              alt="Fitness"
              width="100%"
              style={{ maxWidth: '100%' }}
            />
          </Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Fitness
          </Typography>
        </Box>
      </Link>

      <Link href="/">
        <Box sx={{ width: 200, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
          <Typography level="h3" fontSize="xl" sx={{ mb: 0 }}>
            <img
              src="/images/type/Explore_By-Product_Reviews.png.webp"
              loading="lazy"
              alt="Explore_By-Product_Reviews"
              width="100%"
              style={{ maxWidth: '100%' }}
            />
          </Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Reviews
          </Typography>
        </Box>
      </Link>

      <Link href="/">
        <Box sx={{ width: 200, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
          <Typography level="h3" fontSize="xl" sx={{ mb: 0 }}>
            <img
              src="/images/type/Explore_By-Mental_Health.png.webp"
              loading="lazy"
              alt="Mental Health"
              width="100%"
              style={{ maxWidth: '100%' }}
            />
          </Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Mental Health
          </Typography>
        </Box>
      </Link>

      <Link href="/">
        <Box sx={{ width: 200, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
          <Typography level="h3" fontSize="xl" sx={{ mb: 0 }}>
            <img
              src="/images/type/Explore_By-Sleep.png.webp"
              loading="lazy"
              alt="Explore_By-Sleep"
              width="100%"
              style={{ maxWidth: '100%' }}
            />
          </Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Sleep
          </Typography>
        </Box>
      </Link>

      <Link href="/">
        <Box sx={{ width: 200, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
          <Typography level="h3" fontSize="xl" sx={{ mb: 0 }}>
            <img
              src="/images/type/Explore_By-Nutrition.png.webp"
              loading="lazy"
              alt="Explore_By-Nutrition"
              width="100%"
              style={{ maxWidth: '100%' }}
            />
          </Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Nutrition
          </Typography>
        </Box>
      </Link>
    </>
  );
}

export default TagType;
