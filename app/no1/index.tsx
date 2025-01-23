// App.tsx
import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DaftarBuku from './screen/daftarBuku';
import TambahBuku from './screen/tambahBuku';

const Stack = createStackNavigator();

const Perpus = () => {
  return (
    <NavigationIndependentTree>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="DaftarBuku">
                <Stack.Screen name="DaftarBuku" component={DaftarBuku} options={{ title: 'Daftar Buku' }} />
                <Stack.Screen name="TambahBuku" component={TambahBuku} options={{ title: 'Tambah Buku' }} />
            </Stack.Navigator>
        </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default Perpus;
