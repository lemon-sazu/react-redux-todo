import { Provider } from "react-redux";
import TodoApp from "./features/todo/TodoApp";
import { store } from "./app/store";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
