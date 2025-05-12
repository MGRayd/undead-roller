import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  topButton: {
    marginBottom: 20,
  },
  quitButton: {
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    color: '#fff',
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },

  centeredRow: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  // --- Leaderboard styles ---
leaderboard: {
  marginTop: 20,
  padding: 15,
  backgroundColor: '#1f1f1f',
  borderRadius: 10,
  paddingBottom: 30,
},
leaderboardTitle: {
  fontSize: 18,
  color: '#fff',
  marginBottom: 10,
  textAlign: 'center',
  fontWeight: 'bold',
},
leaderboardItem: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 8,
},
leaderboardName: {
  color: '#fff',
  fontSize: 16,
},
brainCount: {
  flexDirection: 'row',
  alignItems: 'center',
},
brainIconSmall: {
  width: 20,
  height: 20,
  marginRight: 6,
},
brainText: {
  color: '#fff',
  fontSize: 16,
},

leaderboardItemHighlight: {
  backgroundColor: '#292929',
  padding: 10,
  borderRadius: 8,
  marginBottom: 6,
  shadowColor: '#ffd700',
  shadowOpacity: 0.5,
  shadowRadius: 4,
  elevation: 3,
},

trophyIcon: {
  marginRight: 8,
  fontSize: 18,
},

// --- PlayerCard styles ---
playerCard: {
  backgroundColor: '#1f1f1f',
  padding: 15,
  marginBottom: 15,
  borderRadius: 10,
},
playerHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
name: {
  fontSize: 18,
  color: '#fff',
},
remove: {
  color: '#ff4d4d',
  fontSize: 20,
  paddingHorizontal: 8,
},
score: {
  color: '#ccc',
  marginTop: 8,
},

playerCardGlow: {
  backgroundColor: '#1f1f1f',
  padding: 15,
  marginBottom: 15,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#5aff5a',
  shadowColor: '#5aff5a',
  shadowOpacity: 0.5,
  shadowRadius: 8,
  elevation: 4,
},

// --- TurnTrackerOriginal styles ---
turnTracker: {
  marginTop: 10,
  padding: 20,
  backgroundColor: '#1a1a1a',
  borderRadius: 10,
},
turnTitle: {
  fontSize: 20,
  color: '#fff',
  marginBottom: 10,
  textAlign: 'center',
},
iconRow: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: 20,
},
icon: {
  width: 40,
  height: 40,
  marginBottom: 5,
},
iconLabel: {
  color: '#fff',
  textAlign: 'center',
},

// --- TurnTrackerDouble additions ---
greenFootLabel: {
  fontSize: 30,
  color: '#79ff8f',
  textAlign: 'center',
},
convertedNote: {
  fontSize: 12,
  color: '#aaffaa',
  textAlign: 'center',
},
effectsContainer: {
  marginBottom: 20,
},
effectRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 4,
},
effectLabel: {
  color: '#fff',
},

// HomeScreen additions
homeContainer: {
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#121212',
  padding: 20,
  paddingBottom: 60,
},
heroImage: {
  width: 200,
  height: 200,
  resizeMode: 'contain',
  marginBottom: 20,
},

modeButtonClassic: {
  backgroundColor: '#4caf50',
  shadowColor: '#4caf50',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.4,
  shadowRadius: 4,
  elevation: 4,
},

modeButtonDouble: {
  backgroundColor: '#ff5722',
  shadowColor: '#ff5722',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.4,
  shadowRadius: 4,
  elevation: 4,
},

titleBanner: {
  width: 280,
  height: 80,
  resizeMode: 'contain',
  marginBottom: 20,
},

buttonImage: {
  width: 300,
  height: 80,
  marginBottom: 20,
  resizeMode: 'contain',
},

});
