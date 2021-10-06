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
      <View style={styles.View_104_1398}>
        <View style={styles.View_104_1399}>
          <View style={styles.View_104_1400}>
            <View style={styles.View_104_1401} />
            <View style={styles.View_104_1402}>
              <View style={styles.View_104_1403}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bff5/abbf/90f9536fb00253aac67c7ad707235bd2"
                  }}
                  style={styles.ImageBackground_104_1404}
                />
              </View>
              <View style={styles.View_104_1407}>
                <Text style={styles.Text_104_1407}>Saved</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ecb/8d98/715adac4742bce9ae57028af6ae0eb31"
            }}
            style={styles.ImageBackground_104_1408}
          />
          <View style={styles.View_104_1410}>
            <View style={styles.View_104_1411}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f474/aba1/a173b843a8d0cb74c98646afdab56b68"
                }}
                style={styles.ImageBackground_104_1412}
              />
              <View style={styles.View_104_1414} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
                }}
                style={styles.ImageBackground_104_1415}
              />
              <View style={styles.View_104_1416} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7cf/13ec/0890db4da0ef0cb458a1c641a263716e"
                }}
                style={styles.ImageBackground_104_1417}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f54/dd7d/bc1fcc6a99a3ce14a95e3f6920b8711a"
                }}
                style={styles.ImageBackground_104_1418}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6f0/5810/994254fcb2d985947452c9ec352d5e31"
                }}
                style={styles.ImageBackground_104_1419}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f619/e99c/d0c937663bc361d9b7ad318491e7e873"
                }}
                style={styles.ImageBackground_104_1420}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee66/9519/1eecd46c1e7918026f207952e5b5c54c"
                }}
                style={styles.ImageBackground_104_1421}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff82/f6a4/0eb8833e2617203079348763eff52534"
                }}
                style={styles.ImageBackground_104_1422}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a20/1b0c/863f0f25fe82a37056b3d551d5eb6e2d"
                }}
                style={styles.ImageBackground_104_1423}
              />
              <View style={styles.View_104_1424}>
                <Text style={styles.Text_104_1424}>9:41</Text>
              </View>
              <View style={styles.View_104_1425}>
                <View style={styles.View_104_1426}>
                  <Text style={styles.Text_104_1426}>􀎡</Text>
                </View>
                <View style={styles.View_104_1427}>
                  <Text style={styles.Text_104_1427}>cyberdive.co</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd3e/954a/a8622cd066ee9d09781f13eea3ff655f"
          }}
          style={styles.ImageBackground_104_1428}
        />
      </View>
      <View style={styles.View_104_1430}>
        <View style={styles.View_104_1431}>
          <View style={styles.View_104_1432}>
            <Text style={styles.Text_104_1432}>
              Your Saved items from today
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d9d/35fd/91477e761948af61e61b7d7208363194"
            }}
            style={styles.ImageBackground_104_1433}
          />
          <View style={styles.View_104_1434}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b780/db58/29a52973574e3e72c45071d20eff9589"
              }}
              style={styles.ImageBackground_104_1435}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_104_1437}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_833"))
          }
        >
          <View style={styles.View_104_1438} />
          <View style={styles.View_104_1439}>
            <Text style={styles.Text_104_1439}>M</Text>
          </View>
          <View style={styles.View_104_1440}>
            <Text style={styles.Text_104_1440}>Sarah</Text>
          </View>
          <View style={styles.View_104_1441}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2b2/0f88/052318d0d9a70fd4c65dde75516224aa"
              }}
              style={styles.ImageBackground_104_1442}
            />
          </View>
          <View style={styles.View_104_1444}>
            <View style={styles.View_104_1445}>
              <View style={styles.View_104_1446} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72cd/15bd/6a22b7c6a135f7fa1a832c0e206bf799"
                }}
                style={styles.ImageBackground_104_1447}
              />
            </View>
            <View style={styles.View_104_1448}>
              <View style={styles.View_104_1449}>
                <View style={styles.View_104_1450} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8d3/2659/6b676858d6a3c537692aef311159ea61"
                  }}
                  style={styles.ImageBackground_104_1451}
                />
              </View>
            </View>
            <View style={styles.View_104_1456}>
              <View style={styles.View_104_1457}>
                <View style={styles.View_104_1458}>
                  <View style={styles.View_104_1459} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9055/a5f1/2dc56f59a1480fecff22cbac61e21c64"
                    }}
                    style={styles.ImageBackground_104_1460}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a063/cdfe/7b53f7ac81b97cac343183157e07cd34"
            }}
            style={styles.ImageBackground_104_1461}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/137f/b324/7614946ba5531d4c277ba4baeda1bce2"
            }}
            style={styles.ImageBackground_104_1462}
          />
          <View style={styles.View_104_1463}>
            <View style={styles.View_104_1464}>
              <View style={styles.View_104_1465}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d055/7bb7/6bb3246ad9d0d5c431e79426d962664a"
                  }}
                  style={styles.ImageBackground_104_1466}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8687/e835/d536a89ade807a712574e0a74eabb7d8"
                  }}
                  style={styles.ImageBackground_104_1467}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_104_1468}>
          <View style={styles.View_104_1469} />
          <View style={styles.View_104_1470}>
            <Text style={styles.Text_104_1470}>M</Text>
          </View>
          <View style={styles.View_104_1471}>
            <Text style={styles.Text_104_1471}>Trevor</Text>
          </View>
          <View style={styles.View_104_1472}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2b2/0f88/052318d0d9a70fd4c65dde75516224aa"
              }}
              style={styles.ImageBackground_104_1473}
            />
          </View>
          <View style={styles.View_104_1475}>
            <View style={styles.View_104_1476}>
              <View style={styles.View_104_1477} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/719e/f2a9/a47fb7350302343a2280e86cb838db8d"
                }}
                style={styles.ImageBackground_104_1478}
              />
            </View>
            <View style={styles.View_104_1479}>
              <View style={styles.View_104_1480} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3f1/8619/58686d3bbc1014d6ffbcc308dad15b1f"
                }}
                style={styles.ImageBackground_104_1481}
              />
            </View>
            <View style={styles.View_104_1486}>
              <View style={styles.View_104_1487}>
                <View style={styles.View_104_1488} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef8/bcba/7944a37fb20c0ed438725ff5496292bb"
                  }}
                  style={styles.ImageBackground_104_1489}
                />
              </View>
            </View>
            <View style={styles.View_104_1490}>
              <View style={styles.View_104_1491}>
                <View style={styles.View_104_1492} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8ab/bc2e/0056dc64774cb2050d333efa176cf3eb"
                  }}
                  style={styles.ImageBackground_104_1493}
                />
              </View>
            </View>
            <View style={styles.View_104_1498}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee50/5f0f/df88acfa14a09288031a2ee9454e5a80"
                }}
                style={styles.ImageBackground_104_1499}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b244/5aed/5f517e812fea4b796ac82f90fd5b436a"
                }}
                style={styles.ImageBackground_104_1500}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e513/8f44/a724f7f0675ece4873388f9e501c4bdc"
                }}
                style={styles.ImageBackground_104_1501}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
                }}
                style={styles.ImageBackground_104_1502}
              />
            </View>
          </View>
          <View style={styles.View_104_1503}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2b2/0f88/052318d0d9a70fd4c65dde75516224aa"
              }}
              style={styles.ImageBackground_104_1504}
            />
          </View>
          <View style={styles.View_104_1506}>
            <View style={styles.View_104_1507}>
              <View style={styles.View_104_1508} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/719e/f2a9/a47fb7350302343a2280e86cb838db8d"
                }}
                style={styles.ImageBackground_104_1509}
              />
            </View>
            <View style={styles.View_104_1510}>
              <View style={styles.View_104_1511}>
                <View style={styles.View_104_1512} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb39/23fc/ed17d29f215d762cc272804d16cfc34a"
                  }}
                  style={styles.ImageBackground_104_1513}
                />
              </View>
            </View>
            <View style={styles.View_104_1518}>
              <View style={styles.View_104_1519}>
                <View style={styles.View_104_1520}>
                  <View style={styles.View_104_1521} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef8/bcba/7944a37fb20c0ed438725ff5496292bb"
                    }}
                    style={styles.ImageBackground_104_1522}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_104_1523}>
              <View style={styles.View_104_1524}>
                <View style={styles.View_104_1525} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8ab/bc2e/0056dc64774cb2050d333efa176cf3eb"
                  }}
                  style={styles.ImageBackground_104_1526}
                />
              </View>
            </View>
            <View style={styles.View_104_1531}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee50/5f0f/df88acfa14a09288031a2ee9454e5a80"
                }}
                style={styles.ImageBackground_104_1532}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b244/5aed/5f517e812fea4b796ac82f90fd5b436a"
                }}
                style={styles.ImageBackground_104_1533}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e513/8f44/a724f7f0675ece4873388f9e501c4bdc"
                }}
                style={styles.ImageBackground_104_1534}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
                }}
                style={styles.ImageBackground_104_1535}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a063/cdfe/7b53f7ac81b97cac343183157e07cd34"
            }}
            style={styles.ImageBackground_104_1536}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fed7/8729/92c1376531ff5d868f291944775b3586"
            }}
            style={styles.ImageBackground_104_1537}
          />
          <View style={styles.View_104_1538}>
            <View style={styles.View_104_1539}>
              <View style={styles.View_104_1540}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d055/7bb7/6bb3246ad9d0d5c431e79426d962664a"
                  }}
                  style={styles.ImageBackground_104_1541}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8687/e835/d536a89ade807a712574e0a74eabb7d8"
                  }}
                  style={styles.ImageBackground_104_1542}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb75/ddab/65bd04d7f2d42e8f19c2208808860b6f"
                  }}
                  style={styles.ImageBackground_104_1543}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_104_1544}>
          <View style={styles.View_104_1545} />
          <View style={styles.View_104_1546}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2b2/0f88/052318d0d9a70fd4c65dde75516224aa"
              }}
              style={styles.ImageBackground_104_1547}
            />
          </View>
          <View style={styles.View_104_1549}>
            <Text style={styles.Text_104_1549}>Mia</Text>
          </View>
          <View style={styles.View_104_1550}>
            <View style={styles.View_104_1551}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3d6/87a2/c9a30215c729e2d43e4d45eebaf774cd"
                }}
                style={styles.ImageBackground_104_1552}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc4e/8772/f4a8c45ae44817700a93c99f5cc1de6c"
                }}
                style={styles.ImageBackground_104_1553}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20b3/4b19/1fd05aa5d2006739655d522e7cd7fc1f"
                }}
                style={styles.ImageBackground_104_1554}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a063/cdfe/7b53f7ac81b97cac343183157e07cd34"
            }}
            style={styles.ImageBackground_104_1559}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fcd/a424/9ce80e3513eea7f5905b6c6ae8a0df67"
            }}
            style={styles.ImageBackground_104_1560}
          />
          <View style={styles.View_104_1561}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/454c/5fc3/57e97e927001937dae360f8bf1333d76"
              }}
              style={styles.ImageBackground_104_1562}
            />
            <View style={styles.View_104_1563}>
              <Text style={styles.Text_104_1563}>M</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_104_1564}>
        <View style={styles.View_104_1565}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ecb/8d98/715adac4742bce9ae57028af6ae0eb31"
            }}
            style={styles.ImageBackground_104_1566}
          />
          <View style={styles.View_104_1567}>
            <View style={styles.View_104_1568}>
              <View style={styles.View_104_1569}>
                <View source={{ uri: "null" }} style={styles.View_104_1570} />
                <View style={styles.View_104_1571}>
                  <View source={{ uri: "null" }} style={styles.View_104_1572} />
                  <View source={{ uri: "null" }} style={styles.View_104_1573} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f99/d54c/1545c2399f27b4c60dfa7054b2575a3d"
                    }}
                    style={styles.ImageBackground_104_1574}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a49e/ff15/e37e99316ccffdc8a1c3b8048789bdd2"
                }}
                style={styles.ImageBackground_104_1580}
              />
            </View>
            <View style={styles.View_104_1584}>
              <View style={styles.View_104_1585}>
                <View style={styles.View_104_1586}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b69e/030c/e71a2898919fe340e59f54dbdd053d99"
                    }}
                    style={styles.ImageBackground_104_1587}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33a2/f717/6add6d3c2027a87421908f1195ca7e86"
                    }}
                    style={styles.ImageBackground_104_1588}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_104_1589}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b948/ebb6/17321a6b4d7e6a7c247e92f9c56c6c2d"
                }}
                style={styles.ImageBackground_104_1590}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b0a/76d0/7d2d64dc182fc07f18f78732da99d182"
                }}
                style={styles.ImageBackground_104_1593}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_104_1596} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 249, 251, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_104_1398: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_104_1399: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1400: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.60655737704918%")
  },
  View_104_1401: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_1402: {
    width: wp("48.266666666666666%"),
    minWidth: wp("48.266666666666666%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_104_1403: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("1.7076502732240453%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_104_1404: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1407: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("1.7759562841530059%"),
    justifyContent: "center"
  },
  Text_104_1407: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_104_1408: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.437158469945356%")
  },
  View_104_1410: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1411: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_104_1412: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1414: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482584635416665%"),
    minHeight: hp("1.5482584635416665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%"),
    top: hp("2.3679305946892075%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_104_1415: {
    width: wp("0.354150390625%"),
    minWidth: wp("0.354150390625%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.73333333333333%"),
    top: hp("2.8688524590163933%")
  },
  View_104_1416: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018103761099728%"),
    minHeight: hp("1.0018103761099728%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("2.6411546384050544%"),
    backgroundColor: "rgba(31, 31, 31, 1)"
  },
  ImageBackground_104_1417: {
    width: wp("4.072639973958333%"),
    minWidth: wp("4.072639973958333%"),
    height: hp("0.6479732325819672%"),
    minHeight: hp("0.6479732325819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%"),
    top: hp("2.3675637167008197%")
  },
  ImageBackground_104_1418: {
    width: wp("2.653076171875%"),
    minWidth: wp("2.653076171875%"),
    height: hp("0.49645262337773227%"),
    minHeight: hp("0.49645262337773227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.89519856770833%"),
    top: hp("2.885895609204235%")
  },
  ImageBackground_104_1419: {
    width: wp("1.2336751302083333%"),
    minWidth: wp("1.2336751302083333%"),
    height: hp("0.460998868681694%"),
    minHeight: hp("0.460998868681694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.60455729166667%"),
    top: hp("3.4046277322404372%")
  },
  ImageBackground_104_1420: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%"),
    top: hp("3.324214747694672%")
  },
  ImageBackground_104_1421: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.55553385416667%"),
    top: hp("3.050990703978825%")
  },
  ImageBackground_104_1422: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("1.1384223979678962%"),
    minHeight: hp("1.1384223979678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.80000000000001%"),
    top: hp("2.73224043715847%")
  },
  ImageBackground_104_1423: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("1.4572060173326502%"),
    minHeight: hp("1.4572060173326502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.04443359375%"),
    top: hp("2.413490170338115%")
  },
  View_104_1424: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("2.185792349726776%"),
    justifyContent: "flex-start"
  },
  Text_104_1424: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_104_1425: {
    width: wp("20.533333333333335%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.06666666666666%"),
    top: hp("5.532786885245901%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_104_1426: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_1426: {
    color: "rgba(78, 139, 67, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_1427: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_1427: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_104_1428: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.06666666666668%")
  },
  View_104_1430: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("84.56284153005464%"),
    minHeight: hp("84.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.437158469945356%"),
    backgroundColor: "rgba(248, 249, 251, 1)",
    overflow: "hidden"
  },
  View_104_1431: {
    width: wp("61.98242187500001%"),
    minWidth: wp("61.98242187500001%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("3.961748633879779%")
  },
  View_104_1432: {
    width: wp("57.06666666666666%"),
    minWidth: wp("57.06666666666666%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_1432: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_104_1433: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.599999999999994%"),
    top: hp("3.142076502732241%")
  },
  View_104_1434: {
    width: wp("4.382405598958333%"),
    minWidth: wp("4.382405598958333%"),
    height: hp("2.087535753927596%"),
    minHeight: hp("2.087535753927596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.600016276041664%"),
    top: hp("0.819672131147545%")
  },
  ImageBackground_104_1435: {
    width: wp("4.382405598958333%"),
    height: hp("2.087535753927596%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_104_1437: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("9.289617486338798%")
  },
  View_104_1438: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1
  },
  View_104_1439: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("3.961748633879779%"),
    justifyContent: "center"
  },
  Text_104_1439: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_1440: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("4.234972677595625%"),
    justifyContent: "center"
  },
  Text_104_1440: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_1441: {
    width: wp("4.074869791666667%"),
    minWidth: wp("4.074869791666667%"),
    height: hp("2.2450931736680326%"),
    minHeight: hp("2.2450931736680326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%"),
    top: hp("4.78142076502732%")
  },
  ImageBackground_104_1442: {
    width: wp("4.074869791666667%"),
    height: hp("2.2450931736680326%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1444: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("7.004467906847678%"),
    minHeight: hp("7.004467906847678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.99999999999999%"),
    top: hp("2.3224043715846996%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_1445: {
    width: wp("7.272721354166666%"),
    minWidth: wp("7.272721354166666%"),
    height: hp("3.725779382257514%"),
    minHeight: hp("3.725779382257514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4916341145833414%"),
    top: hp("1.6393442622950793%")
  },
  View_104_1446: {
    width: wp("7.272721354166666%"),
    height: hp("3.725779382257514%"),
    minHeight: hp("3.725779382257514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(88, 101, 242, 1)"
  },
  ImageBackground_104_1447: {
    width: wp("4.337890625%"),
    height: hp("1.693875672387295%"),
    top: hp("0.9115250384221341%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3546549479166643%")
  },
  View_104_1448: {
    width: wp("7.272005208333334%"),
    minWidth: wp("7.272005208333334%"),
    height: hp("3.725412504269126%"),
    minHeight: hp("3.725412504269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.897688802083337%"),
    top: hp("1.6395443775614744%")
  },
  View_104_1449: {
    width: wp("7.272005208333334%"),
    minWidth: wp("7.272005208333334%"),
    height: hp("3.725412504269126%"),
    minHeight: hp("3.725412504269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1450: {
    width: wp("7.272005208333334%"),
    height: hp("3.725412504269126%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_104_1451: {
    width: wp("3.999560546875%"),
    height: hp("2.3460179730191255%"),
    top: hp("0.7314880037568336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.63624674479167%")
  },
  View_104_1456: {
    width: wp("7.272005208333334%"),
    minWidth: wp("7.272005208333334%"),
    height: hp("3.725412504269126%"),
    minHeight: hp("3.725412504269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.303027343750003%"),
    top: hp("1.6395443775614744%")
  },
  View_104_1457: {
    width: wp("7.272005208333334%"),
    minWidth: wp("7.272005208333334%"),
    height: hp("3.725412504269126%"),
    minHeight: hp("3.725412504269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1458: {
    width: wp("7.272005208333334%"),
    minWidth: wp("7.272005208333334%"),
    height: hp("3.725412504269126%"),
    minHeight: hp("3.725412504269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1459: {
    width: wp("7.272005208333334%"),
    height: hp("3.725412504269126%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_104_1460: {
    width: wp("4.181396484375%"),
    height: hp("2.1421005165642075%"),
    top: hp("0.8384829661885256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4543945312500028%")
  },
  ImageBackground_104_1461: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999999%"),
    top: hp("5.874316939890711%")
  },
  ImageBackground_104_1462: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.266666666666666%"),
    top: hp("6.010928961748633%")
  },
  View_104_1463: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("3.688524590163933%")
  },
  View_104_1464: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1465: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_104_1466: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_104_1467: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_104_1468: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("23.224043715846992%")
  },
  View_104_1469: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1
  },
  View_104_1470: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("3.961748633879779%"),
    justifyContent: "center"
  },
  Text_104_1470: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_1471: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "center"
  },
  Text_104_1471: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_1472: {
    width: wp("4.074869791666667%"),
    minWidth: wp("4.074869791666667%"),
    height: hp("2.2450931736680326%"),
    minHeight: hp("2.2450931736680326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%"),
    top: hp("4.78142076502732%")
  },
  ImageBackground_104_1473: {
    width: wp("4.074869791666667%"),
    height: hp("2.2450931736680326%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1475: {
    width: wp("42.08484700520833%"),
    minWidth: wp("42.08484700520833%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666666%"),
    top: hp("2.322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_1476: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.442415364583333%"),
    top: hp("2.185792349726775%")
  },
  View_104_1477: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(88, 101, 242, 1)"
  },
  ImageBackground_104_1478: {
    width: wp("3.1811197916666667%"),
    height: hp("1.2421821635928962%"),
    top: hp("0.6684516948428936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9934895833333357%")
  },
  View_104_1479: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.909082031250001%"),
    top: hp("2.185792349726775%")
  },
  View_104_1480: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(144, 110, 193, 1)"
  },
  ImageBackground_104_1481: {
    width: wp("2.9332845052083334%"),
    height: hp("1.7206244129952186%"),
    top: hp("0.5364089715676243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2000976562500014%")
  },
  View_104_1486: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.375748697916663%"),
    top: hp("2.185792349726775%")
  },
  View_104_1487: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1488: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 201, 85, 1)"
  },
  ImageBackground_104_1489: {
    width: wp("3.0666666666666664%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.6147874509050553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0667643229166757%")
  },
  View_104_1490: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.84241536458333%"),
    top: hp("2.185792349726775%")
  },
  View_104_1491: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1492: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(31, 31, 31, 1)",
    borderWidth: 1.3499999046325684
  },
  ImageBackground_104_1493: {
    width: wp("3.8783691406250003%"),
    height: hp("1.986877774931694%"),
    top: hp("0.3794852501707666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7407389322916771%")
  },
  View_104_1498: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.30908203125%"),
    top: hp("2.185792349726775%")
  },
  ImageBackground_104_1499: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_104_1500: {
    width: wp("3.914371744791666%"),
    height: hp("2.0053217319842895%"),
    top: hp("0.3759498804644821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6849609374999943%")
  },
  ImageBackground_104_1501: {
    width: wp("2.0061197916666664%"),
    height: hp("1.0527730639515027%"),
    top: hp("0.8522242144808772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6635579427083371%")
  },
  ImageBackground_104_1502: {
    width: wp("0.48929036458333336%"),
    height: hp("0.2506777237021858%"),
    top: hp("0.7018709443306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.473958333333343%")
  },
  View_104_1503: {
    width: wp("4.074869791666667%"),
    minWidth: wp("4.074869791666667%"),
    height: hp("2.2450931736680326%"),
    minHeight: hp("2.2450931736680326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%"),
    top: hp("4.78142076502732%")
  },
  ImageBackground_104_1504: {
    width: wp("4.074869791666667%"),
    height: hp("2.2450931736680326%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1506: {
    width: wp("42.08484700520833%"),
    minWidth: wp("42.08484700520833%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666666%"),
    top: hp("2.322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_1507: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4064127604166714%"),
    top: hp("2.185792349726775%")
  },
  View_104_1508: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(88, 101, 242, 1)"
  },
  ImageBackground_104_1509: {
    width: wp("3.1811197916666667%"),
    height: hp("1.2421821635928962%"),
    top: hp("0.6684516948428936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9934895833333286%")
  },
  View_104_1510: {
    width: wp("5.405338541666667%"),
    minWidth: wp("5.405338541666667%"),
    height: hp("2.769128351263661%"),
    minHeight: hp("2.769128351263661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.87309570312501%"),
    top: hp("2.167348392674178%")
  },
  View_104_1511: {
    width: wp("5.405338541666667%"),
    minWidth: wp("5.405338541666667%"),
    height: hp("2.769128351263661%"),
    minHeight: hp("2.769128351263661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1512: {
    width: wp("5.405338541666667%"),
    height: hp("2.769128351263661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_104_1513: {
    width: wp("2.9728841145833336%"),
    height: hp("1.743837783896858%"),
    top: hp("0.5436464737021893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2162109374999943%")
  },
  View_104_1518: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.41175130208334%"),
    top: hp("2.185792349726775%")
  },
  View_104_1519: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1520: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1521: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_104_1522: {
    width: wp("3.0666666666666664%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.614954213627044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%")
  },
  View_104_1523: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.87841796875%"),
    top: hp("2.185792349726775%")
  },
  View_104_1524: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1525: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(31, 31, 31, 1)",
    borderWidth: 1.3499999046325684
  },
  ImageBackground_104_1526: {
    width: wp("3.8783691406250003%"),
    height: hp("1.986877774931694%"),
    top: hp("0.3794852501707666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7407389322916629%")
  },
  View_104_1531: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.34508463541667%"),
    top: hp("2.185792349726775%")
  },
  ImageBackground_104_1532: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_104_1533: {
    width: wp("3.914371744791666%"),
    height: hp("2.0053217319842895%"),
    top: hp("0.3759498804644821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6849609375000085%")
  },
  ImageBackground_104_1534: {
    width: wp("2.0061197916666664%"),
    height: hp("1.0527730639515027%"),
    top: hp("0.8522242144808772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6635579427083371%")
  },
  ImageBackground_104_1535: {
    width: wp("0.48929036458333336%"),
    height: hp("0.2506777237021858%"),
    top: hp("0.7018709443306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4739583333333286%")
  },
  ImageBackground_104_1536: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999999%"),
    top: hp("5.874316939890711%")
  },
  ImageBackground_104_1537: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333336%"),
    top: hp("6.010928961748633%")
  },
  View_104_1538: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("3.6885245901639365%")
  },
  View_104_1539: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1540: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_104_1541: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_104_1542: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_104_1543: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1544: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("37.15846994535519%")
  },
  View_104_1545: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.6000000238418579,
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1
  },
  View_104_1546: {
    width: wp("4.074869791666667%"),
    minWidth: wp("4.074869791666667%"),
    height: hp("2.2450931736680326%"),
    minHeight: hp("2.2450931736680326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333335%"),
    top: hp("4.508196721311471%")
  },
  ImageBackground_104_1547: {
    width: wp("4.074869791666667%"),
    height: hp("2.2450931736680326%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1549: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "center"
  },
  Text_104_1549: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_1550: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.06666666666667%"),
    top: hp("2.322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_1551: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_104_1552: {
    width: wp("6.4%"),
    height: hp("0.9562841530054645%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06666666666667%")
  },
  ImageBackground_104_1553: {
    width: wp("7.466731770833333%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5332194010416771%")
  },
  ImageBackground_104_1554: {
    width: wp("5.363802083333334%"),
    height: hp("2.7478494279371586%"),
    top: hp("1.2490861402834739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.584716796875007%")
  },
  ImageBackground_104_1559: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999999%"),
    top: hp("5.874316939890711%")
  },
  ImageBackground_104_1560: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.733333333333334%"),
    top: hp("5.874316939890711%")
  },
  View_104_1561: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("3.5519125683060153%")
  },
  ImageBackground_104_1562: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1563: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "center"
  },
  Text_104_1563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_1564: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100.13661202185793%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_1565: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_104_1566: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_1567: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_1568: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.333333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_104_1569: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("1.775956284152997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_104_1570: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1571: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1572: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1573: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_104_1574: {
    width: wp("4.80009765625%"),
    height: hp("2.99072265625%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333336%")
  },
  ImageBackground_104_1580: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("1.775956284152997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.26666666666667%")
  },
  View_104_1584: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_1585: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_1586: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06666666666667%"),
    top: hp("-1.161202185792348%")
  },
  ImageBackground_104_1587: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_104_1588: {
    width: wp("6.7703125%"),
    height: hp("3.139441651724727%"),
    top: hp("1.9125683060109253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%")
  },
  View_104_1589: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.33333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_104_1590: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("1.775956284152997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%")
  },
  ImageBackground_104_1593: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.9125683060109253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%")
  },
  View_104_1596: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("0.8035962047472678%"),
    minHeight: hp("0.8035962047472678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.13333333333333%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(31, 31, 31, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
