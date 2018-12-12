import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { TextInput } from 'react-native-gesture-handler';

export default class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalFlex: 1,
            baselineFlex: {
                notSubmittedFlex: 1,
                submittedFlex: 1,
                extraFlex: 1
            },
            FollowUpFlex: {
                notSubmittedFlex: 1,
                submittedFlex: 1,
                extraFlex: 1
            },
            WaitingFollowUpFlex: {
                awaitingFolllowUpFlex: 1,
                extraFlex: 1
            }
        }
    }

    componentDidMount() {
        let totalCount = 400
        let Baseline = { notSubmitted: 228, submitted: 164 }
        let FollowUp = { notSubmitted: 83, submitted: 170 }
        let waitinngFollowUp = { waiting: 228 }
        let totalFlexD = totalCount / 3
        let baseLineObject = this.calculateFlex(totalCount, Baseline.notSubmitted, Baseline.submitted, false)
        let followupObject = this.calculateFlex(totalCount, FollowUp.notSubmitted, FollowUp.submitted, false)
        let waitingObject = this.calculateFlex(totalCount, waitinngFollowUp.waiting, true)
        console.log(baseLineObject.SubmittedFlex)
        this.setState({
                totalFlex: totalFlexD,
                baselineFlex: baseLineObject,
                FollowUpFlex : followupObject,
                WaitingFollowUpFlex : waitingObject
        })
        console.log(baseLineObject)
        console.log(followupObject)
        console.log(waitingObject)
    }

    calculateFlex(totalCount, notSubmitted, submitted, isWaitingFollowUp) {
        if (!isWaitingFollowUp) {
            let _NotSubmittedFlex = ((notSubmitted / totalCount) * 100)
            let SubmittedFlex = (submitted / totalCount) * 100
            let extraFlex = ((totalCount - (notSubmitted + submitted)) / totalCount) * 100
            let basline_FollowUp_FlexObjects = {notSubmittedFlex: _NotSubmittedFlex, submittedFlex: SubmittedFlex, extraFlex: extraFlex }
            return basline_FollowUp_FlexObjects
        } else {
            let waitingFlex = (notSubmitted / totalCount) * 100
            let extraFlex = ((totalCount - notSubmitted) / totalCount) * 100 
            let WaitingFollowUpFlexObject = { awaitingFolllowUpFlex : waitingFlex, extraFlex: extraFlex }
            return WaitingFollowUpFlexObject
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.layout}>
                    <View style={[styles.box, { flex: this.state.totalFlex }]}>
                        <View style={[styles.blackBox, { flex: this.state.baselineFlex.notSubmittedFlex }]}>
                            <Text style={{ color: 'white', paddingRight: 10 }}>228</Text>
                        </View>
                        <View style={[styles.blueBox, { flex: this.state.baselineFlex.submittedFlex }]}>
                            <Text style={{ color: 'white', paddingRight: 10 }}>164</Text>
                        </View>
                        <View style={[styles.whiteBox, { flex: this.state.baselineFlex.extraFlex }]}>
                        </View>
                    </View>
                    <View style={[styles.box, { flex: this.state.totalFlex }]}>
                        <View style={[styles.blackBox, { flex: this.state.FollowUpFlex.notSubmittedFlex }]}>
                            <Text style={{ color: 'white', paddingRight: 10 }}>83</Text>
                        </View>
                        <View style={[styles.blueBox, { flex: this.state.FollowUpFlex.submittedFlex }]}>
                            <Text style={{ color: 'white', paddingRight: 10 }}>170</Text>
                        </View>
                        <View style={[styles.whiteBox, { flex: this.state.FollowUpFlex.extraFlex }]}>
                        </View>
                    </View>
                    <View style={[styles.box, { flex: this.state.totalFlex }]}>
                        <View style={[styles.greenBox, { flex: this.state.WaitingFollowUpFlex.awaitingFolllowUpFlex }]}>
                            <Text style={{ color: 'white', paddingRight: 10 }}>228</Text>
                        </View>
                        <View style={[styles.whiteBox, { flex: this.state.WaitingFollowUpFlex.awaitingFolllowUpFlex }]}>
                        </View>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems:'center'
    },
    layout: {
        flex: 0.3,
        //borderBottomLeft: 5,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        margin: 5,
    },
    box: {
        height: 60,
        marginBottom: 5,
        flexDirection: 'row',
        //justifyContent :'flex-start',
        alignItems: 'center',
        //borderWidth:1
    },
    blackBox: {
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    blueBox: {
        height: 50,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    greenBox: {
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    whiteBox: {
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
})


// import React, { Component } from 'react'
// import {  View, StyleSheet ,Text} from 'react-native'


// export default class BarChart extends Component {

//   state = {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }

//   render() {
//    // let totalCount: 400
//     return (
//       <View style={styles.container}>
//         <View style={styles.layout}>
//           <View style={styles.box}>
//             <View style = {styles.innerBox}>
//                     <Text style = {{color:'white',paddingRight:10}}>228</Text>
//             </View>
//             <View style = {styles.innerBox1}>
//                   <Text style = {{color:'white',paddingRight:10}}>164</Text>
//             </View>
//             <View style = {styles.innerBox5}>
//             </View>
//           </View>
//           <View style={styles.box}> 
//             <View style = {styles.innerBox2}>
//                     <Text style = {{color:'white',paddingRight:10}}>83</Text>
//             </View>
//             <View style = {styles.innerBox3}>
//                     <Text style = {{color:'white',paddingRight:10}}>170</Text>
//             </View>
//             <View style = {styles.innerBox6}>
//             </View>
//           </View>
//           <View style={styles.box}>
//             <View style = {styles.innerBox4}>
//                     <Text style = {{color:'white',paddingRight:10}}>228</Text>
//             </View>
//              <View style = {styles.innerBox7}>
//             </View>

//           </View>
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent:'center',
//     //alignItems:'center'

//   },
//   layout: {
//     flex: .3,
//     //borderBottomLeft:5,
//     borderBottomWidth :2,
//     borderLeftWidth: 2,
//     margin:5,
//   },
//   box: {
//     flex:133,
//     height: 60,
//     marginBottom: 5,
//     flexDirection :'row',
//     //justifyContent :'flex-start',
//     alignItems:'center',
//     //borderWidth:1
//   },
//   innerBox: {
//     flex:57,
//     height:50,
//     backgroundColor:'black',
//     justifyContent :'center',
//     alignItems :'flex-end',
//    },
//   innerBox1: {
//     flex:41,
//     height:50,
//     backgroundColor:'skyblue',
//     justifyContent :'center',
//     alignItems :'flex-end',
//   },  
//   innerBox2: {
//     flex:20,
//     height:50,
//     backgroundColor:'black',
//     justifyContent :'center',
//     alignItems :'flex-end',
//   },
//   innerBox3: {
//     flex:42,
//     height:50,
//     backgroundColor:'skyblue',
//     justifyContent :'center',
//     alignItems :'flex-end',
//   },  
//   innerBox4: {
//     flex:57,
//     height:50,
//     backgroundColor:'green',
//     justifyContent :'center',
//     alignItems :'flex-end',
//   },
//     innerBox5: {
//     flex:2,
//     height:50,
//     backgroundColor:'white',
//     justifyContent :'center',
//     alignItems :'flex-end',
//   },
//   innerBox6: {
//     flex:36,
//     height:50,
//     backgroundColor:'white',
//     justifyContent :'center',
//     alignItems :'flex-end',
//   },
//     innerBox7: {
//     flex:43,
//     height:50,
//     backgroundColor:'white',
//     justifyContent :'center',
//     alignItems :'flex-end',
//   }
// })
