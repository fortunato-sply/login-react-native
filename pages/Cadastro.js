import { useContext, useState } from 'react';
import { Button, View, StyleSheet, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { UserContext } from '../context/User';

export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [sexo, setSexo] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const { addUser } = useContext(UserContext);

    const onHandleAddUser = async () => {
        const user = {
            name: nome,
            age: idade,
            genre: sexo,
            password: password,
            email: email
        }

        await addUser(user);
        navigation.navigate("login");
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Poppins' }}>CADASTRO</Text>
            <View style={styles.inputs}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder='Nome'
                    onChange={ (e) => setNome(e.target.value) }
                />
                <View style={{ flex: 1, flexDirection: 'row', gap: 10, width: '100%', maxHeight: '4rem'}}>
                    <TextInput
                        style={styles.input50}
                        placeholderTextColor="#fff"
                        placeholder='Idade'
                        textContentType='number'
                        onChange={ (e) => setIdade(e.target.value) }
                    />
                    <TextInput
                        style={styles.input50}
                        placeholderTextColor="#fff"
                        placeholder='Sexo'
                        onChange={ (e) => setSexo(e.target.value) }
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder='Email'
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    secureTextEntry
                    placeholder='Senha'
                    onChange={ (e) => setPassword(e.target.value) }
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    secureTextEntry
                    placeholder='Confirmar senha'
                />
            </View>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={onHandleAddUser}
            >
                <Text
                    style={{
                        fontFamily: 'Poppins',
                        fontWeight: '600',
                        fontSize: '1.24rem'
                    }}
                >
                    Cadastrar
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
                    onPress={() => navigation.navigate("login")}
                >
                    Cancelar
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
        maxHeight: '500px',
        flex: 1,
        flexDirection: 'column',
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
    input50: {
        width: "50%",
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
        marginTop: '1.5rem'
    },
});
