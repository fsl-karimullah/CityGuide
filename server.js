const AdminJSExpress = require("@adminjs/express");
const AdminJS = require("adminjs");
const AdminJSMongoose = require("@adminjs/mongoose");
const express = require("express");
const app = express();
const uploadFeature = require("@adminjs/upload");
const mongoDB = require("./config/db");
const User = require("./models/User");
const Places = require("./models/Places");
const SavedPlaces = require("./models/SavedPlaces");
const Categories = require("./models/Categories");
const path = require("path");

AdminJS.registerAdapter(AdminJSMongoose);

const run = async () => {
  try {
    await mongoDB();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/auth", require("./routes/auth/auth"));

    app.use("/api/users", require("./routes/auth/users"));
    app.use("/api/places", require("./routes/places/place"));
    const contentParent = {
      name: "User Management",
      icon: "Accessibility",
    };
    const PlacesManagement = {
      name: "Places Posts",
      icon: "Accessibility",
    };
    const CategoryManagement = {
      name: "Category Management",
      icon: "Accessibility",
    };

    const adminJs = new AdminJS({
      resources: [
        {
          resource: User,
          options: {
            parent: contentParent,
            listProperties: ["email", "username", "roles", "avatar", "date"],
          },
        },
        {
          resource: Places,
          options: { parent: PlacesManagement },
          features: [
            uploadFeature({
              provider: { local: { bucket: path.join(__dirname, "./public") } },
              properties: {
                key: "fileUrl",
                mimeType: "mimeType",
              },
            }),
          ],
        },
        {
          resource: Categories,
          options: { parent: CategoryManagement },
        },
      ],

      rootPath: "/admin",
      branding: {
        companyName: "City Guide",
      },
    });

    const router = AdminJSExpress.buildRouter(adminJs);
    app.use(adminJs.options.rootPath, router);
    app.use("./public", express.static("public"));
    app.listen(8000, () =>
      console.log("AdminJS is under localhost:8000/admin")
    );
  } catch (error) {
    console.log(error);
  }
};

run();
