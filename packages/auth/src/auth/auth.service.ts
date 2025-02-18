import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';
import { LoginDto, RegisterDto } from './dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { username: loginDto.username },
    });

    if (
      user &&
      (await bcrypt.hash(loginDto.password, user.salt)) === user.password
    ) {
      const payload = { username: user.username, sub: user.userId };
      console.log('payload :>> ', payload);
      return {
        access_token: this.jwtService.sign(payload),
      };
    }

    throw new Error('Invalid credentials');
  }

  async register(registerDto: RegisterDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(registerDto.password, salt);
    await this.prisma.user.create({
      data: {
        username: registerDto.username,
        password: hashedPassword,
        salt,
      },
    });

    return {
      state: 'success',
    };
  }
}
