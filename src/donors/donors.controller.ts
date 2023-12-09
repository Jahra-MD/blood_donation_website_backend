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
    console.log(user, 'body from frontend')
    return this.donorsService.create(user);
  }

  @Post('login')
 async login(@Body() credentials: { username: string; password: string }){
    const { username, password } = credentials;
    const user = await this.donorsService.findByUsername(username)
    console.log(user, 'user found in db');
    
    if (user && user.password === password) {
      console.log(user, 'user logged in ')
      return user;
    } else {
      console.log('login failed')
      return null
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donorsService.findOne(+id);
  }

}
