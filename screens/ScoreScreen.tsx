import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { db } from '../config/config';

const ScoreScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const dbRef = ref(db, 'puntuaciones');
      onValue(dbRef, (snapshot) => {
        const dataFromDB = snapshot.val();
        if (dataFromDB) {
          const dataArray = Object.keys(dataFromDB).map(key => ({ id: key, ...dataFromDB[key] }));
          setData(dataArray);
          setLoading(false);
        } else {
          setData([]);
          setLoading(false);
        }
      });
    };

    fetchData();

    return () => {
      // Cleanup function
    };
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data.map(item => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.nick}>Nick: {item.nick}</Text>
          <Text style={styles.score}>Score: {item.score}</Text>
          <Text style={styles.timestamp}>Timestamp: {new Date(item.timestamp).toLocaleString()}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  nick: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  score: {
    fontSize: 16,
    color: '#333',
  },
  timestamp: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
  },
});

export default ScoreScreen;
