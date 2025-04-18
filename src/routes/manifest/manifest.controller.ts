import { EnvService } from '@/modules/env/env.service';
import { PrometheusService } from '@/modules/prometheus/prometheus.service';
import { Controller, Get } from '@nestjs/common';
import * as packageJson from '@package';

@Controller('/manifest.json')
export class ManifestController {
  public constructor(
    private readonly prometheusService: PrometheusService,
    private readonly envService: EnvService,
  ) {}

  @Get('/')
  public async get() {
    this.prometheusService.increaseInstallationsCount();

    return {
      id: packageJson.stremio.id,
      version: packageJson.version,
      name: packageJson.stremio.name,
      description: packageJson.stremio.description,
      logo: this.envService.get('APP_URL').concat('/public/images/logo.png'),
      resources: ['catalog', 'meta', 'stream'],
      idPrefixes: ['reflux'],
      types: ['movie', 'series'],
      catalogs: [
        {
          id: 'reflux.featured',
          type: 'movie',
          name: 'Reflux - Lançamentos',
          extra: [
            {
              name: 'genre',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
            {
              name: 'skip',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
          ],
        },
        {
          id: 'reflux.dubbed',
          type: 'movie',
          name: 'Reflux - Dublado',
          extra: [
            {
              name: 'genre',
              isRequired: false,
              options: [
                'Ação',
                'Animação',
                'Anime',
                'Aventura',
                'Biografia',
                'Comédia',
                'Comédia Romântica',
                'Documentário',
                'Drama',
                'Épico',
                'Família',
                'Fantasia',
                'Faroeste',
                'Ficção Científica',
                'Guerra',
                'Histórico',
                'Musical',
                'Policial',
                'Romance',
                'Religioso',
                'Show',
                'Suspense',
                'Terror',
                'Extras',
              ],
              optionsLimit: 1,
            },
            {
              name: 'skip',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
            {
              name: 'search',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
          ],
        },
        {
          id: 'reflux.subtitled',
          type: 'movie',
          name: 'Reflux - Legendado',
          extra: [
            {
              name: 'genre',
              isRequired: false,
              options: [
                'Ação',
                'Animação',
                'Anime',
                'Aventura',
                'Biografia',
                'Comédia',
                'Comédia Romântica',
                'Documentário',
                'Drama',
                'Fantasia',
                'Faroeste',
                'Ficção Científica',
                'Guerra',
                'Histórico',
                'Musical',
                'Romance',
                'Show',
                'Suspense',
                'Terror',
              ],
              optionsLimit: 1,
            },
            {
              name: 'skip',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
            {
              name: 'search',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
          ],
        },
        {
          id: 'reflux.national',
          type: 'movie',
          name: 'Reflux - Nacionais',
          extra: [
            {
              name: 'genre',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
            {
              name: 'skip',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
          ],
        },
        {
          id: 'reflux.2024',
          type: 'movie',
          name: 'Reflux - Melhores de 2024',
          extra: [
            {
              name: 'genre',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
            {
              name: 'skip',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
          ],
        },
        {
          id: 'reflux.2023',
          type: 'movie',
          name: 'Reflux - Melhores de 2023',
          extra: [
            {
              name: 'genre',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
            {
              name: 'skip',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
          ],
        },
        {
          id: 'reflux.2022',
          type: 'movie',
          name: 'Reflux - Melhores de 2022',
          extra: [
            {
              name: 'genre',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
            {
              name: 'skip',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
          ],
        },
        {
          id: 'reflux.2021',
          type: 'movie',
          name: 'Reflux - Melhores de 2021',
          extra: [
            {
              name: 'genre',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
            {
              name: 'skip',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
          ],
        },
        {
          id: 'reflux.featured',
          type: 'series',
          name: 'Reflux - Lançamentos',
          extra: [
            {
              name: 'genre',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
            {
              name: 'skip',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
          ],
        },
        {
          id: 'reflux.tv',
          type: 'series',
          name: 'Reflux - TV',
          extra: [
            {
              name: 'genre',
              isRequired: false,
              options: [
                'Letra - A',
                'Letra - B',
                'Letra - C',
                'Letra - D',
                'Letra - E',
                'Letra - F',
                'Letra - G',
                'Letra - H',
                'Letra - I',
                'Letra - J',
                'Letra - K',
                'Letra - L',
                'Letra - M',
                'Letra - N',
                'Letra - O',
                'Letra - P',
                'Letra - Q',
                'Letra - R',
                'Letra - S',
                'Letra - T',
                'Letra - U',
                'Letra - V',
                'Letra - W',
                'Letra - X',
                'Letra - Y',
                'Letra - Z',
                'Outros',
              ],
              optionsLimit: 1,
            },
            {
              name: 'skip',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
            {
              name: 'search',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
          ],
        },
        {
          id: 'reflux.animes',
          type: 'series',
          name: 'Reflux - Animes',
          extra: [
            {
              name: 'genre',
              isRequired: false,
              options: [
                'Letra - A',
                'Letra - B',
                'Letra - C',
                'Letra - D',
                'Letra - E',
                'Letra - F',
                'Letra - G',
                'Letra - H',
                'Letra - I',
                'Letra - J',
                'Letra - K',
                'Letra - L',
                'Letra - M',
                'Letra - N',
                'Letra - O',
                'Letra - P',
                'Letra - Q',
                'Letra - R',
                'Letra - S',
                'Letra - T',
                'Letra - U',
                'Letra - V',
                'Letra - W',
                'Letra - X',
                'Letra - Y',
                'Letra - Z',
                'Outros',
              ],
              optionsLimit: 1,
            },
            {
              name: 'skip',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
            {
              name: 'search',
              isRequired: false,
              options: [],
              optionsLimit: 1,
            },
          ],
        },
      ],
    };
  }
}
