import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {
    ptag = this.template.querySelector('h1');
    ptag.innerHTML = 'Updated Title';
}