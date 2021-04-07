import { Component, h, Host, Prop } from '@stencil/core';


const sizePixel = {
  big: 160,
  small: 120,
};

const bgColor = {
  magenta: '#e20074',
  white: '#ffffff',
  black: '#000000',
}

@Component({
  tag: 'scale-badge',
  styleUrl: 'badge.css',
  shadow: true,
})
export class Badge {
  @Prop() size: 'big' | 'small' = 'big'
  @Prop() color: 'magenta' | 'white' | 'black' | string = "magenta";
  @Prop() rotation: number = 0;
  
  displayStyle(){
    return `:host {
      --badge-size: ${sizePixel[this.size]}px;
      --badge-color: ${this.color === "magenta" || this.color === "black" || this.color === "white" ? bgColor[this.color] : this.color};
      --badge-rotation: ${this.rotation}deg; 
  }`;
}



  render() {
    return (
      <Host>
        <style>{this.displayStyle()}</style>
        <div class="circle">
		      <div class="badge">
			      <slot></slot>
		      </div>
	      </div>
      </Host>
    );
  }
}
