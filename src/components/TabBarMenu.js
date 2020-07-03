import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text, TouchableHighlight, Image } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux'

const renderTabBar = props => (
    <View style={{ backgroundColor: "#115E54", elevation: 4, marginBottom: 6 }}>
        <StatusBar backgroundColor="#114D44" />

        <View style={{justifyContent: 'space-between' }}>
            <View style={{ height: 50, justifyContent: 'center' }}>
                <Text style={{ color: "#fff", fontSize: 20, marginLeft: 20 }}>WhatsApp Clone</Text>
            </View>
        
            <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <View style={{ justifyContent: 'center', width: 50, alignItems: 'center' }}>
                    <TouchableHighlight
                        onPress={() => Actions.adicionarContato()}
                        underlayColor="#114D44"
                    >
                        <View>
                            <Image source={require('../imgs/adicionar_contato.png')} />
                        </View>
                    </TouchableHighlight>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Sair</Text>
                </View>
            </View>
        </View>
        <TabBar
            {...props}
        />
        </View>
    </View>
);

export default renderTabBar
