import { Injectable } from '@nestjs/common';
import { CreateDonorDto } from './dto/create-donor.dto';
import { Repository } from 'typeorm';
import { Donor } from './entities/donor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as crypto from 'crypto';

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
    const secretKey = 'qwert1234!@#$%'
    const algorithm = 'aes-256-cbc';

      const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), Buffer.from('16BYTES_LONG_IV'));
      let decryptedData = decipher.update(data, 'hex', 'utf-8');
      decryptedData += decipher.final('utf-8');
      console.log('Decrypted Data:', decryptedData);
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

  // update(id: number, updateDonorDto: UpdateDonorDto) {
  //   return this.donorRepository.update(id,updateDonorDto)
  // }

  // remove(id: number) {
  //   return this.donorRepository.delete(id)
  // }
}
