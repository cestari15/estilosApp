import React from "react";
import {View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, StatusBar} from "react-native";

interface item {
    id:string;
    nome:string;
    idade:string;
    email:string;
  
  }
  
  const dados: item[] = [
    {id:"1",nome:"Aparecida",idade:"88",email:"aparecida@teste.com"},
    {id:"2",nome:"Maria",idade:"22",email:"maria@teste.com"},
    {id:"3",nome:"João",idade:"90",email:"joao@teste.com"},
  ];
  
  const renderItem = ({item}: {item:item}) =>(
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
            data={dados}
            renderItem={renderItem}
            keyExtractor={(item) =>item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    

    },
    item:{
        backgroundColor: 'yellow',
        padding:20,
        marginVertical: 8,
        marginHorizontal:16,

    },
    header:{
        backgroundColor: 'green',
        alignItems: 'center',
        paddingVertical:50
    },
    headerText: {
        
    }
});
export default FlatListExemple;