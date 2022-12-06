import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.scroll_view}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            marginTop: 10,
            marginBottom: 20,
            fontWeight: 'bold',
          }}>
          Primeira tela
        </Text>

        <View style={styles.card_button}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.button_text}
              onPress={() => {
                navigation.navigate('Segunda Tela' as never);
              }}>
              Mudar tela
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scroll_view: {
    backgroundColor: '#87CEFA',
  },
  card_button: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderBottomColor: 'rgba(0,0,0,0,6)',
    borderTopWidth: 1,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 50,
    width: '48%',
  },
  button_text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
    textShadowColor: 'rgba(0,0,0,0,3)',
    margin: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
