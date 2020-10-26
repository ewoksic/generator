import "../styles/styles.css";
import "lazysizes";
import Ge from "./modules/Generator";

new Ge();
if (module.hot) {
  module.hot.accept();
}
