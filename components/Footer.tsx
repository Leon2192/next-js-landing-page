'use client'

import { Button, Col, Container, Grid, Navbar, NextUIProvider, Text, createTheme } from '@nextui-org/react';

import Link from 'next/link';

const darkTheme = createTheme({ type: 'dark' });



export default function Footer() {
  return (
    <NextUIProvider theme={darkTheme}>
      <Container>
      <Text css={{'textAlign': 'center'}}>
        Developed by {" "} <br />
        <Link href=''>Leonardo Manuel Arrieta</Link>
        </Text>
      </Container>
    </NextUIProvider>
  )
}
