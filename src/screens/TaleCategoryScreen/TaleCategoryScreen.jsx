import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { useEffect } from "react";
import TaleItem from "../../components/ProductsItem/index";

import {
  filteredProduct,
  selectedProduct,
} from "../../store/actions/products.action";

import { useSelector, useDispatch } from "react-redux";

import BackgroundAnimation from "../../components/imgBackground/Index";

const TaleCategoryScreen = ({ navigation, route }) => {
  const filteredProducts = useSelector(
    (state) => state.products.filteredProduct
  );
  const categorySelected = useSelector((state) => state.categories.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filteredProduct(categorySelected.id));
  }, []);

  const handleSelectedProduct = (item) => {
    dispatch(selectedProduct(item.id));
    navigation.navigate("Details", {
      name: item.name,
    });
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <TaleItem item={item} onSelected={handleSelectedProduct} />
    </View>
  );

  return (
    <View style={styles.container}>
      <BackgroundAnimation />
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default TaleCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignIgems:"center",
    marginLeft: 15
  },
  productItem: {
    margin: 15,
    height: 250,
    width: 150,
  },
});
