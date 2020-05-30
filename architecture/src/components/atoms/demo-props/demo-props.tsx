import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "demo-props",
  styleUrl: "demo-props.css",
  shadow: true,
})
export class DemoProps {
  @Prop() city: string;
  @Prop() age: number;
  @Prop({ reflect: true }) country: string = 'Peru';
  @Prop({ reflect: false }) province: string = 'Arequipa';

  getAge() {
    const demoPropsEl = document.querySelector("demo-props");
    console.log("value of demoPropsEl.city -> ", demoPropsEl.city);
    console.log("value of demoPropsEl.age -> ", demoPropsEl.age);
  }

  render() {
    this.getAge();
    return <Host>demo-props</Host>;
  }
}
