export default ({ colors, fonts, flex }) => ({
  container: {
    ...fonts.bold,
    ...flex(),
    flex: 1,
    height: 25,
    color: "black",
    background: colors.week,
  },
});
