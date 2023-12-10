import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { DonorsService } from './donors.service';
import { CreateDonorDto } from './dto/create-donor.dto';
@Controller('donors')
export class DonorsController {
  constructor(private readonly donorsService: DonorsService) {}
  @Get()
  findAll() {
    return this.donorsService.findAll();
  }
  
  @Post('register')
  async register(@Body() user: CreateDonorDto) {
    const person = await this.donorsService.findByUsername(user.username)
    if (person == null) {
      return this.donorsService.create(user);
    } else {
      return null
    }
  }

  @Post('login')
 async logindata(@Body() data: any){
    const decryptData = this.donorsService.decrypt(data);
    console.log(decryptData, 'decryptDataaaaaaa')
    const { username, password } =  decryptData
    const user = await this.donorsService.findByUsername(username)
    if (user && user.password == password) {
      return user;
    } else {
      return null
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donorsService.findOne(+id);
  }

}
