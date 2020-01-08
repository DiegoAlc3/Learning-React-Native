import React,{Component} from 'react'
import {View,Text} from 'react-native';

import Api from '../services/api';
import api from '../services/api';

export default class Main extends Component{
  static navigationOptions={
    title:"JSHunt",
  }

  state = {
    docs:[],
  }

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get(`/products`);

    const {docs } = response.data;

    console.log(docs);
    this.setState({ docs })
  }
    
  render(){
    return(
      <View>
        <Text>Produtos</Text>
        {this.state.docs.map(product => {
          return <Text key={product._id}>{product.title}</Text>
        } )}
      </View>
    )
  }
}
