export default ({ fonts, flex }) => ({
  container: {
    ...flex("center", "space-around"),
    width: "100%",
    height: 40,
  },
  day: {
    ...fonts.bold,
    fontSize: 17,
    color: "black",
  },
});
