import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'scale-badge-component',
  styleUrl: 'badge.css',
  shadow: true,
})
export class MyBadge {
  
  render() {
    
    return (
      <Host>
       <div class="circle">
		   <div class="circle__text">
			   <slot></slot>
		   </div>
	   </div>
      </Host>
    );
  }
}
