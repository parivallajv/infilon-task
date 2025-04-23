import { Provider } from "react-redux";
import store from "./store";
import TabViews from "./modules/TabViews";

function App() {
  return (
    <Provider store={store}>
      <TabViews />
    </Provider>
  );
}

export default App;
