// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://picsum.photos/200/200' }}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.jobTitle}>Blockchain Developer</Text>
        <Text style={styles.company}>Crypto Innovations Inc.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jobTitle: {
    color: '#F7931A',
    fontSize: 18,
    marginBottom: 5,
  },
  company: {
    color: 'gray',
    fontSize: 16,
  },
});

export default ProfileScreen;
// End of screens/ProfileScreen.js