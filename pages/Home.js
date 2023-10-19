import { useContext } from 'react';
import { Button, View, StyleSheet, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { UserContext } from '../context/User';

export default function Home({ navigation }) {
    const { users } = useContext(UserContext);

    const Item = (params) => (
        <View style={styles.card}>
            {params.user.name} - {params.user.age}
        </View>
    )
    
    const prubt = () => {
        console.log(users)
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={(user) => <Item user={user} />}
                keyExtractor={user => user.id}
            />
            {prubt()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: '#333',
        alignItems: 'center',
        color: '#fff',
        padding: 36,
    },
    card: {

    }
});
