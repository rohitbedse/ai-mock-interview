/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai_mock_owner:npg_CY32PwvLeKfI@ep-tiny-dew-a5vp8r7t-pooler.us-east-2.aws.neon.tech/ai_mock?sslmode=require',
    }
  };