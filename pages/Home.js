import { useContext } from 'react';
import { Button, View, StyleSheet, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { UserContext } from '../context/User';

export default function Home({ navigation }) {
    const { users } = useContext(UserContext);
    
    const renderUsers = () => {
        return users.map((u) => {
            return (
                <View>
                    {u.nome} - {u.idade}
                </View>
            )
        })
    }

    return (
        <>
            {renderUsers()}
        </>
    )
}