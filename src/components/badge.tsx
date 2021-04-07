import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'scale-badge',
  styleUrl: 'badge.css',
  shadow: true,
})
export class Badge {
  
  render() {
    
    return (
      <Host>
        <div class="circle">
		      <div class="badge">
			      <slot></slot>
		      </div>
	      </div>
      </Host>
    );
  }
}
