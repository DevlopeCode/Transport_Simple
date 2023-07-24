import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';
export const CButton = ({
  colors = '#868BFE',
  title = 'Create',
  pading = 10,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[style.btnContainer, {backgroundColor: colors}]}>
      <Text
        style={style.btnText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    height: vs(50),

    marginHorizontal: 30,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText:
  { 
    color: '#FFFFFF', 
    fontFamily: 'Poppins-Bold', 
    fontSize: s(25)}
});
