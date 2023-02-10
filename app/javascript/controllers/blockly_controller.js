import { Controller } from "@hotwired/stimulus";
import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";
import hljs from "highlight.js";

// Connects to data-controller="blockly"
export default class extends Controller {
  static targets = ["runCode", "container", "code_output"];

  connect() {
    console.log("Connected!");
    this.workspace = Blockly.inject(this.containerTarget, {
      toolbox: this.toolbox,
    });
    javascriptGenerator.addReservedWords("code");
    this.createVariablesForWorkspace();

    this.workspace.addChangeListener(this.updateCode.bind(this));
  }

  createVariablesForWorkspace() {
    let createVariables = ["counter", "timesToRun", "wordsToPrint"];
    createVariables.forEach((variableName) => {
      this.workspace.createVariable(variableName);
    });
  }

  updateCode(event) {
    this.code = javascriptGenerator.workspaceToCode(this.workspace);
    this.code_outputTarget.innerHTML = hljs.highlight(this.code, {
      language: "javascript",
    }).value;
  }

  runCode(event) {
    event.preventDefault();
    console.log("button clicked");

    try {
      console.log(this.code);
      eval(this.code);
    } catch (e) {
      console.error(e);
    }
  }

  toolbox = {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "variables_get",
      },
      {
        kind: "block",
        type: "variables_set",
      },
      {
        kind: "block",
        type: "controls_if",
      },
      {
        kind: "block",
        type: "controls_repeat_ext",
      },
      {
        kind: "block",
        type: "logic_compare",
      },
      {
        kind: "block",
        type: "math_number",
      },
      {
        kind: "block",
        type: "math_arithmetic",
      },
      {
        kind: "block",
        type: "text",
      },
      {
        kind: "block",
        type: "text_print",
      },
    ],
  };
}