import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import SocketIOClient from 'socket.io-client';


export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.socket = SocketIOClient('http://123.16.32.249:5222'); 
    this.socket.emit('JOIN_ROOM', { phone: 'phone' , token:'test', request: {userId:'1', roomId:'1'}});
    console.log('data is:' + this.socket)
		
	
    this.socket.on('JOIN_ROOM', (data) => {
        console.log('Data recieved from server', data);
      });
    }
	
	clicked = () => {
        var dataObj = { phone: 'phone', token: 'test', request: { userId: '1', roomId: '1' } };
        var datajson = JSON.stringify(dataObj)
        this.socket.emit('JOIN_ROOM', datajson);
        console.log('data is:' + datajson);
    }

    render() {
        return(
            <View style={{padding:40}}>
    					<Text style={{color:'red'}}> Socket.io with react native </Text>
              <TouchableOpacity onPress={() => this.clicked()}><Text> Click </Text></TouchableOpacity>
					</View>
        );
    }
}
