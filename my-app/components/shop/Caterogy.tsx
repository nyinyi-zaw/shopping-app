import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

interface Props {
  id: string;
  name: string;
  image: any;
  onSelect: (id: string) => void,
  select:string,
 
}


const Caterogy = ({ id, name, image,select,onSelect }: Props) => {
  return (
    <Pressable style={styles.container}onPress={()=>onSelect(id)}>
      <Image
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
        style={[styles.image,select===id&&styles.select]}
      />
      <Text style={styles.caption}>{name}</Text>
    </Pressable>
  );
};

export default Caterogy;

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
       marginRight:30,


    },
  image: {
    width:56,
    height:56,
    marginBottom:7,
  
  },
  caption:{
    fontSize:12,
    fontWeight:"600",
    
  },
  select:{
    borderColor:"orange",
    borderWidth:2,
    borderRadius:28,

  },
});
