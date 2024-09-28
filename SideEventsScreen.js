// screens/SideEventsScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockSideEvents = [
  {
    id: '1',
    title: 'Networking Breakfast',
    time: '08:00 AM - 09:00 AM',
    location: 'Main Hall',
  },
  {
    id: '2',
    title: 'Bitcoin Mining Workshop',
    time: '12:00 PM - 01:30 PM',
    location: 'Room 101',
  },
  {
    id: '3',
    title: 'Crypto Art Exhibition',
    time: '03:00 PM - 05:00 PM',
    location: 'Gallery Space',
  },
  {
    id: '4',
    title: 'Closing Cocktail Party',
    time: '06:00 PM - 08:00 PM',
    location: 'Rooftop Terrace',
  },
];

const SideEventItem = ({ item }) => (
  <View style={styles.eventItem}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.time}>{item.time}</Text>
    <Text style={styles.location}>{item.location}</Text>
  </View>
);

const SideEventsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockSideEvents}
        renderItem={({ item }) => <SideEventItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  eventItem: {
    backgroundColor: '#1A1A1A',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    color: '#F7931A',
    fontSize: 16,
    marginTop: 5,
  },
  location: {
    color: '#CCCCCC',
    fontSize: 14,
    marginTop: 5,
  },
});

export default SideEventsScreen;
// End of screens/SideEventsScreen.js