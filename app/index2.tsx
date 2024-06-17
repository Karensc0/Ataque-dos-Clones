import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from "./Styles";
import Image1 from '../src/assets/images/inter.jpg';
import Image3 from '../src/assets/images/card.jpeg';

const Dashboard = () => {
  return (
    <ScrollView contentContainerStyle={styles.container2}>
       <Image style={styles.image2} source={Image1} />
       <Text style={styles.cardTitle}>Olá, Karen</Text>

      <Text style={styles.sectionTitle}>Conta Digital</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Saldo Disponível</Text>
        <Text style={styles.cardText}>R$ 2.500,00</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver extrato</Text>
          </TouchableOpacity>
      </View>
      
      <Image style={styles.image3} source={Image3} />
      <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Eu quero</Text>
        </TouchableOpacity>

      <Text style={styles.sectionTitle}>Cartão de Crédito</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Limite Disponível</Text>
        <Text style={styles.cardText}>R$ 5.000,00</Text>
        <Text style={styles.cardTitle}>Fatura Atual</Text>
        <Text style={styles.cardText}>R$ 1.200,00</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver fatura</Text>
        </TouchableOpacity>
      </View>
    
    </ScrollView>
  );
};

export default Dashboard;
