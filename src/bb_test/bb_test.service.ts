import { Injectable } from '@nestjs/common';

@Injectable()
export class BbTestService {
    private patients =[
        {name: 'A', age: 21 , bloodGroup : 'A+'},
        {name: 'b', age: 27 , bloodGroup : 'b+'},
        {name: 'c', age: 24 , bloodGroup : 'O+'},
        {name: 'd', age: 31 , bloodGroup : 'AB+'},
    ]
    getpaitents()
    {
         return this.patients;
    }
}
