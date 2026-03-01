import React from 'react';
import { View,Text } from "react-native";
import Home from './component/Home';
import VariableWithTS from './component/VariableWithTS';

const App:React.FC = () => {
    return(
      <View>
        {/* <Text>Hello I'm App comp with typescript</Text>
        <Home /> */}
        <VariableWithTS />
      </View>
    )
}

export default App
