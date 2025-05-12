import React from 'react';
import { View, Text, Image } from 'react-native';
import brainIcon from '../assets/icons/brain.png';
import globalStyles from '../styles/globalStyles';

const Leaderboard = ({ players }) => {
  const sortedPlayers = [...players].sort((a, b) => b.brains - a.brains);

  return (
    <View style={globalStyles.leaderboard}>
      <Text style={globalStyles.leaderboardTitle}>Leaderboard</Text>
      {sortedPlayers.map((player, index) => (
        <View
          key={player.id}
          style={[
            globalStyles.leaderboardItem,
            index === 0 && globalStyles.leaderboardItemHighlight,
          ]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {index === 0 && <Text style={globalStyles.trophyIcon}>🏆</Text>}
            {index === 1 && <Text style={globalStyles.trophyIcon}>🥈</Text>}
            {index === 2 && <Text style={globalStyles.trophyIcon}>🥉</Text>}
            <Text style={globalStyles.leaderboardName}>{player.name}</Text>
          </View>
          <View style={globalStyles.brainCount}>
            <Image source={brainIcon} style={globalStyles.brainIconSmall} />
            <Text style={globalStyles.brainText}>{player.brains}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Leaderboard;
