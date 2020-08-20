import { Basic, Combined, Animated, bounce } from "../shared/styles";
const Home = () => (
  <div>
    <Basic>Sahil Kapoor Personal Website</Basic>
    <Basic>Sahil Kapoor Personal Website</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>Let's bounce.</Animated>
  </div>
);

export default Home;
