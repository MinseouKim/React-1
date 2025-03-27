import Myb from "./MyButton";
import { Button1, Button2, Button3 } from "./ButtonLib";
import Ap from "./AboutPage";
import Pf from "./Profile";
import "./App.css";
import SL from "./ShoppingList";
export default function App() {
  return (
    <div className="wrapper">
      <h1>Hello React</h1>
      <Myb />
      <Ap />
      <br />
      <Button1 /> &nbsp;
      <Button2 /> &nbsp;
      <Button3 />
      <Pf />
      <SL />
    </div>
  );
}
