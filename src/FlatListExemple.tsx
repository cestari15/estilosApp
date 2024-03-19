import React from "react";
import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, StatusBar, Image } from "react-native";

interface item {
    id: string;
    nome: string;
    idade: string;
    email: string;

}

const dados: item[] = [
    { id: "1", nome: "Aparecida", idade: "88", email: "aparecida@teste.com" },
    { id: "2", nome: "Maria", idade: "22", email: "maria@teste.com" },
    { id: "3", nome: "João", idade: "90", email: "joao@teste.com" },
    { id: "4", nome: "Aparecida", idade: "88", email: "aparecida@teste.com" },
    { id: "5", nome: "Maria", idade: "22", email: "maria@teste.com" },
    { id: "6", nome: "João", idade: "90", email: "joao@teste.com" },
    { id: "7", nome: "Aparecida", idade: "88", email: "aparecida@teste.com" },
    { id: "8", nome: "Maria", idade: "22", email: "maria@teste.com" },
    { id: "9", nome: "João", idade: "90", email: "joao@teste.com" },
    { id: "10", nome: "Aparecida", idade: "88", email: "aparecida@teste.com" },
    { id: "11", nome: "Maria", idade: "22", email: "maria@teste.com" },
    { id: "12", nome: "João", idade: "90", email: "joao@teste.com" },
];

const renderItem = ({ item }: { item: item }) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.idade}</Text>
        <Text>{item.email}</Text>
    </TouchableOpacity>
);
function FlatListExemple(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="green" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>Flat List</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/images/home.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/orders.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/profile.png')} style={styles.footerIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,

    },
    header: {
        backgroundColor: 'green',
        alignItems: 'center',
        paddingVertical: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
        borderTopWidth:0.2,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        height:30,
        width:30,
        marginRight:25,
        marginLeft:20
    }
});
export default FlatListExemple;