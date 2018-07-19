export default ({ flex, fonts }) => ({
  calendar: {
    display: "block",
    width: 250,
    background: "white",
    margin: "10px auto",
    textAlign: "center",
  },
  innerContainer: {
    ...fonts.bold,
    display: "block",
    color: "white",
    cursor: "default",
    fontSize: "1rem",
    textTransform: "uppercase",
    userSelect: "none",
  },
  monthLabelContainer: flex(),
});
