import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { NumberPicker } from "./components/NumberPicker";
import { NamesList } from "./components/NamesList";
import { Results } from "./components/Results";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="NumberPicker" component={NumberPicker} />
        <Stack.Screen name="NamesList" component={NamesList} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  const BigText = styled.Text`
    font-size: 20px;
  `;
  const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
  `;

  return <MyStack />;
}
