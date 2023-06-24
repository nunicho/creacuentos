import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CategoriesItem from "../../components/CategoriesItem";
import React from "react";
import { selectedCategory } from "../../store/actions/category.action";

import BackgroundAnimation from "../../components/imgBackground/Index";
import MainTitle from "../../components/MainTitle/Index";
import styles from "./Styles";


const TaleMainScreen = ({ navigation }) => {

  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();


  const handleSelectedCategory = item => {
        dispatch(selectedCategory(item.id));
    navigation.navigate("ProductsScreen", {
        name: item.title,
    });
  };

  const renderCategoriesItem = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory} />
    </View>
  );

  return (
    <View style={styles.container}>
      <BackgroundAnimation />
      <View style={styles.container}>
        <MainTitle />
        <View>
          <FlatList
            data={categories}
            renderItem={renderCategoriesItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default TaleMainScreen;

