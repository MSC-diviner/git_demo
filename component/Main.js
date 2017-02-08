

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

//引入组件
var Home = require("./Home");
var Message = require("./Message");
var Find = require("./Find");
var Mine = require("./Mine");

var Main = React.createClass({
   render:function () {
       return(
           <TabBarIOS
               tintColor="orange"
           >
               {/*首页*/}
               <TabBarIOS.Item
                   icon={require("./../images/tabbar_home@2x.png")}
                   title="首页"
                   selected={this.state.selectedTabBarItem == "首页"}
                   onPress={() => {this.setState({
                       selectedTabBarItem:"首页"
                   })}}
               >
                 <NavigatorIOS
                     style={{flex:1}}
                     initialRoute={{
                         component:Home,//负责控制那个具体板块
                         title:'主页',
                         leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                         rightButtonIcon:require("./../images/navigationbar_pop@2x.png"),
                         barTintColor:'#ffffcc',
                         tintColor:"orange",
                     }}

                 />
               </TabBarIOS.Item>
               {/*消息*/}
               <TabBarIOS.Item
                   icon={require("./../images/tabbar_message_center@2x.png")}
                   title="消息"
                   selected={this.state.selectedTabBarItem == "消息"}
                   onPress={() => {this.setState({
                       selectedTabBarItem:"消息"
                   })}} >
                   <NavigatorIOS
                       style={{flex:1}}
                       initialRoute={{
                           component:Message,//负责控制那个具体板块
                           title:'消息',
                           leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                           rightButtonIcon:require("./../images/navigationbar_pop@2x.png"),
                           barTintColor:'#ffffcc',
                           tintColor:"orange",
                       }}

                   />
               </TabBarIOS.Item>
               <TabBarIOS.Item
                   icon={require("./../images/tabbar_discover@2x.png")}
                   title="发现"
                   selected={this.state.selectedTabBarItem == "发现"}
                   onPress={() => {this.setState({
                       selectedTabBarItem:"发现"
                   })}}
               >
                   <NavigatorIOS
                       style={{flex:1}}
                       initialRoute={{
                           component:Find,//负责控制那个具体板块
                           title:'发现',
                           leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                           rightButtonIcon:require("./../images/navigationbar_pop@2x.png"),
                           barTintColor:'#ffffcc',
                           tintColor:"orange",
                       }}

                   />
               </TabBarIOS.Item>
               <TabBarIOS.Item
                   icon={require("./../images/tabbar_profile@2x.png")}
                   title="我的"
                   selected={this.state.selectedTabBarItem == "我的"}
                   onPress={() => {this.setState({
                       selectedTabBarItem:"我的"
                   })}}
               >
                   <NavigatorIOS
                       style={{flex:1}}
                       initialRoute={{
                           component:Mine,//负责控制那个具体板块
                           title:'我的',
                           leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                           rightButtonIcon:require("./../images/navigationbar_pop@2x.png"),
                           barTintColor:'#ffffcc',
                           tintColor:"orange",
                       }}
                   />
               </TabBarIOS.Item>
           </TabBarIOS>
       )
   },
    getInitialState:function () {
        return {
            selectedTabBarItem:'首页'
        }
    }
});

const styles = StyleSheet.create({

});

//输出类
module.exports = Main;


