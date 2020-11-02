const User = require("../schema/userSchema");

const users = [
  { id: "1", name: "jaffar", email: "asf" },
  { id: "2", name: "jaffar Raza", email: "asfa" },
  { id: "3", name: "jaffar dar", email: "asfs" },
];

var resolver = {
  Users: () => User.find({}),

  UserById: (args) => {
    return users.find((x) => x.id === args.id);
  },
  // for Mutation
  createUser: (args) => {
    const newUser = new User({
      name: args.name,
      email: args.email,
    });
    newUser.save()
    return newUser
  },
};

module.exports = resolver;
