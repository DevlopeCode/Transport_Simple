import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {s, vs} from 'react-native-size-matters';

const Input = () => {
  return (
    <TextInput
      style={styles.textContainer}
      placeholder="Text"
    />
  );
};

export default Input;

const styles = StyleSheet.create({
    textContainer:{
        height: vs(50),
        backgroundColor: 'white',
        paddingHorizontal: s(40),
        borderRadius: 90,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        fontFamily: 'Poppins-Bold',
        marginHorizontal: s(30),
      }
});
