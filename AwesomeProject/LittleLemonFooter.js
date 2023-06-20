import * as React from 'react';
import { View, Text } from 'react-native';
export default function LittleLemonFooter()
{
    return (
        <View style={{ flex: 0.1, backgroundColor: '#EE9972' }}>
          <Text
            style={{ padding: 10, fontSize: 20, color: 'black', textAlign: 'center' }}>
            All rights reserved by Little Lemon,2023
            
          </Text>
        </View>
      );
}