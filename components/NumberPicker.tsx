import { FC, useState } from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

interface ButtonProps {
  up?: boolean;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Header = styled.Text``;
const HeaderContainer = styled.View``;
const PickerContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
const NumberText = styled.Text`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;
const ButtonContainer = styled.View``;
const ConfirmButton = styled.Button`
  flex: 1;
  padding: 4px;
`;

const ArrowButton = styled.Image<ButtonProps>`
  width: 65px;
  height: 65px;
  transform: ${(props: { up: any }) => (props.up ? "" : `scaleY(-1)`)};
`;
const WarningText = styled.Text`
  font-size: 14;
  color: red;
`;

export const NumberPicker = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState(2);
  const [displayWarning, setDisplayWarning] = useState(false);

  return (
    <Container>
      <HeaderContainer>
        <Header>Select the number of teams🚀</Header>
      </HeaderContainer>
      <PickerContainer>
        <Pressable
          onPress={() => {
            setNumber(number + 1);
            setDisplayWarning(false);
          }}
        >
          <ArrowButton up={true} source={require("../assets/arrow.png")} />
        </Pressable>
        <NumberText>{number}</NumberText>
        <Pressable
          onPress={() => {
            if (number <= 2) {
              setDisplayWarning(true);
              return;
            }
            setNumber(number - 1);
          }}
        >
          <ArrowButton source={require("../assets/arrow.png")} />
        </Pressable>
      </PickerContainer>

      {displayWarning && (
        <WarningText>There can be no fewer that two teams!</WarningText>
      )}
      <ButtonContainer>
        <ConfirmButton
          title="Confirm"
          onPress={() => {
            navigation.navigate("NamesList" as never, { number } as never);
          }}
        />
      </ButtonContainer>
    </Container>
  );
};
