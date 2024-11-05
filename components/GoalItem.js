import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, onDeleteGoal, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    padding: 8,
    color: "white",
  },
});
