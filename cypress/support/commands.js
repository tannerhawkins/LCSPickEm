import { classDataDb, modulesDb, userDataDb } from "../../src/data/firebase";

const teacherAccountInfo = {
  accountType: "teacher",
  classList: [
    {
      cid: "CsC8yxKXd1IbALpDAOFL",
      className: "Test Class 1",
    },
    {
      cid: "Zz666EQiFLXecsIJUUGi",
      className: "Test Class 2",
    },
  ],
  displayName: "Test Teacher",
  email: "testteacher@apa.com",
  moduleList: [
    {
      description: "Testing",
      mid: "aOrljPVgVSPtAlOh4W63",
      title: "Test Module 1",
    },
    {
      description: "Test",
      mid: "aZC5gvZstpTZmkh9xRMA",
      title: "Test Module 2",
    },
  ],
  uid: "wOosY8ZSs4TbXuYgdamaIprEOR02",
};

const studentAccountInfo = {
  email: "teststudent@apa.com",
  classList: [
    {
      cid: "CsC8yxKXd1IbALpDAOFL",
      className: "Test Class 1",
      modules: ["aOrljPVgVSPtAlOh4W63"],
    },
    {
      cid: "Zz666EQiFLXecsIJUUGi",
      className: "Test Class 2",
      modules: ["aZC5gvZstpTZmkh9xRMA"],
    },
  ],
  displayName: `Test Student`,
  accountType: "student",
  uid: "nGgCZShjguNmKlepiskkSjyUuq32",
};

const brandNewStudent = {
  email: "teststudent2@apa.com",
  classList: [],
  displayName: `Test Student 2`,
  accountType: "student",
  uid: "nGgCZShjguNmKlepiskkSjyU3442",
};

const testMod1 = {
  creator: "wOosY8ZSs4TbXuYgdamaIprEOR02",
  description: "Testing",
  mid: "aOrljPVgVSPtAlOh4W63",
  public: true,
  steps: [
    { order: 0, id: 0, data: "<p>Hello World</p>", type: "text" },
    {
      data: "//www.youtube.com/embed/BPNTC7uZYrI?rel=0",
      id: 1,
      order: 1,
      type: "video",
    },
    {
      id: 2,
      order: 2,
      type: "quiz",
      data: {
        questions: [
          {
            answerOptions: [
              { answerText: "Answer 1", isCorrect: true },
              { answerText: "Answer 2", isCorrect: false },
            ],
            questionText: "Test Question 1",
          },
        ],
      },
    },
  ],
  title: "Test Module 1",
};

const testMod2 = {
  creator: "wOosY8ZSs4TbXuYgdamaIprEOR02",
  description: "Test",
  mid: "aZC5gvZstpTZmkh9xRMA",
  public: true,
  steps: [
    { order: 0, id: 0, data: "<p>Hello World</p>", type: "text" },
    {
      data: "//www.youtube.com/embed/BPNTC7uZYrI?rel=0",
      id: 1,
      order: 1,
      type: "video",
    },
    {
      id: 2,
      order: 2,
      type: "quiz",
      data: {
        questions: [
          {
            answerOptions: [
              { answerText: "Answer 1", isCorrect: true },
              { answerText: "Answer 2", isCorrect: false },
            ],
            questionText: "Test Question 1",
          },
        ],
      },
    },
  ],
  title: "Test Module 2",
};

const testClass1 = {
  cid: "CsC8yxKXd1IbALpDAOFL",
  className: "Test Class 1",
  description: "Description",
  modules: ["aOrljPVgVSPtAlOh4W63"],
  students: [
    {
      displayName: "Test Student",
      email: "teststudent@apa.com",
      uid: "nGgCZShjguNmKlepiskkSjyUuq32",
    },
  ],
};

const testClass2 = {
  cid: "Zz666EQiFLXecsIJUUGi",
  className: "Test Class 2",
  description: "Description",
  modules: ["aZC5gvZstpTZmkh9xRMA"],
  students: [
    {
      displayName: "Test Student",
      email: "teststudent@apa.com",
      uid: "nGgCZShjguNmKlepiskkSjyUuq32",
    },
  ],
};

// realModulesDb.doc("aOrljPVgVSPtAlOh4W63").get().then(result =>
//   modulesDb.doc("aOrljPVgVSPtAlOh4W63").set(result.data())
// )
// realModulesDb.doc("aZC5gvZstpTZmkh9xRMA").get().then(result =>
//   modulesDb.doc("aZC5gvZstpTZmkh9xRMA").set(result.data())
// )
// realClassDb.doc("CsC8yxKXd1IbALpDAOFL").get().then(result =>
//   classDataDb.doc("CsC8yxKXd1IbALpDAOFL").set(result.data())
// )
// realClassDb.doc("Zz666EQiFLXecsIJUUGi").get().then(result =>
//   classDataDb.doc("Zz666EQiFLXecsIJUUGi").set(result.data())
// )
// realUserDataDb.doc("nGgCZShjguNmKlepiskkSjyUuq32").get().then(result => {
//   console.log(result)
//   userDataDb.doc("nGgCZShjguNmKlepiskkSjyUuq32").set(result.data());
// })
// realUserDataDb.doc("wOosY8ZSs4TbXuYgdamaIprEOR02").get().then(result => {
//   userDataDb.doc("wOosY8ZSs4TbXuYgdamaIprEOR02").set(result.data());
// })

Cypress.Commands.add("teacherLogin", () => {
  cy.url().should("contain", "/home");
  cy.get("[data-test=login-logout]").click();
  cy.get("[data-test=email]").type("testteacher@apa.com");
  cy.get("[data-test=password]").type("Testing");
  cy.get("[data-test=submit]").click();
});

Cypress.Commands.add("studentLogin", () => {
  cy.url().should("contain", "/home");
  cy.get("[data-test=login-logout]").click();
  cy.get("[data-test=email]").type("teststudent@apa.com");
  cy.get("[data-test=password]").type("Testing");
  cy.get("[data-test=submit]").click();
});

Cypress.Commands.add("deleteAccount", (user) => {
  userDataDb.deleteDoc(user.uid);
  user.delete();
});

Cypress.Commands.add("resetTeacherAccount", () => {
  userDataDb
    .where("email", "==", "testteacher@apa.com")
    .set(teacherAccountInfo);
});

Cypress.Commands.add("resetStudentAccount", () => {
  userDataDb
    .where("email", "==", "teststudent@apa.com")
    .set(studentAccountInfo);
});

Cypress.Commands.add("addNewStudent", () => {
  userDataDb.doc("nGgCZShjguNmKlepiskkSjyU3442").set(brandNewStudent);
});

Cypress.Commands.add("resetClassDb", async () => {
  classDataDb.doc("CsC8yxKXd1IbALpDAOFL").set(testClass1);
  classDataDb.doc("Zz666EQiFLXecsIJUUGi").set(testClass2);

  await classDataDb.get().then(async (result) => {
    result.docs.forEach(async (doc) => {
      if (
        doc.id != "CsC8yxKXd1IbALpDAOFL" &&
        doc.id != "Zz666EQiFLXecsIJUUGi"
      ) {
        await classDataDb.doc(doc.id).delete();
      }
    });
  });
});

Cypress.Commands.add("resetUserDb", async () => {
  userDataDb.doc("nGgCZShjguNmKlepiskkSjyUuq32").set(studentAccountInfo);
  userDataDb.doc("wOosY8ZSs4TbXuYgdamaIprEOR02").set(teacherAccountInfo);

  await userDataDb.get().then(async (result) => {
    result.docs.forEach(async (doc) => {
      if (
        doc.id != "nGgCZShjguNmKlepiskkSjyUuq32" &&
        doc.id != "wOosY8ZSs4TbXuYgdamaIprEOR02"
      ) {
        await userDataDb.doc(doc.id).delete();
      }
    });
  });
});

Cypress.Commands.add("resetModulesDb", async () => {
  modulesDb.doc("aOrljPVgVSPtAlOh4W63").set(testMod1);
  modulesDb.doc("aZC5gvZstpTZmkh9xRMA").set(testMod2);

  await modulesDb.get().then(async (result) => {
    result.docs.forEach(async (doc) => {
      if (
        doc.id != "aOrljPVgVSPtAlOh4W63" &&
        doc.id != "aZC5gvZstpTZmkh9xRMA"
      ) {
        await modulesDb.doc(doc.id).delete();
      }
    });
  });
});
