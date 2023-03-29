import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import apiBanks from './api/banks';
import IBank from './types/bank.type';
import {Item, Container} from './components';

const App = (): JSX.Element => {
  const [banks, setBanks] = useState<IBank[]>([]);

  const getAllBanksFromApi = () => {
    apiBanks
      .getAllFromApi()
      .then((response: any) => {
        setBanks(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllBanksFromApi();
  }, []);

  return (
    <Container>
      {banks && banks.length ? (
        banks.map(bank => {
          return (
            <View key={bank.bankName}>
              <Item
                title={bank.bankName}
                description={bank.description}
                age={bank.age}
              />
            </View>
          );
        })
      ) : (
        <View>
          <Text>Empty</Text>
        </View>
      )}
    </Container>
  );
};

export default App;
