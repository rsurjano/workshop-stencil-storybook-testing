import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

export type TypeTarget = '_self' | '_blank' | '_parent' | '_top';

export type colorBrand =
  | 'brand1'
  | 'brand2'
  | 'brand3'
  | 'grey-100';

@Component({
  tag: 'demo-link',
  styleUrl: 'demo-link.scss',
  shadow: true,
})
export class DemoLink {
  @Event() linkClicked: EventEmitter;
  @Prop() ariaLabel = 'Default';
  @Prop() color: colorBrand = 'brand1';
  @Prop() target?: TypeTarget = '_self';
  @Prop() href: string;
  @Prop() disable = false;

  render() {
    const Tag = !this.disable ? 'a' : 'div';

    return (
      <Host>
        <Tag
          class={this.getClassList()}
          onClickCapture={ev => this.click(ev)}
          {...(!this.disable ? { href: this.href } : {})}
          {...(!this.disable ? { target: this.target } : {})}
          {...(!this.disable ? { 'arial-label': this.ariaLabel } : {})}
        >
          <slot />
        </Tag>
      </Host>
    );
  }

  getClassList() {
    return {
      [`${this.color}`]: true,
      [`isDisabled`]: this.disable,
    };
  }

  click(event: MouseEvent) {
    if (!this.disable) {
      event.stopPropagation();
      this.linkClicked.emit();
    }
  }
}
