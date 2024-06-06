"use client"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';
//image caption -African woman biochemist using microscope in modern equipped laboratory_ black scientist doctor working with various bacteria, tissue, blood samples, pharmaceutical research for antibiotics.jpg 
// Material Kit 2 React examples
import DefaultInfoCard from "@/components/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "@/components/Cards/BlogCards/CenteredBlogCard";
//import insightsImage from "../../../public/images/avatar/antibiotics.jpg"

function Featured() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small


  const image = "/images/avatar/antibiotics.jpg"
  return (
    <>
      <Typography variant={isSmallScreen ? "h4" : "h2"} color='black'>
        Science and integrity matter to us
      </Typography>
      <br />
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <Grid container justifyContent="flex-start">
            <Grid item xs={12} md={6}>
              <Box mb={5}>
                <DefaultInfoCard
                  title="Expert Review Process"
                  description="At Healthsquare, we set high standards of quality, research, and transparency for what we share, ensuring you have access to nothing but the best. Here's how:
                  To ensure accuracy, each of our 10,000+ articles is reviewed by a medical subject matter expert such as a doctor, nurse, or therapist."
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mb={5}>
                <DefaultInfoCard
                  title="Current Research"
                  description="Our recommendations are current and based on research thanks to our diligent health and medical monitoring standards."
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mb={{ xs: 5, md: 0 }}>
                <DefaultInfoCard
                  title="Credible Brands"
                  description="Featured brands are reviewed for medical credibility, business practices, and social impact."
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mb={{ xs: 5, md: 0 }}>
                <DefaultInfoCard
                  title="Learn About Our Process"
                  description="Read about our rigorous process that ensures the quality, accuracy, and reliability of our health information."
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
          <CenteredBlogCard
            image={image}
            title="Read more"
            description="See how we provide trustworthy, accessible, and accurate information."
            action={{
              type: "internal",
              route: "/",
              color: "info",
              label: "learn more",
            }}
          />
        </Grid>
      </Grid>
    </>

  );
}

export default Featured;
