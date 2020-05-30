import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'demo-text',
  styleUrl: 'demo-text.css',
  shadow: true,
})
export class DemoText {

  @Prop() lastname: string;

  render() {
    return (
      <Host>{this.lastname}</Host>
    );
  }

}
