import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';

import { colors, size, spacing } from './../config/theme'
import { Logo as AppLogo, Search, Notification } from './../components/Icons'
import HomeCarousel from './../components/Carousel'

export default function Home() {
  return (
    <SafeAreaView>
      <Container>
        <Logo>
          <AppLogo />
        </Logo>
        <View style={{ flexDirection: 'row' }}>
          <IconWrapp>
            <Search />
          </IconWrapp>
          <IconWrapp>
            <Notification />
          </IconWrapp>
        </View>
      </Container>
      <View>
        <HomeCarousel />
      </View>
    </SafeAreaView>
  )
}
const Container = styled.View`
   background: ${colors.white};
   display:flex;
   flex-direction:row;
   justify-content:space-between;
`;

const IconWrapp = styled.TouchableOpacity`
position:relative;
background: ${colors.gray};
padding:9px;
margin:${spacing.small}px;
width:40px;
height:40px;
border-radius:${spacing.big * 2}px;
`;
const Logo = styled.View`
  padding:${spacing.normal}px;
`;

