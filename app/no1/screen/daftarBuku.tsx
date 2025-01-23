// screens/DaftarBuku.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DaftarBuku = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Daftar Buku</Text>
      <Button title="Tambah Buku" onPress={() => navigation.navigate('TambahBuku')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DaftarBuku;
