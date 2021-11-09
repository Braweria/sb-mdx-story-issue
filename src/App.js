import "./App.css";
import { DialogStore } from "./components/DialogStore";
import { MyDialog } from "./components/Dialog";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <DialogStore>
        <Button />
        <MyDialog />
      </DialogStore>
    </div>
  );
}

export default App;
