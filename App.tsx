import React from 'react';
import { View,Text } from "react-native";
import Home from './component/Home';

const App:React.FC = () => {
    return(
      <View>
        <Text>Hello I'm App comp with typescript</Text>
        <Home />
      </View>
    )
}

export default App
