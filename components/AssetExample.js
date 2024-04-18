import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const calculateSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const calculateSubtraction = () => {
    const subtraction = parseFloat(num1) - parseFloat(num2);
    setResult(subtraction);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNum1(text)}
        value={num1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setNum2(text)}
        value={num2}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={calculateSum}>
        <Text style={styles.buttonText}>Sum</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={calculateSubtraction}>
        <Text style={styles.buttonText}>Subtraction</Text>
      </TouchableOpacity>
      <Text style={styles.result}>Result: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default Calculator;
