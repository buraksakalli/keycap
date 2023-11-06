import { Keycap } from "../";

const App = () => {
  return (
    <div>
      <div className="kbd-wrapper">
        <div>
          <Keycap activeKey="1">1</Keycap>
          <Keycap activeKey="2">2</Keycap>
          <Keycap activeKey="3">3</Keycap>
          <Keycap activeKey="4">4</Keycap>
          <Keycap activeKey="5">5</Keycap>
          <Keycap activeKey="6">6</Keycap>
          <Keycap activeKey="7">7</Keycap>
          <Keycap activeKey="8">8</Keycap>
          <Keycap activeKey="9">9</Keycap>
          <Keycap activeKey="0">0</Keycap>
          <Keycap activeKey="-">-</Keycap>
          <Keycap activeKey="=">=</Keycap>
          <Keycap activeKey="Backspace">⌫</Keycap>
        </div>
        <div>
          <Keycap activeKey="Tab">⇥</Keycap>
          <Keycap activeKey="q">Q</Keycap>
          <Keycap activeKey="w">W</Keycap>
          <Keycap activeKey="e">E</Keycap>
          <Keycap activeKey="r">R</Keycap>
          <Keycap activeKey="t">T</Keycap>
          <Keycap activeKey="y">Y</Keycap>
          <Keycap activeKey="u">U</Keycap>
          <Keycap activeKey="i">I</Keycap>
          <Keycap activeKey="o">O</Keycap>
          <Keycap activeKey="p">P</Keycap>
          <Keycap activeKey="[">[</Keycap>
          <Keycap activeKey="]">]</Keycap>
          <Keycap activeKey="\">{"\\"}</Keycap>
        </div>
        <div>
          <Keycap activeKey="CapsLock">⇪</Keycap>
          <Keycap activeKey="a">A</Keycap>
          <Keycap activeKey="s">S</Keycap>
          <Keycap activeKey="d">D</Keycap>
          <Keycap activeKey="f">F</Keycap>
          <Keycap activeKey="g">G</Keycap>
          <Keycap activeKey="h">H</Keycap>
          <Keycap activeKey="j">J</Keycap>
          <Keycap activeKey="k">K</Keycap>
          <Keycap activeKey="l">L</Keycap>
          <Keycap activeKey=";">;</Keycap>
          <Keycap activeKey="'">"</Keycap>
          <Keycap activeKey="Enter">↵</Keycap>
        </div>
        <div>
          <Keycap activeKey="Shift">⇧</Keycap>
          <Keycap activeKey="z">Z</Keycap>
          <Keycap activeKey="x">X</Keycap>
          <Keycap activeKey="c">C</Keycap>
          <Keycap activeKey="v">V</Keycap>
          <Keycap activeKey="b">B</Keycap>
          <Keycap activeKey="n">N</Keycap>
          <Keycap activeKey="m">M</Keycap>
          <Keycap activeKey=",">,</Keycap>
          <Keycap activeKey=".">.</Keycap>
          <Keycap activeKey="/">/</Keycap>
          <Keycap activeKey="Shift">⇧</Keycap>
        </div>
        <div>
          <Keycap activeKey="Control">⌃</Keycap>
          <Keycap activeKey="Alt">⌥</Keycap>
          <Keycap activeKey="Meta">⌘</Keycap>
          <Keycap activeKey="Space">␣</Keycap>
          <Keycap activeKey="Alt">⌥</Keycap>
          <Keycap activeKey="Control">⌃</Keycap>
          <Keycap activeKey="ArrowLeft">←</Keycap>
          <Keycap activeKey="ArrowUp">↑</Keycap>
          <Keycap activeKey="ArrowDown">↓</Keycap>
          <Keycap activeKey="ArrowRight">→</Keycap>
        </div>
      </div>
    </div>
  );
};

export default App;
