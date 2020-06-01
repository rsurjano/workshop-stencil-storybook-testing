import { Component, Host, h, Watch, Prop, State } from "@stencil/core";

@Component({
  tag: "demo-states",
  styleUrl: "demo-states.css",
  shadow: true,
})
export class DemoStates {
  @Prop() firstName: string;
  @Prop() lastname: string = "workshop";
  @State() isEveris: boolean = false;
  @State() msgIsEveris: "NO" | "SI" = "NO";

  @Watch("firstName")
  verify() {
    if (/everis/.test(this.firstName.toLowerCase())) {
      console.log("everis si");
      this.msgIsEveris = "SI";
    } else {
      console.log("everis no");
      this.msgIsEveris = "NO";
    }
  }

  componentWillLoad() {
    this.verify();
  }

  render() {
    return (
      <Host>
        <label htmlFor="">{this.msgIsEveris}</label>
        <button onClick={() => this.verify()}>Verificar everis</button>
      </Host>
    );
  }
}
