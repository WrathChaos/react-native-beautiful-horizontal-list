import React, { Component } from "react";
import { Text, View, Image, FlatList } from "react-native";
/**
 * ? Local Imports
 */
import styles, {
  _iconContainer,
  _unitTextStyle,
} from "./BeautifulHorizontalList.style";

export default class BeautifulHorizontalList extends Component {
  renderItem = (data) => {
    const { item, index } = data;
    const { imageSource, title, value, unit, primaryColor } = item;
    const {
      TextComponent = Text,
      ImageComponent = Image,
      itemContainerStyle,
      titleTextStyle,
      valueTextStyle,
      unitTextStyle,
    } = this.props;
    return (
      <View
        key={item.title + index}
        style={[styles.itemContainer, itemContainerStyle]}
      >
        <TextComponent style={[styles.titleTextStyle, titleTextStyle]}>
          {title}
        </TextComponent>
        <View style={styles.imageContainer}>
          <View style={_iconContainer(primaryColor)}>
            <ImageComponent source={imageSource} style={styles.iconStyle} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <TextComponent style={[styles.valueTextStyle, valueTextStyle]}>
            {value}
          </TextComponent>
          <View style={styles.unitTextContainer}>
            <TextComponent
              style={[_unitTextStyle(primaryColor), unitTextStyle]}
            >
              {unit}
            </TextComponent>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          data={data}
          renderItem={this.renderItem}
          contentInset={styles.contentInsetStyle}
          contentContainerStyle={styles.contentContainerStyle}
          {...this.props}
        />
      </View>
    );
  }
}
