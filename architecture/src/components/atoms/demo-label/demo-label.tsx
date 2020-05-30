import { Component, Host, h, Prop, State } from "@stencil/core";

@Component({
  tag: "demo-label",
  styleUrl: "demo-label.css",
  shadow: true,
})
export class DemoLabel {
  @Prop() value: string;
  @Prop() lastname: string;
  @State() isOpened: boolean;

  toggle(event: MouseEvent) {
    this.isOpened = !this.isOpened;
    event.stopPropagation();
  }

  render() {
    return (
      <Host>
        <demo-text lastname={this.lastname}></demo-text>
        <span>{this.value}</span>
        <button onClick={(ev) => this.toggle(ev)}>
          {this.isOpened ? "ENCENDIDO" : "APAGADO"}
        </button>
      </Host>
    );
  }
}
