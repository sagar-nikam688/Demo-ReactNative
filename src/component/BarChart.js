import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import response from './ChartData.json'

var array = ["Baseline", "Follow Up", "Awaiting Follow Up"]
let maxInt = 0
var maxSum = 0
export default class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Baseline: {
                notSubmitted: 0,
                submitted: 0,
                waiting: 0

            },
            FollowUp: {
                notSubmitted: 0,
                submitted: 0,
                waiting: 0
            },
            waitinngFollowUp: {
                notSubmitted: 0,
                submitted: 0,
                waiting: 0
            },
            totalFlex: 1,
            baselineFlex: {
                notSubmittedFlex: 1,
                submittedFlex: 1,
                awaitingFolllowUpFlex: 1,
                extraFlex: 1,

            },
            FollowUpFlex: {
                notSubmittedFlex: 1,
                submittedFlex: 1,
                awaitingFolllowUpFlex: 1,
                extraFlex: 1
            },
            WaitingFollowUpFlex: {
                notSubmittedFlex: 1,
                submittedFlex: 1,
                awaitingFolllowUpFlex: 1,
                extraFlex: 1
            }
        }
    }

    componentDidMount() {
         maxSum = this.calculateMaxCount(response.GetVisitsCountResult.ReturnValue[0], response.GetVisitsCountResult.ReturnValue[1], response.GetVisitsCountResult.ReturnValue[2])
        let totalCount = Math.ceil(maxSum / 10) * 10
        maxInt = Math.ceil(maxSum / 10)
        let totalFlexD = maxSum / 3
        this.setState({
            Baseline: { notSubmitted: response.GetVisitsCountResult.ReturnValue[1].data[0], submitted: response.GetVisitsCountResult.ReturnValue[0].data[0], waiting: response.GetVisitsCountResult.ReturnValue[2].data[0] },
            FollowUp: { notSubmitted: response.GetVisitsCountResult.ReturnValue[1].data[1], submitted: response.GetVisitsCountResult.ReturnValue[0].data[1], waiting: response.GetVisitsCountResult.ReturnValue[2].data[1] },
            waitinngFollowUp: { notSubmitted: response.GetVisitsCountResult.ReturnValue[1].data[2], submitted: response.GetVisitsCountResult.ReturnValue[0].data[2], waiting: response.GetVisitsCountResult.ReturnValue[2].data[2] },
            totalFlex: totalFlexD,
            baselineFlex: this.calculateFlex(totalCount, response.GetVisitsCountResult.ReturnValue[1].data[0], response.GetVisitsCountResult.ReturnValue[0].data[0], response.GetVisitsCountResult.ReturnValue[2].data[0]),
            FollowUpFlex: this.calculateFlex(totalCount, response.GetVisitsCountResult.ReturnValue[1].data[1], response.GetVisitsCountResult.ReturnValue[0].data[1], response.GetVisitsCountResult.ReturnValue[2].data[1]),
            WaitingFollowUpFlex: this.calculateFlex(totalCount, response.GetVisitsCountResult.ReturnValue[1].data[2], response.GetVisitsCountResult.ReturnValue[0].data[2], response.GetVisitsCountResult.ReturnValue[2].data[2]),
        })
    }

    calculateFlex(totalCount, notSubmitted, submitted, waiting) {
        let _NotSubmittedFlex = ((notSubmitted / totalCount) * 100)
        let SubmittedFlex = (submitted / totalCount) * 100
        let WaitingFlex = (waiting / totalCount) * 100

        let extraFlex = ((totalCount - (notSubmitted + submitted + waiting)) / totalCount) * 100
        let basline_FollowUp_FlexObjects = { notSubmittedFlex: _NotSubmittedFlex, submittedFlex: SubmittedFlex, extraFlex: extraFlex, awaitingFolllowUpFlex: WaitingFlex }
        return basline_FollowUp_FlexObjects
    }

    calculateMaxCount(dataArr1, dataArr2, dataArr3) {
        let sumContainerArr = []
        for (i = 0; i <= 2; i++) {
            let sum = dataArr1.data[i] + dataArr2.data[i] + dataArr3.data[i]
            sumContainerArr.push(sum)
        }
        return Math.max(...sumContainerArr)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 2, height: 200, top: 3 }}>
                        {array.map((item) => this.renderView(item))}
                    </View>
                    <View style={{ flex: 8, flexDirection: 'column' }}>
                        <View style={styles.layout}>
                            <ChartSegment
                                totalViewFlex={this.state.totalFlex}

                                blackViewFlex={this.state.baselineFlex.notSubmittedFlex}
                                textBlackView={this.state.Baseline.notSubmitted}

                                blueViewFlex={this.state.baselineFlex.submittedFlex}
                                textBlueView={this.state.Baseline.submitted}

                                greenViewFlex={this.state.baselineFlex.awaitingFolllowUpFlex}
                                textGreenView={this.state.Baseline.waiting}

                                extraViewFlex={this.state.baselineFlex.extraFlex}

                            />
                            <ChartSegment
                                totalViewFlex={this.state.totalFlex}

                                blackViewFlex={this.state.FollowUpFlex.notSubmittedFlex}
                                textBlackView={this.state.FollowUp.notSubmitted}

                                blueViewFlex={this.state.FollowUpFlex.submittedFlex}
                                textBlueView={this.state.FollowUp.submitted}

                                greenViewFlex={this.state.FollowUpFlex.awaitingFolllowUpFlex}
                                textGreenView={this.state.FollowUp.waiting}

                                extraViewFlex={this.state.FollowUpFlex.extraFlex}

                            />
                            <ChartSegment
                                totalViewFlex={this.state.totalFlex}

                                blackViewFlex={this.state.WaitingFollowUpFlex.notSubmittedFlex}
                                textBlackView={this.state.waitinngFollowUp.notSubmitted}

                                blueViewFlex={this.state.WaitingFollowUpFlex.submittedFlex}
                                textBlueView={this.state.waitinngFollowUp.submitted}

                                greenViewFlex={this.state.WaitingFollowUpFlex.awaitingFolllowUpFlex}
                                textGreenView={this.state.waitinngFollowUp.waiting}

                                extraViewFlex={this.state.WaitingFollowUpFlex.extraFlex}
                            />

                        </View>
                        <View style={{ flex: .8, flexDirection: 'row' }}>
                            <Text>{0}</Text>
                            {this.renderXValue()}
                        </View>
                    </View>
                </View>
                <View style ={{justifyContent :'center',alignItems:'center',top:10}}>
                <Text>Total Visits</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', top: 10, height: 50, justifyContent: 'center',margin:10 }}>
                    <View style ={{ flex:1.3,flexDirection : 'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={{  backgroundColor: 'green', height: 15, width: 15 }}>
                        </View>
                        <Text style = {{padding :4,fontSize:12, fontWeight:"500"}}>Awaiting Folllow Up</Text>
                    </View>
                    <View style ={{flex:1,flexDirection : 'row',alignItems:"center",justifyContent:'center'}}>
                        <View style={{ backgroundColor: 'black', height: 15, width: 15, }}>
                        </View>
                        <Text style = {{padding :4,fontSize:12,fontWeight:"500"}}>Not-Submitted</Text>
                    </View>
                    <View style ={{flex:1,flexDirection : 'row', alignItems:"center",justifyContent:'center'}}>
                        <View style={{ backgroundColor: 'blue', height: 15, width: 15  }}>
                        </View>
                        <Text style = {{padding :4,fontSize:12,fontWeight:"500"}}>Submitted</Text>
                    </View>
                </View>
            </View>
        )
    }

    renderView = (item) => {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                <Text>{item}</Text>
            </View>
        )
    }
    renderXValue = () => {
        var arr = []
        for (let i = 1; i <= 4; i++) {
            arr.push(i)
        }
        return (
            arr.map((item) => this.renderXView(item))
        )
    }
    renderXView = (item) => {
        console.log(this.state.totalFlex)
        return (
            <View style={{ flex: maxSum / 4, alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text>{(Math.ceil(maxSum / 4) * item) }</Text>
            </View>
        )
    }
}

class ChartSegment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[styles.box, { flex: this.props.totalViewFlex }]}>
                <View style={[styles.blackBox, { flex: this.props.blackViewFlex }]}>
                    {this.props.blackViewFlex != 0 ?
                        <Text style={{ color: 'white', paddingRight: 10 }}>
                            {this.props.textBlackView}
                        </Text> : null
                    }
                </View>
                <View style={[styles.blueBox, { flex: this.props.blueViewFlex }]}>
                    {this.props.blueViewFlex != 0 ?
                        <Text style={{ color: 'white', paddingRight: 10 }}>
                            {this.props.textBlueView}
                        </Text> : null
                    }
                </View>
                <View style={[styles.greenBox, { flex: this.props.greenViewFlex }]}>
                    {this.props.greenViewFlex != 0 ?
                        <Text style={{ color: 'white', paddingRight: 10 }}>
                            {this.props.textGreenView}
                        </Text> : null
                    }
                </View>
                <View style={[styles.whiteBox, { flex: this.props.extraViewFlex }]}>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    layout: {
        flex: 8,
        borderColor: '#BEBEBE',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        margin: 3,
        height: 200,
    },
    box: {
        height: 60,
        marginBottom: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    blackBox: {
        height: 45,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    blueBox: {
        height: 45,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    greenBox: {
        height: 45,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    whiteBox: {
        height: 45,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
})



