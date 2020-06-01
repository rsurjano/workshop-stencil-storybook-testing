import { Component, Host, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "demo-events",
  styleUrl: "demo-events.css",
  shadow: true,
})
export class DemoEvents {
  @Event() clickEmit: EventEmitter;

  clickEmitHandler() {
    this.clickEmit.emit("clicked");
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.clickEmitHandler()}>
          Emitir click
        </button>
      </Host>
    );
  }
}
