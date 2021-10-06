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
      <View style={styles.View_101_654}>
        <View style={styles.View_101_655}>
          <Text style={styles.Text_101_655}>Yesterday</Text>
        </View>
      </View>
      <View style={styles.View_101_656} />
      <View style={styles.View_101_657}>
        <View style={styles.View_101_658}>
          <Text style={styles.Text_101_658}>Past Week</Text>
        </View>
      </View>
      <View style={styles.View_101_659} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_101_654: {
    width: wp("112.44979919678715%"),
    minWidth: wp("112.44979919678715%"),
    height: hp("49.122807017543856%"),
    minHeight: hp("49.122807017543856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_101_655: {
    width: wp("25.301204819277107%"),
    minWidth: wp("25.301204819277107%"),
    minHeight: hp("17.543859649122805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.032128514056225%"),
    top: hp("15.789473684210526%"),
    justifyContent: "flex-start"
  },
  Text_101_655: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_656: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.8771929824561403%"),
    minHeight: hp("0.8771929824561403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.122807017543856%"),
    backgroundColor: "rgba(228, 228, 228, 1)"
  },
  View_101_657: {
    width: wp("112.44979919678715%"),
    minWidth: wp("112.44979919678715%"),
    height: hp("49.122807017543856%"),
    minHeight: hp("49.122807017543856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_101_658: {
    width: wp("27.710843373493976%"),
    minWidth: wp("27.710843373493976%"),
    minHeight: hp("17.543859649122805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.032128514056225%"),
    top: hp("15.789473684210535%"),
    justifyContent: "flex-start"
  },
  Text_101_658: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_659: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.8771929824561403%"),
    minHeight: hp("0.8771929824561403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.12280701754386%"),
    backgroundColor: "rgba(228, 228, 228, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
