import React, { useRef } from 'react';
import { Animated, Text, View } from 'react-native';

export default () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const transAnim = useRef(new Animated.Value(0)).current;

  Animated.loop(
    Animated.parallel([
      Animated.sequence([
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          fadeAnim,
          {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }
        )
      ]),

      Animated.sequence([
        Animated.timing(
          transAnim,
          {
            toValue: 100,
            duration: 1000,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          transAnim,
          {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }
        )
      ]),
    ]),
    {
      useNativeDriver: true,
      iterations: 3,
    }
  ).start();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: transAnim }] }}>
        <Text style={{ fontSize: 28, textAlign: 'center'}}>
          Fading in
        </Text>
      </Animated.View >
    </View>
  );
}