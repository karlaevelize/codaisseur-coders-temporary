"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          title: "A helper hook to remember values by deep equality",
          content:
            "So of course every React hook enthusiast will have had a use-case for a deep (structural) equality check on the dependencies argument, at a certain point in time. Instead of crafting these things every time you need them, or importing a helper library, here's a wonderfully simple helper hook to help you out:",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Clean up your GitHub profile!",
          content:
            "Cleaning up your GitHub profile, and writing good commit messages, can show your future employees that you're a good team player!",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Parcel - Getting started",
          content:
            "Parcel is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration.",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Do components rerender if nested in a useMemo render? (yes)",
          content:
            "Yes, they do (of course). But for some reason, I just hadn't thought of it before (either way), and it made me wonder for a bit yesterday. Conclusion: yes, the virtual dom tree is memoized, but only up to contained component instance references, which will then handle their (re)rendering on their own terms. Another way to think of it: memoization of some virtual dom tree structure doesn't mean that it's excluded from the diffing algorithm, it only means that it's not recomputed (entirely). Here's a small doodle to explore: [https://xopgm.csb.app/](https://xopgm.csb.app/)",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sequelize One-To-One relationships",
          content:
            "Before digging into the aspects of using Sequelize, it is useful to take a step back to consider what happens with a One-To-One relationship. Let's say we have two models, `Foo` and `Bar`. We want to establish a One-To-One relationship between Foo and Bar. We know that in a relational database, this will be done by establishing a foreign key in one of the tables. So in this case, a very relevant question is: in which table do we want this foreign key to be? In other words, do we want `Foo` to have a `barId` column, or should `Bar` have a `fooId` column instead?In principle, both options are a valid way to establish a One-To-One relationship between Foo and Bar. However, when we say something like there is a One-To-One relationship between Foo and Bar, it is unclear whether or not the relationship is mandatory or optional. In other words, can a Foo exist without a Bar? Can a Bar exist without a Foo? The answers to these questions helps figuring out where we want the foreign key column to be. ",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "JavaScript",
          content:
            "JavaScript (/dʒvəˌskrpt/),[6] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
