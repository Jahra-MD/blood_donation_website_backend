import { Injectable } from '@nestjs/common';
import { CreateDonorDto } from './dto/create-donor.dto';
import { Repository } from 'typeorm';
import { Donor } from './entities/donor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AES, enc } from 'crypto-js';

@Injectable()
export class DonorsService {
  constructor(
    @InjectRepository(Donor)
    private readonly donorRepository: Repository <Donor>,
  ){}
  create(createDonorDto: CreateDonorDto) {
    const donor = new Donor();
    donor.username = createDonorDto.username;
    donor.age = createDonorDto.age;
    donor.gender = createDonorDto.gender;
    donor.blood_group = createDonorDto.blood_group;
    donor.password = createDonorDto.password;
    return this.donorRepository.save(donor)
  }
  
  decrypt(data)
  {
    const encryptedData = data.body;
    const secretKey = 'asdfqwer1234!@#$';
    const decryptedData = AES.decrypt(encryptedData, secretKey).toString(enc.Utf8);
    console.log('Decrypted Data:', decryptedData);
    return JSON.parse(decryptedData);
  }


  findAll() {
    return this.donorRepository.find();
  }

  findOne(id: number) {
    return this.donorRepository.findOneBy({id});
  }

  findByUsername(username: string){
    return this.donorRepository.findOneBy({username})
  }

}
