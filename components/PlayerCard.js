import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import globalStyles from '../styles/globalStyles';
import brainIcon from '../assets/icons/brain.png';

const PlayerCard = ({ player, onRemove, highlighted }) => {
  return (
    <View
      style={[
        globalStyles.playerCard,
        highlighted && globalStyles.playerCardGlow,
      ]}
    >
      <View style={globalStyles.playerHeader}>
        <Text style={globalStyles.name}>{player.name}</Text>
        {onRemove && (
          <TouchableOpacity onPress={onRemove}>
            <Text style={globalStyles.remove}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
        <Image source={brainIcon} style={{ width: 20, height: 20, marginRight: 6 }} />
        <Text style={globalStyles.score}>{player.brains}</Text>
      </View>
    </View>
  );
};

export default PlayerCard;
