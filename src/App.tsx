import { createSignal, type Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { randomizeWord } from "./utilities/word";

const App: Component = () => {
  const [name, setName] = createSignal<string>();

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <div class="flex flex-col">
          <div class="flex gap-2">
            <input
              type="text"
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <button
              class="btn btn-primary"
              onClick={() => console.log(randomizeWord(name() || ""))}
            >
              {"Randomize Name"}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
