import { newSpecPage } from '@stencil/core/testing';
import { Badge } from './badge';


it ("should reflect attributes", async () => {
    let page = await newSpecPage({
        components: [Badge],
        html:`<scale-badge
                size ="big"
                color ="magenta"
                rotation ="15">
              </scale-badge>`
    });

    expect(page.rootInstance.size).toBe("big");
    expect(page.rootInstance.color).toBe("magenta");
    expect(page.rootInstance.rotation).toBe(15);
})

it ("Should add 10 to the rotation", async () => {
    const badge = new Badge(); 
    badge.rotation = 10;
    badge.add10ToRotation();
    expect(badge.rotation).toBe(20);
});


it ("correct texbox size", async () => {
    let page = await newSpecPage({
        components: [Badge],
        html:`<scale-badge
                size ="big"
                color ="magenta"
                rotation ="15">
              </scale-badge>`
    });

    expect(page.rootInstance.className).toBe("big");
    expect(page.rootInstance.color).toBe("magenta");
    expect(page.rootInstance.rotation).toBe(15);
})