import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./Styles";
import Image1 from '../src/assets/images/inter.jpg';

import { useState } from "react";

export default function Index() {

  const Login = () => {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
  };

  return (
    <View
      style={styles.container}
    >
    <Image style={styles.image} source={Image1} />
    <Text style={styles.text}>
     Karen Camara 
     </Text>
     <Text style={styles.title}>
     ***.704.927-**
     </Text>
     <TextInput style={styles.input} placeholder={'Digite sua senha '} placeholderTextColor={'#888'} />
     <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>
          </View>
  );
}

