import { Component, Host, h, Prop, State, Watch } from "@stencil/core";

@Component({
  tag: "demo-switcher",
  styleUrl: "demo-switcher.css",
  shadow: true,
})
export class DemoSwitcher {
  @Prop() label: string;
  @Prop() buttonNames: string[] = ["yuri", "putin"];
  @State() buttons = [];

  @Watch("buttonNames")
  updateButton() {
    this.buttons = this.buttonNames;
  }

  remove(idx) {
    this.buttons = this.buttons.slice(0, idx).concat(this.buttons.slice(idx + 1, this.buttons.length))
  }

  componentWillLoad() {
    console.log('component will load')
    this.buttons = this.buttonNames;
  }

  render() {
    return (
      <Host>
        <div>{this.label ? this.label : "NO LABEL"}</div>
        <demo-label value="MY LAST NAME" lastname="GAGARIN"></demo-label>
        {this.buttons.map((buttonStr, idx) => (
          <button onClick={() => this.remove(idx)}>{buttonStr}</button>
        ))}
      </Host>
    );
  }
}
