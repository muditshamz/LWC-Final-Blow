//Default Export
export default class house{
    constructor(){
        this.numberofrooms = 3;
        this.type = 'flat';
    }
    getNumberofRooms(){
        return this.numberofrooms;
    }
}
//Named Export
export function gethousetype(house){
    return `The House Type Is ${house.type}`;
}
export const someConst = 3.14;