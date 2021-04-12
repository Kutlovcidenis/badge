import { Component, h, Host, Prop } from '@stencil/core';


const sizePixel = {
  big: 160,
  small: 120,
};

const bigTextBox ={
  width: 126.5,
  height: 96,
}

const smallTextBox ={
  width: 86,
  height: 88,
}

const bgColor = {
  magenta: '#E20074',
  white: '#ffffff',
  black: '#000000',
}


@Component({
  tag: 'scale-badge',
  styleUrl: 'badge.css',
  shadow: true,
})


export class Badge {
  @Prop({mutable: true}) size: 'big' | 'small' = 'big'
  @Prop({mutable: true}) color: 'magenta' | 'white' | 'black' | string = "magenta";
  @Prop({mutable: true}) rotation: number = 0;
  
  displayStyle(){
    return `:host {
      --badge-size: ${sizePixel[this.size]}px;
      --badge-color: ${this.color === "magenta" || this.color === "black" || this.color === "white" ? bgColor[this.color] : this.color};
      --badge-rotation: ${this.rotation}deg; 
      --badge-text-width:${this.size === "big" ? bigTextBox.width : smallTextBox.width}px;
      --badge-text-height:${this.size === "big" ? bigTextBox.height : smallTextBox.height}px;
    }`;
  }

  add10ToRotation(){
    this.rotation += 10;
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
