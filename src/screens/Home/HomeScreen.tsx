import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList, AppStackRoutes } from '@src/router/routes';
import { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { HomeScreenStyles } from './HomeScreen.styles';
import { Button, Input, ListItem } from 'react-native-elements';

interface PhoneNumber {
  number: string;
  rep: number;
}

const numbers: string[] = [
  '0698989898',
  '0998989898',
  '0898989898',
  '0998989898',
  '0398989898',
  '0698989898',
];

const Home = (
  _props: NativeStackScreenProps<AppStackParamList, AppStackRoutes.Home>,
): React.ReactElement | null => {
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[]>([]);
  const [textInput, setTextInput] = useState<string>('');

  useEffect(() => {
    const phoneNumbers = numbers.reduce<PhoneNumber[]>((acc, curr) => {
      const phoneNumber = acc.find((elem) => elem.number === curr);
      if (phoneNumber) {
        phoneNumber.rep += 1;
      } else {
        acc.push({ number: curr, rep: 0 });
      }
      return acc;
    }, []);
    setPhoneNumbers(phoneNumbers);
  }, []);

  const onAdd = useCallback((): void => {
    const phoneNumberIndex = phoneNumbers.findIndex(
      (elem) => elem.number === textInput,
    );
    setPhoneNumbers((prev) => {
      if (phoneNumberIndex !== -1) {
        prev[phoneNumberIndex].rep += 1;
      } else {
        prev.push({ number: textInput, rep: 0 });
      }
      return [...prev];
    });
  }, [phoneNumbers, textInput]);

  return (
    <ScrollView style={HomeScreenStyles.container}>
      <Input
        keyboardType={'number-pad'}
        value={textInput}
        onChangeText={setTextInput}
        placeholder={'Enter a phone number'}
        style={HomeScreenStyles.textInput}
        autoCompleteType={undefined}
      />
      <Button title={'Add'} onPress={onAdd} />
      {phoneNumbers.map((l, i) => (
        <ListItem
          key={i}
          containerStyle={HomeScreenStyles.list}
          bottomDivider
          hasTVPreferredFocus={undefined}
          tvParallaxProperties={undefined}
        >
          <ListItem.Content style={HomeScreenStyles.listItem}>
            <ListItem.Title>{l.number}</ListItem.Title>
            <ListItem.Title>{l.rep}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default Home;
