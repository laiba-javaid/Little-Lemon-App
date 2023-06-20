import * as React from 'react';
import{ View, StyleSheet } from'react-native';

import LittleLemonHeader from './LittleLemonHeader';
import LittleLemonFooter from './LittleLemonFooter';
//import MenuItems from './MenuItems';
import WelcomeScreen from "./WelcomeScreen";


export default function App() {
return (
  <>
<View style={styles.container}>
        <LittleLemonHeader />
        <MenuItems />
        <WelcomeScreen/>
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
 </>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});










// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={{ padding: 40, fontsize: 30, color: 'black' }}>Welcome to the Little Lemon App!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#495E57',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
