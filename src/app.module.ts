import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawllingModule } from './crawlling.module';

// const CheerioAPI = cheerio
@Module({
  imports: [CrawllingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
