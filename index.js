/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger'])

AppRegistry.registerComponent('SocketIO', () => App);
