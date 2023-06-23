import React from 'react';
import {Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image} from "react-native";
import COLORS from "../theme/colors";
import Icon from "react-native-vector-icons/MaterialIcons"
import Categories from "../components/Categories";
import plants from "../constants/plants";
const width = Dimensions.get('window').width / 2 - 30;

const HomeScreen = ({navigation}) => {
    const Card = ({plant}) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Details', plant)}>
                <View style={style.card}>
                    <View style={{alignItems: 'flex-end'}}>
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: plant.like
                                    ? 'rgba(245, 42, 42,0.2)'
                                    : 'rgba(0,0,0,0.2) ',
                            }}>
                            <Icon
                                name="favorite"
                                size={18}
                                color={plant.like ? COLORS.red : COLORS.dark}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            height: 100,
                            alignItems: 'center',
                        }}>
                        <Image
                            source={plant.img}
                            style={{flex: 1, resizeMode: 'contain'}}
                        />
                    </View>

                    <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
                        {plant.name}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 5,
                        }}>
                        <Text style={{fontSize: 19, fontWeight: 'bold'}}>
                            ${plant.price}
                        </Text>
                        <View
                            style={{
                                height: 25,
                                width: 25,
                                backgroundColor: COLORS.green,
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{fontSize: 18, color: COLORS.white, fontWeight: 'bold'}}>
                                +
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };




    return (
        <SafeAreaView style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: COLORS.white
        }}>
            {/*Header*/}
            <View style={style.header}>
                <View>
                    <Text style={style.welcome}>Welcome to</Text>
                    <Text style={style.shop}> Shop</Text>
                </View>
                <Icon name='shopping-cart' size={28}/>
            </View>

            {/*Search*/}

            <View style={{marginTop:20,flexDirection:'row'}}>
                <View style={style.searchContainer}>
                    <Icon name={'search'} size={24} style={{marginLeft:20}}/>
                    <TextInput placeholder={'Search'} style={style.input}/>
                </View>
                <View style={style.sort}>
                    <Icon name="sort" size={30} color={COLORS.white} />
                </View>
            </View>

        {/*    CategoryList*/}
            <Categories/>
            <FlatList
                columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={plants}
                renderItem={({item}) => {
                    return <Card plant={item} />;
                }}
            />

        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    welcome: {fontSize: 25, fontWeight: 'bold'},
    shop: {fontSize: 38, fontWeight: 'bold', color: COLORS.green},
    searchContainer:{
        backgroundColor:COLORS.light,
        flex:1,
        flexDirection:"row",
        height:50,
        alignItems:'center',
        borderRadius:12
    },
    input:{
      fontSize:18,
        marginHorizontal:8,
        flex:1,
        fontWeight:'bold',
        color:COLORS.dark

    },
    sort:{
        backgroundColor:COLORS.green,
        borderRadius:12,
        marginLeft:10,
        height:50,
        width:50,
        alignItems:"center",
        justifyContent:"center"
    },
    card: {
        height: 225,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    }

})

export default HomeScreen;