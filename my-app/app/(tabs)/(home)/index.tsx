import { Text, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "expo-router";
import { Image } from "expo-image";
import { FlashList } from "@shopify/flash-list";

import Cart from "@/components/shop/Cart";
import Title from "@/components/shop/Title";
import Caterogy from "@/components/shop/Caterogy";
import { categories } from "@/data";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [select, setSelect] = useState("uuid1");

  const onSelectHander = (id: string) => {
    setSelect(id);
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable>
          <Image
            source={require("@/assets/images/n.png")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
            style={styles.logo}
          />
        </Pressable>
        <Pressable>
          <Cart />
        </Pressable>
      </View>
      <ScrollView>
        <Image
          source={require("@/assets/images/banner6.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
          style={styles.banner}
        />
        <View style={{ paddingLeft: 20 }}>
          <Title title="Shop By Caterogy" actionText="SeeAll" />
          <FlashList
            data={categories}
            extraData={select}
            renderItem={({ item }) => (
              <Caterogy {...item} onSelect={onSelectHander} select={select} />
            )}
            estimatedItemSize={80}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <Title title="Recommended For You" actionText="SeeAll" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: `white`,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 15,
    // marginTop: 10,
  },
  logo: {
    width: 50,
    height: 25,
  },
  banner: {
    width: "100%",
    aspectRatio: 20 / 9,
  },
});
