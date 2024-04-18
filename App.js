import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

// Importando as imagens da pasta assets
import mountainImage from './assets/mountain.jpeg';
import beachImage from './assets/beach.jpeg';
import birdImage from './assets/bird.jpeg';
import foodImage from './assets/food.jpeg';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [imageSource, setImageSource] = useState('');

  const handleSearch = (keyword, image) => {
    setInputValue(keyword);
    setDisplayText(`${keyword} Pictures`);
    setImageSource(image);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SnapShot</Text>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#999"
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
      <View style={styles.labels}>
        <TouchableOpacity style={styles.button} onPress={() => handleSearch('Mountain', mountainImage)}>
          <Text style={styles.label}>Mountain</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleSearch('Beaches', beachImage)}>
          <Text style={styles.label}>Beaches</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleSearch('Birds', birdImage)}>
          <Text style={styles.label}>Birds</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleSearch('Food', foodImage)}>
          <Text style={styles.label}>Food</Text>
        </TouchableOpacity>
      </View>
      {displayText ? <Text style={styles.displayText}>{displayText}</Text> : null}
      {imageSource ? <Image source={imageSource} style={styles.image} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  displayText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});