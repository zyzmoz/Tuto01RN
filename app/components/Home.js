import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator

} from 'react-native';

import { connect } from 'react-redux';
import { getData } from '../actions';

const mapState = (state) => ({
  data: state.dataReducer.data,
  loading: state.dataReducer.loading
});

const actions = {
  getData
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.getData();
  }

  renderItem = ({item, index}) => {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>
          {(parseInt(index) + 1)}{". "}{item.title}
        </Text>
        <Text style={styles.description}>
          {item.description}
        </Text>
      </View>
    )
  }

  render() {
    console.log('Props',this.props);
    if (this.props.loading) {
      return (
        <View style={styles.activityIndicator}>
          <ActivityIndicator animating={true} />
        </View>
      );
    } else {
      return(
        <View style={styles.list}>
          <FlatList 
            ref="listref"
            data={this.props.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}/>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20
  },
  activityIndicator: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  row:{
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10
  },
  title: {
    fontSize: 15,
    fontWeight: "600"
  },
  description: {
    marginTop: 5,
    fontSize: 14
  }
})

export default connect(mapState, actions)(Home);