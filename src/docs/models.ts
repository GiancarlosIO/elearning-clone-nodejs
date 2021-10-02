export const id = {
  type: 'string',
  description: 'An identifier for the current resourece',
  example: 1,
};
export const createStrintModel = (description: string, example?: string) => ({
  type: 'string',
  description,
  example: example || '',
});
export const createBoolean = (description: string) => ({
  type: 'boolean',
  description,
  example: true,
});
export const createNumber = (description: string, example?: number) => ({
  type: 'number',
  description,
  example: example || 0,
});

export const categoryModel = {
  type: 'object',
  properties: {
    id,
    name: createStrintModel('name of the category'),
    url: createStrintModel('absolute url of the current category'),
    slug: createStrintModel('slug of the category'),
    order: createNumber('use this to order the category list'),
    isActive: createBoolean('verify if the category is active or not'),
  },
};

export const subCategoryModel = {
  type: 'object',
  properties: {
    id,
    isActive: createBoolean('verifiy if the subCategory is active or not'),
    name: createStrintModel('name of the subCategory'),
    order: createNumber('use this to order the sub category list'),
    slug: createStrintModel('slug of the subCategory'),
    url: createStrintModel('absolute url of the current category'),
    categoryId: createNumber('id of the father category'),
  },
};

const courseBaseModel = {
  type: 'object',
  properties: {
    id,
    isActive: createBoolean('Current active status of the course'),
    coverImage: createStrintModel(
      'cover image of the course',
      'http://www.images.com/course/1'
    ),
    title: createStrintModel('Course title', 'Cursos de photoshop'),
    prices: {
      type: 'object',
      properties: {
        price: createNumber('current price of the course (with discount)'),
        realPrice: createNumber('real price of the course'),
        discount: createNumber('percentage of discount'),
        currencySymbol: createStrintModel('currency symbol'),
      },
    },
  },
};

export const courseModel = {
  ...courseBaseModel,
  properties: {
    ...courseBaseModel.properties,
    subTitle: createStrintModel('subtitle of the current course'),
    trailer: createStrintModel('trailer of the course'),
    description: createStrintModel('description of the current course'),
    duration: createNumber('duration of the course in miliseconds'),
    categories: {
      type: 'array',
      items: categoryModel,
    },
    subCategories: {
      type: 'array',
      items: subCategoryModel,
    },
  },
};

export const coursesByCategoryIdModel = {
  type: 'object',
  properties: {
    ...categoryModel.properties,
    courses: {
      type: 'array',
      items: courseModel,
    },
  },
};

export const coursesBySubCategoryIdModel = {
  type: 'object',
  properties: {
    ...subCategoryModel.properties,
    courses: {
      type: 'array',
      items: courseModel,
    },
  },
};

export const createResponseModel = ($ref: string) => ({
  type: 'object',
  properties: {
    status: createNumber('status code of the response'),
    data: {
      $ref,
    },
  },
});

export const userModel = {
  type: 'object',
  properties: {
    id,
    username: createStrintModel('username of the user'),
    email: createStrintModel('email', 'test@gmail.com'),
    firstName: createStrintModel('name of the current user'),
    lastName: createStrintModel('last name of the user'),
  },
};

export const bannerModel = {
  type: 'object',
  properties: {
    id,
    isActive: createBoolean('verify if the banner is active or not'),
    expiresAt: createStrintModel('check when the banner expires'),
    position: createNumber('order of the banner'),
    ctaUrl: createStrintModel('url cta of the banner'),
    ctaLabel: createStrintModel('cta label'),
    title: createStrintModel('main title of the banner'),
    subtitle: createStrintModel('sub title of the banner'),
    backgroundImage: createStrintModel('image url of the banners bg'),
  },
};

export const shoppingCartModel = {
  type: 'object',
  properties: {
    id,
    prices: {
      type: 'object',
      properties: {
        totalPrice: createNumber('total price of the cart (with discount)'),
        realTotalPrice: createNumber('real total price (without discount)'),
        discount: createNumber('percentage of discount'),
        currencySymbol: createStrintModel('Currency of the cart', '$'),
      },
    },
    detail: {
      type: 'array',
      items: courseBaseModel,
    },
  },
};