import { StyleSheet, Dimensions } from 'react-native';
import { PRIMARYCOLOR } from '../../constants';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: -30,
    marginRight: 5
  },
  background: {
    height: 200,
    width
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 24
  },
  summary: {
    color: '#616161',
    fontSize: 16,
    margin: 20
  },
  col1: {
    backgroundColor: '#EB9532',
    height: 110
  },
  col2: {
    backgroundColor: '#F5AB35',
    height: 110
  },
  col3: {
    backgroundColor: '#F9BF3B',
    height: 110
  },
  boldedText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    padding: 10
  },
  boothImage: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 75
  },
  boothImageList: {
    width: width * 0.49,
    height: 150,
    margin: 2
  },
  imgback: {
    flex: 1,
    width,
    height: 200
  },
  imageWrapper: {
    flex: 1,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 10,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tabHeading: {
    backgroundColor: '#FF6F00'
  },
  tabTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#FFF'
  },
  artworkText: {
    fontSize: 16,
    color: PRIMARYCOLOR,
    fontWeight: 'bold',
    margin: 20
  }
});

export default styles;
