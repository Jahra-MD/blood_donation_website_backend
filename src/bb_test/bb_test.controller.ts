import { Controller , Get} from '@nestjs/common';
import { BbTestService } from './bb_test.service';
@Controller('/bbtest')
export class BbTestController {
constructor(private BbService : BbTestService){}
@Get() 
getPatients() {
    return this.BbService.getpaitents()
}

}

