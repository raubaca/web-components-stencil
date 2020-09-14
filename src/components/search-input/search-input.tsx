import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'search-input',
  styleUrl: 'search-input.css',
  shadow: true,
})
export class SearchInput {
  render() {
    return (
      <Host>
        <input type="search" class="search-icon" />
      </Host>
    );
  }
}
