import React from 'react';
import {
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Audio } from 'expo-av';
import * as Animatable from 'react-native-animatable';
import globalStyles from '../styles/globalStyles';

import zombieDiceImg from '../assets/images/zombie_dice.png';
import titleBannerImg from '../assets/images/title_banner.png';
import zd1Img from '../assets/images/btn_zd1.png';
import zd2Img from '../assets/images/btn_zd2.png';

const HomeScreen = ({ navigation }) => {
  const playZombieSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/zombie_groan.mp3')
      );
      await sound.playAsync();
    } catch (error) {
      console.warn('Could not play zombie sound:', error);
    }
  };

  const handleNavigation = async (mode) => {
    await playZombieSound();
    navigation.navigate('Game', { mode });
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.homeContainer}>
      <Image source={titleBannerImg} style={globalStyles.heroImage} />
      <Text style={globalStyles.subtitle}>Choose Your Game Mode</Text>
      <Image source={zombieDiceImg} style={globalStyles.titleBanner} />

      <TouchableOpacity onPress={() => handleNavigation('classic')}>
        <Animatable.Image
          animation="pulse"
          iterationCount="infinite"
          easing="ease-in-out"
          duration={1500}
          source={zd1Img}
          style={globalStyles.buttonImage}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation('doubleFeature')}>
        <Animatable.Image
          animation="pulse"
          iterationCount="infinite"
          easing="ease-in-out"
          duration={1500}
          source={zd2Img}
          style={globalStyles.buttonImage}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomeScreen;
