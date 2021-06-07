import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import ChapterSelection from '../screens/ChapterSelection'
import YearSelection from '../screens/YearSelection'

const screens = {    
    YearSelection : {
        screen : YearSelection,
        navigationOptions: {
            title:'Select your school year',
            headerShown:false
        }
    },
    Home : {
        screen: Home,
        navigationOptions:{
            title:''
        }
    },
    ChapterSelection :{
        screen: ChapterSelection,
        navigationOptions:{
            title: ''
        }
    }

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);