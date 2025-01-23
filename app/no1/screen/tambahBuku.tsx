// screens/TambahBuku.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TambahBuku = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Form Tambah Buku</Text>
      <Button title="Kembali ke Daftar Buku" onPress={() => navigation.goBack()} />
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

export default TambahBuku;
