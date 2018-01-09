import {StackNavigator} from 'react-navigation';

import ProductList from "./src/components/ProductList";
import ProductDetail from './src/components/ProductDetail';
import HomeScreen from './src/components/HomeScreen';


const AppNavigator = StackNavigator(
    {
        Home: {screen: HomeScreen},
        NewList: {screen: ProductList},
        ProductDetail: {
            screen: ProductDetail, navigationOptions: ({navigation}) => ({
                title: `${navigation.state.params.item}`,
            }),
        },
    }
);

export default AppNavigator;
