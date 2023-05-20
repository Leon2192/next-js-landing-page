'use client'

import { Button, Col, Container, Grid, Navbar, NextUIProvider, Text, createTheme } from '@nextui-org/react'

import Image from 'next/image'
import InfoCard from '@/components/infoCard';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

const darkTheme = createTheme({ type: 'dark' });



export default function Home() {
  return (
    <NextUIProvider theme={darkTheme}>
      <Container>
        { /*Navbar */}
        <Navbar isCompact variant={"static"}>
          <Navbar.Brand>
            <Text b color='inherit'>
              Learn to code
            </Text>
          </Navbar.Brand>
          <Navbar.Content hideIn='md'>
            <Navbar.Link href='#'>Learning Platform</Navbar.Link>
            <Navbar.Link href='#'>Community</Navbar.Link>
            <Navbar.Link href='#'>Contact us Platform</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Link href='#'>Login</Navbar.Link>
            <Navbar.Item>
              <Button auto flat href='#'>
                Sign up
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
        { /*Jumbotron */}
        <Grid.Container justify='center' css={{ "height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/AE1.jpg)" }}>
          <Grid xs={12} sm={6} alignItems='center'>
            <Col css={{ "width": "100%" }}>
              <Text weight={"bold"} size={70} css={{ "textAlign": "center" }}>
                The education platform
              </Text>
              <Button size='md' shadow color="gradient" css={{"width":"100%", "marginTop":"10px"}}>
                Join for free
              </Button>
            </Col>
          </Grid>
          
        </Grid.Container>

        { /*Displaying Product Cards */}
        <Grid.Container gap={2}>
          <Grid xs={12} sm={4}>
            <InfoCard
            label='Course'
            title='Learn Next js with Coders'
            imageURL='https://littlevisuals.co/images/red_dawn.jpg'
            studentCount='3,500'
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <InfoCard
            label='Course'
            title='Create a startup with Coders'
            imageURL='https://littlevisuals.co/images/vik.jpg'
            studentCount='1,500'
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <InfoCard
            label='Course'
            title='Learn Apollo server with Coders'
            imageURL='https://littlevisuals.co/images/over.jpg'
            studentCount='5,500'
            />
          </Grid>
        </Grid.Container>


      </Container>

    </NextUIProvider>
  )
}
