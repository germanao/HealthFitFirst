import React from 'react';
import {  TextInputProps, View, Text } from 'react-native';
import { Input } from 'react-native-elements';

type NumericInputProps = {
  name: string;
  label:string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  errors?: any
};

const NumericInput: React.FC<NumericInputProps & TextInputProps > = ({ name, label, value, onChangeText, onBlur, errors, ...rest }) => {
  const handleTextChange = (text: string) => {
    // Remove non-numeric characters using regular expression
    const numericText = text.replace(/[^0-9]/g, '');
    onChangeText(numericText);
  };

  return (
    <View>
        <Text>{label}</Text>
        <Input
          value={value}
          onChangeText={handleTextChange}
          keyboardType="numeric"
          onBlur={onBlur}
          errorStyle={{ color: 'red' }}
          errorMessage={errors[name]?.message}
          {...rest}
         />
      </View>
  );
};

export default NumericInput;