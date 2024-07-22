import { LightningElement } from 'lwc';
//named import of Lightning Element class this contains all lifecycle hooks 

import xyz from './utils';
//Default import
import {someConst,gethousetype} from './utils';
//Named Import
import{addTwoNums,multiply} from 'c/serviceComponentExample';
//Name Import from Service CMP
export default class FirstLWC extends LightningElement {
    //There can only be one export from UI controller element, class Name is in PascalCase
    house = new xyz;
    numberofrooms = this.house.getNumberofRooms();
    typeOfHouse = gethousetype(this.house);
    constvalue = someConst;
    total = addTwoNums(4,6);
    multi = multiply(10,5);
}