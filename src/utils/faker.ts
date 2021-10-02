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
  id: faker.datatype.uuid(),
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

// IsActive bool   `json:"isActive"`
// 	Name     string `json:"name" gorm:"unique"`
// 	Order    int    `json:"order"`
// 	Slug     string `json:"slug"`
// 	Url      string `json:"url"
//   CategoryID uint      `json:"categoryId"`
// 	Courses    []*Course `gorm:"many2many:course_sub_categories"`
export const generateFakeSubCategory = (options = { coursesLength: 200 }) => ({
  id: faker.datatype.uuid(),
  isActive: faker.datatype.boolean(),
  name: faker.name.jobArea(),
  order: faker.datatype.number(20),
  slug: faker.lorem.slug(),
  url: faker.internet.url(),
  categoryId: faker.datatype.number(20),
});

// ========================================================================

// Name     string `json:"name"`
// 	Slug     string `json:"slug"`
// 	Url      string `json:"url"`
// 	Order    int    `json:"order"`
// 	IsActive bool   `json:"isActive"`
//   SubCategories []SubCategory `json:"subCategories"`
// 	Courses       []*Course     `gorm:"many2many:course_categories"`
export const generateFakeCategory = (options = { coursesLength: 200 }) => ({
  id: faker.datatype.uuid(),
  name: faker.name.jobArea(),
  url: faker.internet.url(),
  slug: faker.lorem.slug(),
  order: faker.datatype.number(200),
  isActive: faker.datatype.boolean(),
  // subCategories: Array.from({ length: 10 }).map(generateFakeSubCategory),
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
export const generateFakeCourse = (minimalist: boolean = false) => {
  const course = {
    id: faker.datatype.uuid(),
    isActive: faker.datatype.boolean(),
    coverImage: faker.image.imageUrl(480, 480),
    title: faker.name.title(),
    prices: {
      price: faker.finance.amount(9, 60),
      realPrice: faker.finance.amount(100, 200),
      discount: 20,
      currencySymbol: faker.finance.currencySymbol(),
    },
  };

  if (!minimalist) {
    return {
      ...course,
      subTitle: faker.lorem.paragraph(),
      trailer: 'https://www.youtube.com/watch?v=gvkqT_Uoahw',
      description: faker.lorem.paragraphs(10),
      duration: faker.datatype.number(9999),
      categories: Array.from({ length: 2 }).map(generateFakeCategory),
      subCategories: Array.from({ length: 2 }).map(generateFakeSubCategory),
    };
  }
  return course;
};

export const generateFakeCourses = (
  options: { length?: number; minimalist?: boolean } = {
    length: 200,
    minimalist: false,
  }
) =>
  Array.from({ length: options.length }).map(() =>
    generateFakeCourse(options.minimalist)
  );

// ========================================================================

export const generateShoppingCartFake = () => ({
  id: faker.datatype.uuid(),
  prices: {
    totalPrice: faker.finance.amount(700, 800),
    realTotalPrice: faker.finance.amount(1200, 2000),
    discount: faker.datatype.number({
      max: 40,
      min: 20,
    }),
    currencySymbol: faker.finance.currencySymbol(),
  },
  detail: generateFakeCourses({
    length: 10,
    minimalist: true,
  }),
});
