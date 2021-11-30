export const Constants = {
  IN_CYPRESS_TEST: window.Cypress !== undefined,
  COLOR: {
    LIGHT_GREEN: "#A2E1D0",
    DARK_GREEN: "#6BAE9B",
    GREEN: "#7DCBB5",
    WHITE: "#e9e9ff",
    DARK_BLUE: "#373B53",
    TEAL: "#B5FFEA",
    GRAY: "#E5E5E5",
    PINK: "#eb34c0",
    LIGHT_PINK: "#e663c6",
  },
  HEADER_HEIGHT: "80px",
  SIDEBAR_WIDTH: "80px",
  EMPTY_MODULE: {
    title: "",
    description: "",
    public: true,
    creator: undefined,
    steps: [],
  },
  MOCK_MODULE: {
    title: "Mock Module",
    description: "This module is used for testing and development",
    public: true,
    creator: "someteacherIDhere",
    steps: [
      {
        type: "text",
        data: {
          // Some kind of text data here (title, description, etc.)
        },
      },
      {
        type: "video",
        data: {
          // Some kind of reference to a video stored somewhere in Firebase and maybe a video title
        },
      },
      {
        type: "quiz",
        data: {
          // Some kind of quiz data here (array of questions, title, etc.)
        },
      },
    ],
  },
};
