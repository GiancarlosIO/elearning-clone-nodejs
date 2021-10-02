import {
  courseModel,
  id,
  userModel,
  bannerModel,
  categoryModel,
  coursesByCategoryIdModel,
  subCategoryModel,
  coursesBySubCategoryIdModel,
  shoppingCartModel,
} from './models';

const components = {
  components: {
    schemas: {
      id,
      Course: courseModel,
      Courses: {
        type: 'array',
        items: courseModel,
      },
      User: userModel,
      Banner: bannerModel,
      Banners: {
        type: 'array',
        items: bannerModel,
      },
      Category: categoryModel,
      Categories: {
        type: 'array',
        items: categoryModel,
      },
      CoursesByCategoryId: coursesByCategoryIdModel,
      SubCategory: subCategoryModel,
      SubCategories: {
        type: 'array',
        items: subCategoryModel,
      },
      CoursesBySubCategoryId: coursesBySubCategoryIdModel,
      ShoppingCart: shoppingCartModel,
    },
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-access-token',
      },
    },
  },
};

export default components;
