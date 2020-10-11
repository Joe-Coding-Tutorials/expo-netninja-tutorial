import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    const animation = Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }
    )
    const animation2 = Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }
    )
    const ani = () => animation.start(animation2.start(ani()));
    ani();
  }, [fadeAnim]);


  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FadeInView style={{ width: 250, height: 50, backgroundColor: 'grey' }}>
        <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
      </FadeInView>
    </View>
  )
}
