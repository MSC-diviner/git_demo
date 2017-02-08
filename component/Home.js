/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
} from 'react-native';

var HomeDetail = require("./HomeDetail");

var Home = React.createClass({
    render:function () {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    },
    //设置固定值
    getDefaultProps:function () {
        return {
            url_api:"http://api.douban.com/v2/movie/in_theaters"
        }
    },
    componentDidMount:function () {
        this.loadData();
    },
    loadData:function () {
        //this.props  默认值  this.state   状态值  fetch  网路请求
        fetch(this.props.url_api)
            .then((response) => response.json())
            .then((responseData) => {
             //请求完成的的时候吧数据给状态机
                var myArr = [];
                for (var i = 0;i < responseData.subjects.length;i++) {
                    var myObj = {};
                    myObj.title = responseData.subjects[i].title;
                    myObj.image = responseData.subjects[i].images.large;
                    myObj.year = responseData.subjects[i].year;
                    myObj.id = responseData.subjects[i].id;
                    myArr.push(myObj)
                }
                //设置状态值给数据原
                this.setState({
                    //rowHasChanged函数可以告诉ListView它是否需要重绘一行数据。 
                    // cloneWithRows ：接收一个数组，根据该数组创建数据源 
                    // dataSource ：该属性，用于为ListView指定当前的数据源 
                    // renderRow ：该属性用来标示ListView中每一行需要显示的样子。参数表示当前行需要显示的数据
                    dataSource:this.state.dataSource.cloneWithRows(myArr)
                })
            })
            .catch((error) => {
                if (error){

                }
            })
    },
    getInitialState:function () {
        return {
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2})
        }
    },
    renderRow:function (rowData) {
        return (
            <TouchableOpacity 
                activeOpacity={0.5}
                onPress={() =>{this.pushToDetail(rowData)}}
            >
                <View style={styles.bigViewStyle}>
                    <Image
                        source={{uri:rowData.image}}
                        style={styles.iconStyle}
                    />
                    <View style={styles.rightViewStyle}>
                        <Text>{rowData.title}</Text>
                        <Text>{rowData.year}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    },
    pushToDetail:function (data) {
        //进行页面跳转
        this.props.navigator.push({
            component:HomeDetail,
            title:data.title,
            passProps:{data},
        })
    }
});

const styles = StyleSheet.create({
    bigViewStyle:{
      flexDirection:'row',
        padding:10,
    },
    iconStyle:{
      width:100,
        height:120,
        marginRight:10,
    },
    rightViewStyle:{
       justifyContent:'center'
    }
});

module.exports = Home;

