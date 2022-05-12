import { Box, Container, Typography, Stack, Divider, Grid, Button } from '@mui/material';
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
import homePageBg from "../public/images/homePageBg.png";
import { services } from '../constants/constants';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Home() {
  return (
    <>  
      <Head>
        <title>Prixite</title>
        <meta name='prixite' content='Prixite' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header bgImg={homePageBg}>
        <Container maxWidth='xl'>
          <Stack
            pt={{ xs: "120px", lg: "180px" }}
            pb={{ xs: "100px", lg: "80px" }}
            direction={{ xs: "column", md: "row" }}
            spacing={5}
          >
            <Box>
              <Typography variant='h6' className='home-main-heading-1'>
                Transform Your Business With Us
              </Typography>
              <Divider textAlign='left' className='divider' />
              <Typography variant='h4' className='home-main-heading-2'>
                One-stop Solution to Your Business Needs
              </Typography>
            </Box>

            <Box textAlign='center'>
              <Image
                unoptimized
                priority
                loader={() =>
                  `https://i0.wp.com/prixite.com/wp-content/uploads/2021/05/software-house-in-Multan.png?w=500&ssl=1`
                }
                src={
                  "https://i0.wp.com/prixite.com/wp-content/uploads/2021/05/software-house-in-Multan.png?w=500&ssl=1"
                }
                width={400}
                height={300}
              />
            </Box>
          </Stack>
        </Container>
      </Header>
      <Container>
        <Box p="5rem 1.3rem">
          <Typography variant="h5" fontWeight="bold">
            Welcome to Prixite - Fastest Growing IT Company
          </Typography>
          <Typography margin="1.8rem 0">
            Prixite is one online technology solutions provider company that is
            considered as a new breed of thinkers who is driven to create
            effective business solutions for its clients. We aspire to become
            our client’s first choice when it comes to being a world leader in
            the progress and advancement of businesses through digital
            platforms.
          </Typography>
          <Typography margin="1.8rem 0">
            Our goal is to offer our clients complete customer satisfaction,
            growth, innovation, and a continuous path to evolve and grow within
            their industry. We aim to constantly bring innovative solutions to
            cater to our client’s requirements and expectations.
          </Typography>
          <Typography margin="1.8rem 0">
            Our team of professionals is always on our client’s side offering
            them alluring and tailor-made solutions to the ever-changing
            landscape of their business industry to achieve innovative,
            scalable, customized, and cost-effective solutions to your business
            needs.
          </Typography>
          <Typography
            margin="6.5rem 0 3rem 0"
            variant="h3"
            textAlign="center"
            fontWeight="700"
          >
            WHAT WE DO
          </Typography>
          <Divider
            variant="middle"
            sx={{
              mx: "auto",
              width: "8%",
              marginTop: ".2rem",
              borderColor: "var(--primary-green)",
              borderTop: "2px solid",
              borderTopColor: "var(--primary-green)",
              fill: "true",
              marginBottom: "3rem",
            }}
          />
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {services.map((item, index) => (
              <Grid item sm={12} md={6} key={index}>
                <Box marginBottom="10px">
                  <div>
                    <Image
                      src={item.img}
                      objectFit="cover"
                      width={500}
                      height={300}
                    />
                  </div>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      margin: "10px 0",
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Box textAlign="center" mt="2rem">
                    <Button
                      endIcon={<ArrowRightAltIcon />}
                      sx={{
                        textAlign: "center",
                        backgroundColor: "var(--primary-green)",
                        color: "white",
                        borderRadius: "30px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        paddingRight: "40px",
                        paddingLeft: "40px",
                        fontWeight: "bold",
                        ":hover": {
                          backgroundColor: "var(--primary-green)",
                        },
                      }}
                      onClick={() => router.push(item.path)}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}
