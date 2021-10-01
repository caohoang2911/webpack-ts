const { compilerOptions } = require('./base.json');
module.exports = {
  roots: ['<rootDir>/src'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    '^@reducers/(.*)$': '<rootDir>/src/store/reducers/$1',
  },

  // Xác định nơi bỏ các file testing
  // Thông thuòng ra sẽ bỏ các file typescript vào hết thư mục src
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  // Jest sẽ dựa định dạng này để phát hiện các file
  // cần được testing nhé
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // Thằng ts-jest sẽ xác định các file có dạng này
  // Sau đó sẽ biến đổi về dạng nó có thể hiểu được
  // Để chạy jest
  verbose: true,
  // Báo cáo các bài test lúc đang chạy
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  // Ồ ồ cái này cần à nghe, cái này để các hàm
  // của thằng jest trở thành globals
  // không cần phải require hay import khi dùng nữa
};
