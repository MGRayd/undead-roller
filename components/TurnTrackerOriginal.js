import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
} from 'react-native';

import brainIcon from '../assets/icons/brain.png';
import shotgunIcon from '../assets/icons/shotgun.png';
import globalStyles from '../styles/globalStyles';

const TurnTrackerOriginal = ({ currentPlayer, turnData, onDiceResult, onEndTurn }) => {
  return (
    <View style={globalStyles.turnTracker}>
      <Text style={globalStyles.turnTitle}>Turn: {currentPlayer.name}</Text>

      <View style={globalStyles.iconRow}>
        <TouchableOpacity onPress={() => onDiceResult('brains')}>
          <Image source={brainIcon} style={globalStyles.icon} />
          <Text style={globalStyles.iconLabel}>{turnData.brains}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onDiceResult('shotguns')}>
          <Image source={shotgunIcon} style={globalStyles.icon} />
          <Text style={globalStyles.iconLabel}>{turnData.shotguns}</Text>
        </TouchableOpacity>
      </View>

      <Button title="End Turn" onPress={onEndTurn} />
    </View>
  );
};

export default TurnTrackerOriginal;
