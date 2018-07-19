export default {
  colors: {
    weekend: "#ffee88",
    week: "#a7b000 ",
    disabled: "#bdbdbd",
    holyday: "#d14",
  },
  flex: (items = "center", content = "center", direction = "row") => {
    return {
      display: "flex",
      flexDirection: direction,
      alignItems: items,
      justifyContent: content,
    };
  },
  fonts: {
    light: { "font-family": "Lato, sans-serif", fontWeight: 300 },
    regular: { "font-family": "Lato, sans-serif", fontWeight: 400 },
    bold: { "font-family": "Lato, sans-serif", fontWeight: 700 },
  },
};
