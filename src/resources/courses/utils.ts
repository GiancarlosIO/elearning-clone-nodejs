import faker from 'faker';
// IsActive         bool   `json:"isActive"`
// 	CoverImage       string `json:"coverImage"`
// 	Title            string `json:"title" binding:"required"`
// 	Subtitle         string `json:"subtitle" binding:"required"`
// 	Trailer          string `json:"trailer"`
// 	Description      string `json:"description" binding:"required"`
// 	ShortDescription string `json:"shortDescription" binding:"required"`
// 	Duration         int    `json:"duration" binding:"required"` // seconds
// 	Price            int    `json:"price" binding:"required"`

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
});
