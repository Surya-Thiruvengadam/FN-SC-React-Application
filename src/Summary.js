import React from "react";
import { ReactComponent as Iconmemory } from "./images/Iconmemory.svg";
import { ReactComponent as Iconvisual } from "./images/icon-visual.svg";
import { ReactComponent as Iconverbal } from "./images/icon-verbal.svg";
import { ReactComponent as Iconreaction } from "./images/icon-reaction.svg";

function Summary() {
  return (
    <div className="summarycon">
      <span className="summary">Summary</span>
      <ul>
        <li className="reaction">
          <Iconreaction /> Reaction{" "}
          <span>
            <b>80</b> / 100
          </span>
        </li>
        <li className="memory">
          {" "}
          <Iconmemory /> Memory{" "}
          <span>
            <b>92</b> / 100
          </span>
        </li>
        <li className="verbal">
          {" "}
          <Iconverbal /> Verbal{" "}
          <span>
            <b>61</b> / 100
          </span>
        </li>
        <li className="visual">
          {" "}
          <Iconvisual /> Visual{" "}
          <span>
            <b>72</b> / 100
          </span>
        </li>
      </ul>
      <button>Continue</button>
    </div>
  );
}

export default Summary;
