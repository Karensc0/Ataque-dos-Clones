import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    container2: {
        flexGrow: 1,
        backgroundColor: 'white',
        paddingTop: 60,
        paddingHorizontal: 20
    },
    title: {
        color: '#0a0a09',
        fontSize: 15,
        fontWeight: 'bold',
        margin:20
    },
    text: {
        color: '#474745',
        fontSize: 12,
        fontWeight: 'bold'
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 40,
    },
    image2: {
        width: 100,
        height: 100,
        marginBottom: 0,
    },
    image3: {
      justifyContent: 'center',
      width: 350,
      height: 180,
      margin: 10
  },
    input: {
            width: '100%',
            height: 50,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 20,
    }, 
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF6C00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      forgotPassword: {
        color: '#FF6C00',
        fontSize: 14,
        textDecorationLine: 'underline',
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
      },
      card: {
        width: '100%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
      },
      cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      cardText: {
        fontSize: 18,
        marginBottom: 10,
      },
      button2: {
        backgroundColor: '#FF6C00',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginHorizontal: 10,
      },
      buttonText2: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
      },
});


