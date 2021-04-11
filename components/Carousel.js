import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { colors, spacing } from '../config/theme';
import { scrollInterpolator, animatedStyles } from './../constants/animation';


const { width, height } = Dimensions.get('window');

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = width - 20;
const ITEM_HEIGHT = 200;

const DATA = [
  {
    title: 'Anise Aroma Art Bazar',
    url: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-1.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 1,
  },
  {
    title: 'Food inside a Bowl',
    url: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-2.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 2,
  },
  {
    title: 'Vegatable Salad',
    url: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-1.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 3,
  },
];

export default class HomeCarousel extends Component {
  state = {
    index: 0,
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={{ uri: item.url }} />
      </View>
    );
  }

  render() {
    console.log(this.props.navigation)
    return (
      <View>
        <Carousel
          loop={true}
          autoplay
          ref={(c) => (this.carousel = c)}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          activeSlideAlignment={'end'}
          layout={'stack'}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer:{
    marginTop:10,
  },
  itemContainer: {
    width: width - 40,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius:10,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});