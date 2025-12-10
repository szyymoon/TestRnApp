import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDebounce } from '../../hooks/useDebounce';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '../../redux/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { CONATINER } from './styles';

export const MainScreen = () => {
  const [amountToIncrement, setAmountTToIncrement] = useState<string>('');
  const count = useAppSelector(state => state.counter.counterValue);
  const dispatch = useAppDispatch();

  const incrementTrigger = () => {
    dispatch(increment());
  };

  const decrementTrigger = () => {
    dispatch(decrement());
  };

  const resetValue = () => dispatch(reset());

  const debouncedIncrement = useDebounce((value: number) => {
    dispatch(incrementByAmount(value));
  }, 2000);

  const callAmountIncrement = (valueFromInput: string) => {
    setAmountTToIncrement(valueFromInput);
    debouncedIncrement(Number(valueFromInput));
  };

  return (
    <View style={CONATINER}>
      <Text>Siemanko: {count}</Text>
      <Button title="Inkrementuj" onPress={incrementTrigger} />
      <Button title="Dekrementuj" onPress={decrementTrigger} />
      <Button title="Resetuj" onPress={resetValue} />

      <TextInput
        label="O ile zwiększyć counter?"
        value={amountToIncrement}
        onChangeText={callAmountIncrement}
        keyboardType="decimal-pad"
      />
    </View>
  );
};
