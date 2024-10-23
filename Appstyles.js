import { StyleSheet, Platform } from "react-native";
import Dashboard from "./pages/Dashboard";
import { bulkSave } from "./components/models/Item";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: 20,
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 20,
  },

  headerTitleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  navBar: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 20,
    justifyContent: "center",
    gap: 50,
  },

  navButtons: {
    backgroundColor: "none",
    border: "none",
    zIndex: 1,
  },

  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },

  headingColorBox: {
    height: 55,
    width: 360,
    backgroundColor: "#faf9f6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "30%",
  },

  pColorBox: {
    backgroundColor: "#faf9f6",
    height: 55,
    width: 360,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "15%",
  },

  p: {
    textAlign: "center",
  },

  // Dashboard

  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  foodImg: {
    width: "50%",
    width: 500,
    resizeMode: "stretch",
    position: "absolute",
    top: -240,
    left: 0,
    transform: [{ rotate: "-90deg" }],
    opacity: 0.5,
    zIndex: -1,
  },

  largeHeading: {
    fontSize: 30,
    fontStyle: "normal",
    paddingBottom: 15,
  },

  listColorBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    height: "40%",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },

  formContainer: {
    padding: 20,
    width: "80%",
    backgroundColor: "#c77872",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginTop: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderBlockColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "white",
  },

  headingColor: {
    ...Platform.select({
      android: {
        color: "yellow",
      },
      ios: {
        color: "purple",
      },
      default: {
        color: "blue",
      },
    }),
  },

  submitButton: {
    color: "black",
    borderRadius: 1,
    borderColor: "black",
  },

  platform: {
    position: "fixed",
    bottom: -15,
  },

  // List Container
  list: {
    flexGrow: 1,
  },
  listContent: {
    padding: 0,
  },

  // ItemsPage

  largeHeading1: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
    textAlign: "center",
  },
  itemInfo: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
    marginTop: 10,
    textAlign: "center",
    paddingBottom: 8,
  },
  formContainer2: {
    padding: 20,
    width: "80%",
    backgroundColor: "#c77872",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginTop: 5,
  },
  content: {
    textAlign: "center",
  },
  deleteButton: {
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "black",
  },
  updateButton: {
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
  },
  updateButtonText: {
    color: "black",
  },
  dashboardButton: {
    paddingTop: 10,
    padding: 10,
  },
  dashboardText: {
    fontSize: 15,
    color: "blue",
  },
});

export default styles;
