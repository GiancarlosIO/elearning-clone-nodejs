import faker from 'faker';

// ========================================================================
// IsActive bool `json:"isActive"`
// // ex: 2022-12-30T00:00:00-07:00
// ExpiresAt       time.Time `json:"expiresAt"`
// Position        int       `json:"position"`
// CtaUrl          string    `json:"ctaUrl"`
// CtaLabel        string    `json:"ctaLabel"`
// Title           string    `json:"title"`
// Subtitle        string    `json:"subtitle"`
// BackgroundImage string    `json:"backgroundImage"`

export const generateFakeBanner = () => ({
  isActive: faker.datatype.boolean(),
  expiresAt: faker.date.future(),
  position: faker.datatype.number(20),
  ctaUrl: faker.internet.url(),
  ctaLabel: faker.lorem.words(2),
  title: faker.name.title(),
  subtitle: faker.lorem.paragraph(),
  backgroundImage: faker.image.imageUrl(1920, 180),
});

// ========================================================================
// Name     string `json:"name"`
// 	Slug     string `json:"slug"`
// 	Url      string `json:"url"`
// 	Order    int    `json:"order"`
// 	IsActive bool   `json:"isActive"`
//   SubCategories []SubCategory `json:"subCategories"`
// 	Courses       []*Course     `gorm:"many2many:course_categories"`

export const generateFakeCategory = () => ({
  name: faker.name.jobArea(),
  url: faker.internet.url(),
  slug: faker.lorem.slug(),
  order: faker.datatype.number(200),
  isActive: faker.datatype.boolean(),
});

// ========================================================================

// IsActive         bool   `json:"isActive"`
// 	CoverImage       string `json:"coverImage"`
// 	Title            string `json:"title" binding:"required"`
// 	Subtitle         string `json:"subtitle" binding:"required"`
// 	Trailer          string `json:"trailer"`
// 	Description      string `json:"description" binding:"required"`
// 	ShortDescription string `json:"shortDescription" binding:"required"`
// 	Duration         int    `json:"duration" binding:"required"` // seconds
// 	Price            int    `json:"price" binding:"required"`
// Sections      []CourseSection `json:"sections"`
// 	Categories    []*Category     `json:"categories" gorm:"many2many:course_categories"`
// 	SubCategories []*SubCategory  `json:"subCategories" gorm:"many2many:course_sub_categories"

export const generateFakeCourse = () => ({
  id: faker.datatype.uuid(),
  isActive: faker.datatype.boolean(),
  coverImage: faker.image.imageUrl(480, 480),
  title: faker.name.title(),
  subTitle: faker.lorem.paragraph(),
  trailer: 'https://www.youtube.com/watch?v=gvkqT_Uoahw',
  description: faker.lorem.paragraphs(10),
  duration: faker.datatype.number(9999),
  prices: {
    price: faker.commerce.price(9, 20),
    realPrice: faker.commerce.price(60, 100),
    discount: 20,
    currencySymbol: faker.finance.currencySymbol(),
  },
  categories: Array.from({ length: 2 }).map(generateFakeCategory),
});

// ========================================================================

// IsActive bool   `json:"isActive"`
// 	Name     string `json:"name" gorm:"unique"`
// 	Order    int    `json:"order"`
// 	Slug     string `json:"slug"`
// 	Url      string `json:"url"

//   CategoryID uint      `json:"categoryId"`
// 	Courses    []*Course `gorm:"many2many:course_sub_categories"`
export const createFakeSubCategory = () => ({
  isActive: faker.datatype.boolean(),
  name: faker.name.jobArea(),
  order: faker.datatype.number(20),
  slug: faker.lorem.slug(),
  url: faker.internet.url(),
  categoryId: faker.datatype.number(20),
});
