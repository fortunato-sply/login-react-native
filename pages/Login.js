import { useContext, useState } from 'react';
import { Button, View, StyleSheet, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { UserContext } from '../context/User';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { userExists } = useContext(UserContext);

    const [error, setError] = useState(false);
    const onHandleLogin = () => {
        const user = {
            email: email,
            password: password
        }

        if(userExists(user))
            navigation.navigate("home");
        else
            setError(true);
    }
    
    const renderError = () => {
        if(error)
            return <Text style={{ fontSize: '1rem', color: 'red' }}>Usuário ou senha incorretos.</Text>
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Poppins' }}>LOGIN</Text>
            <View style={styles.inputs}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder='Email'
                    onChange={ (e) => { setEmail(e.target.value); setError(false) }}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    secureTextEntry
                    placeholder='Senha'
                    onChange={ (e) => { setPassword(e.target.value); setError(false) }}
                />
            </View>
            {renderError()}
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={onHandleLogin}
            >
                <Text
                    style={{
                        fontFamily: 'Poppins',
                        fontWeight: '600',
                        fontSize: '1.24rem'
                    }}
                >
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text
                    style={{
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        fontSize: '1rem',
                        color: '#fff',
                        marginTop: '1rem'
                    }}
                    onPress={() => navigation.navigate("cadastro")}
                >
                    Cadastre-se
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#333',
        alignItems: 'center',
        color: '#fff',
        padding: 36,
    },
    inputs: {
        width: "80%",
        maxHeight: '12rem',
        flex: 1,
        justifyContent: 'center',
        gap: '20px',
        marginTop: '5rem',
    },
    input: {
        width: "100%",
        backgroundColor: "#080708",
        color: "#fff",
        fontFamily: 'Poppins',
        height: '4rem',
        borderRadius: '12px',
        paddingLeft: '15px',
        fontSize: '1rem'
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#20DF53',
        borderRadius: '12px',
        width: '180px',
        maxHeight: '50px',
        marginTop: '20rem'
    },
});
