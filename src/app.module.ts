import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [RoutesModule],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
