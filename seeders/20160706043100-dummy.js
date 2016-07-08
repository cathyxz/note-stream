'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Courses', [{
        title: "Mathematical Foundations of Computing",
        catalog_id: "CS 103",
        description: "Mathematical foundations required for computer science, including propositional predicate logic, induction, sets, functions, and relations. Formal language theory, including regular expressions, grammars, finite automata, Turing machines, and NP-completeness. Mathematical rigor, proof techniques, and applications. Prerequisite: 106A or equivalent.",
        semester: "AUT1617"
      }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Person', null, {});
  }
};
