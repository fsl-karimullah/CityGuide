const AdminJSExpress = require("@adminjs/express");
const AdminJS = require("adminjs");
const AdminJSMongoose = require("@adminjs/mongoose");
const express = require("express");
const app = express();
const mongoDB = require("./config/db");
const User = require("./models/User");
const Places = require("./models/Places");
const SavedPlaces = require("./models/SavedPlaces");
const Categories = require("./models/Categories");

AdminJS.registerAdapter(AdminJSMongoose);
app.use("/api/auth", require("./routes/auth/auth"));
app.use("/api/users", require("./routes/auth/users"));
app.use("/api/places", require("./routes/places/place"));

const run = async () => {
  try {
    await mongoDB();

    const contentParent = {
      name: "User Management",
      icon: "Accessibility",
    };
    const PlacesManagement = {
      name: "Places Posts",
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
        },
      ],

      rootPath: "/admin",
      branding: {
        companyName: "City Guide",
      },
    });

    const router = AdminJSExpress.buildRouter(adminJs);
    app.use(adminJs.options.rootPath, router);
    app.listen(8080, () =>
      console.log("AdminJS is under localhost:8080/admin")
    );
  } catch (error) {
    console.log(error);
  }
};

run();
