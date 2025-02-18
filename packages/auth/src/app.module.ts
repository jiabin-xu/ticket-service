import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'nestjs-prisma';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [
    AuthModule,
    PrismaModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
