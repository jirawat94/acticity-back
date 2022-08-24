const app = require('./api/index.js')
import * as admin from "firebase-admin";
const start = async () => {
  // DO NOT COMMIT/PUSH USERNAME AND PASSWORD TO Github
  await mongoose.connect(
    config.mongodb.uri, {
    user: config.mongodb.username,
    pass: config.mongodb.password,
    retryWrites: true

  }
  );
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),

  })
};

start();