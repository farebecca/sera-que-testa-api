import { Module } from '@nestjs/common';
import { CrawllingController } from './crawling.controller';
import { CrawllingService } from './crawlling.service';

@Module({
  controllers: [CrawllingController],
  providers: [CrawllingService],
})
export class CrawllingModule {}
