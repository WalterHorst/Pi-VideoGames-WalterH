import "./Loader.css";

const Loader = () => {
  return (
    <div class="vader">
      <div class="shadow"></div>
      <div class="head">
        <div class="helmet">
          <span class="left"></span>
          <span class="right"></span>
        </div>
        <div class="eyes">
          <span class="left"></span>
          <span class="right"></span>
        </div>
        <span class="grill">
          <span class="left"></span>
          <span class="center"></span>
          <span class="right"></span>
        </span>
        <span class="mask">
          <span class="top"></span>
          <span class="left"></span>
          <span class="center"></span>
          <span class="right"></span>
        </span>
        <span class="line"></span>
      </div>
      <div class="torso">
        <span class="neck">
          <span class="left"></span>
          <span class="center"></span>
          <span class="right"></span>
          <span class="bottom"></span>
        </span>
        <span class="belt">
          <span class="center"></span>
        </span>
        <div class="plate">
          <span class="red_top"></span>
          <span class="red_center"></span>
          <span class="red_bottom"></span>
          <span class="blue"></span>
          <span class="gray"></span>
        </div>
      </div>
      <div class="hand left">
        <span class="hand"></span>
      </div>
      <div class="hand right animation-right">
        <span class="hand"></span>
      </div>
      <div class="legs">
        <span class="left"></span>
        <span class="right"></span>
      </div>
      <div class="boots">
        <span class="left"></span>
        <span class="right"></span>
      </div>
      <div class="sword animation-left">
        <span class="handle"></span>
        <span class="light"></span>
      </div>
    </div>
  );
};
export default Loader;
