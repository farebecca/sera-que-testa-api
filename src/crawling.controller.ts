import { Controller, Get } from '@nestjs/common';
import { CrawllingService } from './crawlling.service';

@Controller('info')
export class CrawllingController {
  constructor(private readonly service: CrawllingService) {}

  @Get()
  async getInfo(): Promise<any> {
    const data = await this.service.getPageInfo();
    console.log(data);
    return data;
  }
}
