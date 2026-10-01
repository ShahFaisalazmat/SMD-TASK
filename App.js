import { FlatList } from 'react-native'; // add to the existing react-native import

const PRODUCTS = ['Laptop', 'Phone', 'Headphones', 'Watch'];

<FlatList
  style={{ marginTop: 20 }}
  data={PRODUCTS}
  keyExtractor={(i) => i}
  renderItem={({ item }) => <Text style={{ fontSize: 18, padding: 4 }}>{item}</Text>}
/>
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Explorer</Text>
      <Text style={styles.name}>Shah Faisal</Text>
      <Text style={styles.roll}>23I-0058</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 12 },
  name: { fontSize: 22 },
  roll: { fontSize: 18, color: 'gray' },
});