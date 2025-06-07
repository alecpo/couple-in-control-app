import React from 'react';
import { View, Text } from 'react-native';
import Container from '../components/Container';

export default function PiggyBanks() {
  return (
    <Container>
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-bold text-blue-500 bg-gray-100 p-4 rounded-lg">
          Cofrinhos
        </Text>
      </View>
    </Container>
  );
} 