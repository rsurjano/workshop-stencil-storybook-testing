import { Component, Host, Prop, h, State } from "@stencil/core";

@Component({
  tag: "demo-text",
  styleUrl: "demo-text.css",
  shadow: true,
})
export class DemoText {
  @Prop() lastname: string;

  @State() isOpened: boolean;

  toggle() {
    this.isOpened = !this.isOpened;
  }

  render() {
    return <Host>{this.lastname}</Host>;
  }
}
