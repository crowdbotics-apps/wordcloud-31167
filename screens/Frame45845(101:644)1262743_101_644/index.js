import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_101_645}>
        <View style={styles.View_101_646}>
          <Text style={styles.Text_101_646}>Yesterday</Text>
        </View>
      </View>
      <View style={styles.View_101_647} />
      <View style={styles.View_101_648}>
        <View style={styles.View_101_649}>
          <Text style={styles.Text_101_649}>Past Week</Text>
        </View>
      </View>
      <View style={styles.View_101_650} />
      <View style={styles.View_101_651}>
        <View style={styles.View_101_652}>
          <Text style={styles.Text_101_652}>Ever</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_101_645: {
    width: wp("112.44979919678715%"),
    minWidth: wp("112.44979919678715%"),
    height: hp("32.94117647058823%"),
    minHeight: hp("32.94117647058823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_101_646: {
    width: wp("25.301204819277107%"),
    minWidth: wp("25.301204819277107%"),
    minHeight: hp("11.76470588235294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.032128514056225%"),
    top: hp("10.588235294117647%"),
    justifyContent: "flex-start"
  },
  Text_101_646: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_647: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.5882352941176471%"),
    minHeight: hp("0.5882352941176471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.94117647058823%"),
    backgroundColor: "rgba(228, 228, 228, 1)"
  },
  View_101_648: {
    width: wp("112.44979919678715%"),
    minWidth: wp("112.44979919678715%"),
    height: hp("32.94117647058823%"),
    minHeight: hp("32.94117647058823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.52941176470588%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_101_649: {
    width: wp("27.710843373493976%"),
    minWidth: wp("27.710843373493976%"),
    minHeight: hp("11.76470588235294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.032128514056225%"),
    top: hp("10.588235294117652%"),
    justifyContent: "flex-start"
  },
  Text_101_649: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_650: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.5882352941176471%"),
    minHeight: hp("0.5882352941176471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.47058823529412%"),
    backgroundColor: "rgba(228, 228, 228, 1)"
  },
  View_101_651: {
    width: wp("112.44979919678715%"),
    minWidth: wp("112.44979919678715%"),
    height: hp("32.94117647058823%"),
    minHeight: hp("32.94117647058823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67.05882352941175%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_101_652: {
    width: wp("11.646586345381527%"),
    minWidth: wp("11.646586345381527%"),
    minHeight: hp("11.76470588235294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.032128514056225%"),
    top: hp("10.588235294117666%"),
    justifyContent: "flex-start"
  },
  Text_101_652: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
