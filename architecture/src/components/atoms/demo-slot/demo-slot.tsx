import { Component, Host, h, State } from "@stencil/core";

@Component({
  tag: "demo-slot",
  styleUrl: "demo-slot.css",
  shadow: true,
})
export class DemoSlot {
  @State() bg: boolean = false;

  changeBg() {
    this.bg = !this.bg;
  }

  render() {
    return (
      <Host style={{ backgroundColor: this.bg ? 'blue' : 'orange', color: 'white'}}>
        <demo-slot-child>PARAGRAPH</demo-slot-child>
        <button onClick={() => this.changeBg()}>CHANGE!</button>
      </Host>
    );
  }
}
