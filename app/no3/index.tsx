import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  // Fungsi untuk memvalidasi input
  const validateForm = () => {
    const validationErrors = {};
    if (!name.trim()) validationErrors.name = 'Nama tidak boleh kosong';
    if (!phone.trim()) validationErrors.phone = 'Nomor telepon tidak boleh kosong';
    return validationErrors;
  };

  // Fungsi untuk menangani submit
  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Menampilkan error
      return;
    }

    // Jika validasi lolos, tambahkan kontak
    Alert.alert('Berhasil', 'Kontak berhasil ditambahkan!', [{ text: 'OK' }]);
    setName('');
    setPhone('');
    setErrors({});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, errors.name && styles.errorInput]}
        placeholder="Nama"
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      <TextInput
        style={[styles.input, errors.phone && styles.errorInput]}
        placeholder="Nomor Telepon"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

      <Button title="Tambah Kontak" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default AddContactForm;
