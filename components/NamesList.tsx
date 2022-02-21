import { FC, MutableRefObject, useRef, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

type ParamList = {
  NamesList: {
    number: number;
  };
};

interface ButtonProps {
  up?: boolean;
}

const Container = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Header = styled.Text`
  margin-top: 80px;
  font-size: 28px;
  font-weight: 700;
`;

const HeaderContainer = styled.View`
  flex: 1;
`;

const FieldContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const ButtonContainer = styled.View``;
const ConfirmButton = styled.Button`
  padding: 4px;
`;
const NameField = styled.TextInput`
  width: 250px;
  height: 40px;
  border: 2px;
  padding: 5px 15px;
  border-radius: 15px;
`;
const WarningText = styled.Text`
  font-size: 14px;
`;

const AddPlayerContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const AddPlayerButton = styled.Button`
  padding: 4px;
`;

const ListContainer = styled.View`
  flex: 1;
`;
const ListText = styled.Text`
  font-size: 30px;
`;

export const NamesList = () => {
  const inputRef = useRef<typeof NameField>(null);
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, "NamesList">>();
  const number = route.params.number; //@ts-ignore
  const [displayWarning, setDisplayWarning] = useState<boolean>(false);
  const [namesList, setNamesList] = useState<string[]>([]);
  const [currentName, setCurrentName] = useState<string>("");
  return (
    <Container>
      <HeaderContainer>
        <Header>Type in names</Header>
      </HeaderContainer>

      <FieldContainer>
        <NameField
          placeholder="James Doe"
          onChangeText={(value: string) => setCurrentName(value)}
          ref={inputRef}
        ></NameField>

        <AddPlayerButton
          title="Add"
          onPress={() => {
            if (currentName.length === 0) {
              setDisplayWarning(true);
              return;
            }
            setNamesList([...namesList, currentName]);
            inputRef?.current?.clear();
          }}
        />
      </FieldContainer>
      <ListContainer>
        <FlatList
          data={namesList.map((name) => {
            return { name };
          })}
          renderItem={({ item }) => <ListText>{item.name}</ListText>}
        ></FlatList>
      </ListContainer>
      {displayWarning && (
        <WarningText>You must enter a valid name!</WarningText>
      )}

      <ButtonContainer>
        <ConfirmButton
          title="Confirm"
          onPress={() => {
            alert(
              namesList.map((name) => {
                return { name: name };
              })
            );
            //navigation.navigate("Results" as never, { number } as never);
          }}
        />
      </ButtonContainer>
    </Container>
  );
};
