import React from 'react';
import { StyleSheet,TextInput, Text, View , Button} from 'react-native';
import axios from 'axios'

export default class App extends React.Component {
constructor(props){
  super(props)
  this.state={
    text:"",
    result:[]
  }
}
getBulletin = ()=>{
  this.setState({result:[{id:10},{id:11}]})
  console.log("getBulletinExecuted");
  console.log(this.state.result)
  return;
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
}).then((users) => {
    let data = users.data;
    console.log(users);
}).catch((err) => {
    console.log(err);
})

}

  render() {
    let result="eren"
    if(this.state.result!=undefined && this.state.result==null && this.state.result==[]){

      console.log(this.state.result[0].id);

    }
    return (

      <View style={styles.container}>
      <Text style={styles.textContainer}>{result}</Text>
        <Text style={styles.textContainer}>{this.state.text}</Text>
        <TextInput onChangeText={(text) => this.setState({text})} style={styles.textInputContainer} value={this.state.text}/>
        <Button onPress={this.getBulletin} title={"fetch"} style={styles.fetchButtonStyle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer:{
    backgroundColor:"blue"
  },
  textInputContainer:{
    color:"red",height:40,width:80,borderColor:"gray",borderWidth:1
  },
  fetchButtonStyle:{
    borderRadius:2,borderColor:"gray"
    ,borderWidth:1,width:80,height:40
  }
});
