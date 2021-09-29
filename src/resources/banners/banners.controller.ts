import faker from 'faker';
import { RequestHandler } from 'express';

type TBannersController = Record<string, RequestHandler>;
const bannersController = {
  async getAll(req, res) {
    // IsActive bool `json:"isActive"`
    // // ex: 2022-12-30T00:00:00-07:00
    // ExpiresAt       time.Time `json:"expiresAt"`
    // Position        int       `json:"position"`
    // CtaUrl          string    `json:"ctaUrl"`
    // CtaLabel        string    `json:"ctaLabel"`
    // Title           string    `json:"title"`
    // Subtitle        string    `json:"subtitle"`
    // BackgroundImage string    `json:"backgroundImage"`
    const fakeBanners = Array.from({ length: 20 }).map((_, index) => ({
      isActive: faker.datatype.boolean(),
      expiresAt: faker.date.future(),
      position: faker.datatype.number(20),
      ctaUrl: faker.internet.url(),
      ctaLabel: faker.lorem.words(2),
      title: faker.name.title(),
      subtitle: faker.lorem.paragraph(),
      backgroundImage: faker.image.imageUrl(1920, 180),
    }));

    res.send(fakeBanners);
  },
};

export default bannersController;
