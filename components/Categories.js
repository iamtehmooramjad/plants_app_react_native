import React from 'react';
import {StyleSheet, TouchableOpacity, View,Text} from "react-native";
import COLORS from "../theme/colors";

const Categories = () => {
    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];
    const [categoryIndex, setCategoryIndex] = React.useState(0);

    return (
        <View style={style.categoryContainer}>
            {categories.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => setCategoryIndex(index)}>
                    <Text
                        style={[
                            style.categoryText,
                            categoryIndex === index && style.categoryTextSelected,
                        ]}>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const style = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
    categoryTextSelected: {
        color: COLORS.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.green,
    }
})
export default Categories;