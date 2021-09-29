import { generateFakeBanner } from '@utils/faker';
import { TController } from '../types';

const bannersController: TController = {
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
    const fakeBanners = Array.from({ length: 20 }).map(generateFakeBanner);

    res.send(fakeBanners);
  },
};

export default bannersController;
