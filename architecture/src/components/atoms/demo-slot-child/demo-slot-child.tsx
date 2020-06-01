import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "demo-slot-child",
  styleUrl: "demo-slot-child.css",
  shadow: true,
})
export class DemoSlotChild {
  render() {
    return (
      <Host>
        <div>
          <p>
            <slot></slot>
          </p>
        </div>
      </Host>
    );
  }
}
