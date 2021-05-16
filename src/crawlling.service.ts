import { HttpService, Injectable } from '@nestjs/common';
import crawler from 'crawler';

@Injectable()
export class CrawllingService {
  private readonly api: cheerio.CheerioAPI;
  private readonly http: HttpService;

  async getPageInfo(): Promise<any> {
    return new Promise((resolve, reject) => {
      const c = new crawler({
        maxConnections: 10,
        callback: (error, res, done) => {
          if (error) {
            console.log(error);
            reject();
            done();
          }
          const $ = res.$;
          const data = $('p')
            .map(function () {
              return $(this).text();
            })
            .get()
            .filter((i) => i.includes('Marcas: '))
            .map((brand: string) =>
              brand.split('Marcas: ')[1].replace(/\r\n/g, '').trim(),
            )
            .reduce((acc, i) => {
              const splited = i
                .split(',')
                .map((i) => i.trim().replace(/\s\s+/g, ' '));
              return [...acc, ...splited];
            }, []);
          resolve(data);
          done();
        },
      });

      c.queue('http://www.pea.org.br/empresas.htm');
    });
  }
}
