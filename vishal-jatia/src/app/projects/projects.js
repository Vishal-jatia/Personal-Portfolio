const projects = [
  {
    key: 1,
    name: "PromptKeeper",
    description:
      "Introducing PromptKeeper, the ultimate web app designed to help users store and organize their favorite prompts all in one convenient place. PromptKeeper leverages the power of Google login to offer a seamless and secure experience for its users. Whether it's creative writing prompts, discussion starters, or thought-provoking questions, PromptKeeper allows users to save and categorize their favorite prompts for future use.\
      The app provides a user-friendly interface, allowing users to easily add, edit, and delete prompts within their collection. Users can assign tags or labels to each prompt, enabling efficient categorization and quick retrieval of specific prompts when needed. Additionally, the app incorporates a powerful search functionality, enabling users to quickly locate prompts based on keywords, tags, or specific criteria.",
    type: "WEB DEVELOPMENT",
    startDate: "2023/06/20",
    endDate: "2023/06/23",
    techStack: [],
    codeLink: "https://github.com/Vishal-jatia/PromptShare",
    liveLink: "https://prompt-share-8y911c1h4-vishal-jatia.vercel.app/",
    completed: true,
    image:
      "https://user-images.githubusercontent.com/97461410/248239931-25b2575c-24b0-4018-be04-d0643f8dd90d.png",
  },
  {
    key: 2,
    name: "CourseLink: Ultimate Online Course Manager",
    description:
      "Introducing CourseLink: Your Ultimate Online Course Manager. CourseLink is a cutting-edge web application designed to revolutionize the way you manage and engage with your online learning experience. With CourseLink, you can seamlessly log into your personal account and access a wide range of features that will enhance your learning journey, all in one convenient place.",
    type: "WEB DEVELOPMENT",
    startDate: "2022/09/15",
    endDate: "2022/10/20",
    techStack: [],
    codeLink: "https://github.com/Vishal-jatia/Online-Course-Manager",
    liveLink: "link",
    completed: true,
    image: "/images/projects.png",
  },
  {
    key: 3,
    name: "ColorSense: Real-Life Color Picker",
    description:
      "ColorSense is an innovative color picker device powered by Arduino Uno and equipped with an advanced color sensor. It offers a seamless and intuitive way to identify and capture colors from real-life objects simply by pointing the sensor towards them. With ColorSense, exploring the world of colors becomes an interactive and engaging experience.",
    type: "WEB DEVELOPMENT",
    startDate: "2019/10/12",
    endDate: "2019/11/25",
    techStack: [],
    codeLink: "https://github.com/Vishal-jatia/Color-Sensor-program-Arduino",
    liveLink: "link",
    completed: true,
    image:
      "https://user-images.githubusercontent.com/97461410/248561865-a8669bb2-d53e-4e2b-aaab-9a47f26edf93.jpeg",
  },
  {
    key: 4,
    name: "RealtySpot: A Comprehensive Real Estate Website",
    description:
      "RealtySpot is a state-of-the-art web application designed to revolutionize the way you search for properties. With RealtySpot, you can effortlessly view all the available properties in your desired location and gain access to a wide range of powerful tools to refine your search based on your preferences. Whether you're a homebuyer, an investor, or a real estate enthusiast, RealtySpot is your go-to destination for finding the perfect property.",
    type: "WEB DEVELOPMENT",
    startDate: "2022/09/15",
    endDate: "2022/10/20",
    techStack: [],
    codeLink: "https://github.com/Vishal-jatia/Real-Estate-Management-System",
    liveLink: "",
    completed: true,
    image:
      "https://user-images.githubusercontent.com/97461410/248562869-4ae912cf-4bd4-44fe-abfa-2f84f71da8c1.png",
  },
  {
    key: 5,
    name: "Malaria Management Using AI",
    description:
      "Introducing MalariaMind, an advanced AI model revolutionizing the fight against malaria by leveraging extensive global data analysis. MalariaGuardian analyzes historical malaria cases from around the world and provides actionable insights and effective measures tailored to specific locations to combat various species of mosquitoes. Drawing on a vast database of historical malaria data, MalariaGuardian utilizes machine learning algorithms to identify patterns, trends, and correlations in mosquito-borne disease outbreaks. By considering factors such as climate, geography, mosquito species prevalence, and past intervention strategies, MalariaGuardian generates comprehensive recommendations to help individuals and communities take the most effective measures against different mosquito species.",
    type: "WEB DEVELOPMENT",
    startDate: "2023/01/24",
    endDate: "2023/01/26",
    techStack: [],
    codeLink: "https://github.com/Vishal-jatia/Malaria-Ai-Predictor",
    liveLink: "",
    completed: true,
    image:
      "https://user-images.githubusercontent.com/97461410/248460886-6d5099f3-5b88-41a6-bc61-69ba66be96ae.jpg",
  },
];

function custom_sort(a, b) {
  return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
}

projects.sort(custom_sort);

export default projects;
