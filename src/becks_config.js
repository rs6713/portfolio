const IMAGE="image"
const VIDEO="video"
const WEBSITE="website"
const PDF="pdf"
const WEBAPP="Web App"
const DESIGN="Design"
const FULLSTACK="FullStack"
const ML="Machine Learning"
const FRONT="FrontEnd"
const AI="AI"
const CHAT="Chatbots"
const ART="Art"
const NLP="NLP"
const CV="Computer Vision"
const HW="Hardware"
const PHONEAPP="Phone App"
const RESEARCH="Research"

const PCONSTS = {
  IMAGE, VIDEO, WEBSITE, PDF
}

const projectList=[
  {
    title:"FoodFinder",
    description:"MEAN Stack web application developed so that personal assistants at an office can track and update company centric restaurants.",
    features:[
      "View known restaurants either in list view or overlayed onto Google Maps",
      "Filter shown restaurants according to: price, rating, food type, occasion, and outdoor seating",
      "Add new restaurants to restaurant database",
      "Add reviews and ratings to existing restaurants"
    ],
    date:"Oct 2017",
    media:[
      {type:IMAGE, title:"Selected Restaurant Info" , file: "foodfinder/1.png"},
      {type:IMAGE, title:"Restaurant List View" , file: "foodfinder/2.png"},
      {type:IMAGE, title:"Restaurant Filter Options" , file: "foodfinder/3.png"},
      {type:IMAGE, title:"Add New Restaurant" , file: "foodfinder/4.png"},
      {type:IMAGE, title:"Restaurant Map View" , file: "foodfinder/5.png"},
    ],
    links: [],//"nbcfoodfinder.herokuapp.com"
    categories:[ WEBAPP, DESIGN, FULLSTACK],
    takeaways:[],
    tools:["Angular", "HTML5", "CSS3", "Node.js", "Express", "MongoDB", "Google Maps API"],
  },
  {
    title:"Student Last Minute Essay Writer",
    description:"Too many university students find themselves in the predicament ",
    features:[
      "Alerts if your face moved away from the screen (lost concentration)",
     "Search for all pdfs and images related to the subject", 
     "Parse documents and return specific topic or positioned paragraphs", 
     "Countdown timer, word-count, text-editor, informs users if they are on track to finish in time.",
     "Emotions tracker and encourages users to take a break, when extended periods of negative emotion"
    ],
    date:"Jan 2018",
    media:[
      {type:IMAGE, title:"Paper Topic Entry Page" , file: "cambridge/1.png"},
      {type:IMAGE, title:"Main View" , file: "cambridge/2.png"},
      {type:IMAGE, title:"Essay Emotions Tracker" , file: "cambridge/3.png"},
      {type:IMAGE, title:"Negative Emotions Alert" , file: "cambridge/4.png"},
      {type:IMAGE, title:"Topic Images Returned" , file: "cambridge/5.png"},
    ],
    links:[],
    categories:[ML, WEBAPP, FRONT,FULLSTACK],
    takeaways:[],
    tools:["Angular", "HTML5", "CSS3", "Node.js", "Express", "Microsoft Azure Text Analytics API", "Microsoft Azure Bing Search API", "JSON Parser"],
  },
  {
    title:"MyCalendar",
    description:"FrontEnd Interface for people to view a pre-defined company Microsoft Outlook calendar",
    features:[
      "Routed to Microsoft Outlook Account Login",
      "View all events, with displayed (downloadable) attachments in single UI",
      "Year, month and day views",
      "Filtering of different event types: Public, Talk, Demo",
    ],
    date:"Jan 2018",
    media:[
      {type:IMAGE, title:"Final Website", descrip:"Year view", file: "calendar/1.png"},
      {type:IMAGE, title:"Final Website", descrip:"Month view",file: "calendar/2.png"},
      {type:IMAGE, title:"Final Website", descrip:"Month view",file: "calendar/3.png"},
      {type:IMAGE, title:"Prototype Design #1", file: "calendar/4.png"},
      {type:IMAGE, title:"Prototype Design #2", file: "calendar/5.png"},
      {type:IMAGE, title:"Prototype Design #3", file: "calendar/6.png"},
      {type:IMAGE, title:"Prototype Design #4", file: "calendar/7.png"},
      {type:IMAGE, title:"Prototype Design #5", file: "calendar/8.png"},
    ],
    links:["graphicalendar.herokuapp.com"],
    categories:[WEBAPP, DESIGN, FRONT],
    takeaways:[],
    tools:["Angular", "HTML5", "CSS3", "Node.js", "Express", "Microsoft Exchange API", "Adobe Illustrator"],
  },
  {
    title:"PhonyConvo",
    description:"HackCity - @nexmo challenge winner. Practice conversations",
    features:[
      "Chatbot users can interact with over the phone",
      "Texted their conversation UUID",
      "Review conversation analytics via web interface",
      "Phone conversation is recorded, transcribed and then semantic and topic analysed."
    ],
    date:"Feb 2018",
    media:[
      {type:IMAGE, title:"Conversation Analytics Screen", descrip:"24 hours", file: "fitbit4voice.png"},
      {type:IMAGE, title:"Award Ceremony", descrip:"Nexmo Challenge Winner", file: "hackcity.jpg"},
    ],
    links:[],
    categories:[CHAT, FRONT, ML, AI],
    takeaways:[
      "How to integrate multiple technologies to perform multiple stages of data collection and analysis",
      "Creating webhooks"
    ],
    tools:["Angular", "HTML5", "CSS3", "Node.js", "Express", "Nexmo", "Google Cloud Speech to Text", "Microsoft Azure Text Analytics" ],
  },
  {
    title:"Portrait Drawings",
    description:"Teaching myself (slowly) how to draw photorealistic faces.",
    date:"2017-18",
    features:[],
    media:[
      {type:IMAGE, title:"", descrip:"20 minutes", date:"", file: "art/claye.png"},
      {type:IMAGE, title:"CatJoe", descrip:"10 hours",date:"", file: "art/catjoe.png"},
      {type:IMAGE, title:"Joe", descrip:"1 hour", date:"",file: "art/joe.png"},
      {type:IMAGE, title:"Sam", descrip:"8 hours",date:"", file: "art/sam.png"},
      {type:IMAGE, title:"Lizzie", descrip:"6 hours",date:"", file: "art/lizzie.png"}
    ],
    links:["https://www.instagram.com/becksdraws/"],
    categories:[ART],
    takeaways:[
      "How to draw slightly better than terrible."
    ],
    tools:[ "Sketching", "Pencils", "Crayons" ],
  },
  {
    title:"Logo Designs",
    description:"Improving my design and Illustrator capabilities by attempting various logo design challenges.",
    features:[],
    date:"2017-18",
    media:[
      {type:IMAGE, title:"Autonomous Vehicle Company", descrip:"1 hour", date:"", file: "logos/autocar.jpg"},
      {type:IMAGE, title:"Music Store", descrip:"1 hour", date:"", file: "logos/banjos.jpg"},
      {type:IMAGE, title:"Space Themed Company", descrip:"1 hour", date:"", file: "logos/comet1.png"},
      {type:IMAGE, title:"Space Themed Company", descrip:"10 minutes", date:"", file: "logos/comet2.jpg"}
    ],
    links:["https://www.instagram.com/becksdraws/"],
    categories:[ART, DESIGN],
    takeaways:[],
    tools:["Adobe Illustrator", "Sketching", "Pencils" ],
  },
  {
    title:"AI Informational Media",
    description:"Creating a series of displays and informational documents to help prepare the workforce for an AI infused future.",
    features:[
      "Short videos to dispel common AI myths",
      "Uses of AI in Media Research and Presentation Piece"
    ],
    date:"May 2018",
    media:[
      {type:VIDEO, title:"Law Of Accelerating Progress", date:"May 2018", file: "progress.mov"},
      {type:VIDEO, title:"AI History", date:"May 2018", file: "newold.mov"},
      {type:VIDEO, title:"Robots Take Over The World", date:"May 2018", file: "evil.mov"},
      {type:VIDEO, title:"AI Induced Unemployment", date:"May 2018", file: "jobs.mov"},
      {type:PDF, title:"AI Media Uses Document", date:"April 2018", file: "AI Media Uses.pdf"},
    ],
    links:[],
    categories:[DESIGN, RESEARCH],
    takeaways:["“Everything should be made as simple as possible, but no simpler.”" ],
    tools:["Adobe InDesign", "Adobe Illustrator", "Adobe AfterEffects"],
  },
  {
    title:"Worst UX Ever",
    description:"MLH Prime: Europe Regional - Worst UX Mini Competition Winner. A competition to make the worst UI Possible in 20 minutes.",
    features:["Terribleness", "Dat boi memes"],
    media:[

    ],
    links:[],
    date:"April 2017",
    categories:[WEBAPP, DESIGN, FRONT],
    takeaways:[
      "Answering mathematic multiplication questions via DAT BOI Memes is an inefficient medium."
    ],
    tools:[ "HTML5", "CSS3" ],
  },
  {
    title:"W-W-Robbie-D?",
    description:"A humourous simple front-end application to answer the question: what would robbie (our Future Academy Mentor) do? A parting gift at the end of our internship",
    features:[
      "Randomly chosen Robbie phrases","Spinning head with different customisations"
    ],
    media:[
      {type:IMAGE, file: "robbie/1.png"},
      {type:IMAGE, file: "robbie/2.png"},
      {type:IMAGE, file: "robbie/3.png"},
    ],
    date:"Sep 2016",
    links:[],
    categories:[WEBAPP, DESIGN, FRONT],
    takeaways:[],
    tools:[ "HTML5", "CSS3", "Javascript", "hosting" ],
  },
  {
    title:"Ditto",
    description:"2017 Brumhack - Unspecified Award.  Web application POC, a location based reminder application",
    features:[
      "Front end interface to create reminder notes connected to specified locations", 
      "Ability to draw notification circles around these pointers",
      "Tracking of geolocation and use of Notifications API to send reminders"
   ],
    date:"March 2017",
    media:[
      {type:IMAGE, title:"", descrip:"", date:"", file: "ditto.jpg"},
      {type:IMAGE, title:"", descrip:"", date:"", file: "brum/1.png"},
      {type:IMAGE, title:"", descrip:"", date:"", file: "brum/2.png"},    
      {type:IMAGE, title:"", descrip:"", date:"", file: "brum/3.png"},    
      {type:IMAGE, title:"", descrip:"", date:"", file: "brum/4.png"},    
      {type:IMAGE, title:"", descrip:"", date:"", file: "brum/5.png"},          
    ],
    links:[],
    categories:[WEBAPP, DESIGN, FRONT],
    takeaways:[],
    tools:[ "HTML5", "CSS3", "Google Maps API", "Notification API" ],
  },
  {
    title:"Sesame",
    description:"Health Insurance and Work Contact Parser for the Disabled. Concatenates plethora of document information to that most relevant to the disabled using machine learning/AI. ",
    features:["Highlights and returns passages relevant to disability according to detected keywords", "Trained on example sentences, performs sentiment analysis of policies","Attempts to give document an overall disability friendliness rating"],
    date:"May 2018",
    media:[
      {type:IMAGE, title:"", descrip:"", date:"", file: "sesame/1.png"},
      {type:IMAGE, title:"", descrip:"", date:"", file: "sesame/2.png"},    
      {type:IMAGE, title:"", descrip:"", date:"", file: "sesame/3.png"},       
    ],
    links:[],
    categories:[NLP, AI, ML],
    takeaways:[
      "Researching the needs and issues faced by the disabled community",
      "Wider knowledge of the NLTK library and the utilisation of shallow learning in Python"
    ],
    tools:[ "scikit-learn", "NLTK", "Python 3" ],
  },
  {
    title:"InforMED",
    description:"Chatbot to help guide infusion patients throughout their treatment developed at the 'Future Proofing Healthcare: Infusion Day Hackathon'. ",
    features:["Access to communities, advice, relevant appointment information", "Chatbot web interface and phone interface"],
    date:"May 2018",
    media:[
      {type:IMAGE, title:"", descrip:"", date:"", file: "informed/1.png"},
      {type:IMAGE, title:"", descrip:"", date:"", file: "informed/2.png"}, 
    ],
    links:[],
    categories:[AI, WEBAPP, CHAT, FRONT],
    takeaways:[
      "Researching and learning about the problems faced in modernifying health care services.",
      "How to develop an Amazon LexBot with a web interface"
    ],
    tools:["Amazon Incognito", "Amazon LexBots", "HTML5", "Node.js", "Angular", "CSS3", "Nexmo" , "problem solving"],
  },
  {
    title:"MEng Final Year Project",
    description:"Learning assocation between Pedestrian Images and their Natural Language Descriptions  ",
    features:["Word2Vec to create word embeddings", "PCA/LDA to downsize sentence vectors", "Convolutional Neural Networks to create image feature vectors", "Auto-Encoders to transform sentence vectors to matching dimension", "Transfer learning performed on pre-trained image NNs", "Final convolutional neural network t"],
    media:[
      {type:PDF, title:"", descrip:"", date:"", file: "finalyear/final_report.pdf"},
      {type:IMAGE, title:"", descrip:"", date:"", file: "finalyear/autoencodereduceextend.png"}, 
      {type:IMAGE, title:"", descrip:"", date:"", file: "finalyear/finalresultsreduce.png"}, 
      {type:IMAGE, title:"", descrip:"", date:"", file: "finalyear/imageEncoder.png"}, 
      {type:IMAGE, title:"", descrip:"", date:"", file: "finalyear/lomovggalex.png"}, 
      {type:IMAGE, title:"", descrip:"", date:"", file: "finalyear/lomovsreductions.png"}, 
      {type:IMAGE, title:"", descrip:"", date:"", file: "finalyear/pcacompare.png"}, 
      {type:IMAGE, title:"", descrip:"", date:"", file: "finalyear/sentenceEncoder.png"}, 
      {type:IMAGE, title:"", descrip:"", date:"", file: "finalyear/twoChannel.png"}, 
    ],
    date:"2016-17",
    links:[],
    categories:[ML, AI, NLP, CV, RESEARCH],
    takeaways:[
      "The use of a variety of network models: convulational neural networks and autoencoders to derive feature representations",
      "The use of word Embeddings to produce natural language vector representations.",
      "How to maintain good generalisation and critically analyse network results.",
      "How to design complex machine learning pipelines and produce extensive researched report written in Latex",
      "How to automate MATLAB processes using BASH and python scripts"
    ],
    tools:["MATLAB", "Word2Vec", "Bash", "Python", "Latex"],
  }, 
  {
    title:"Programmable LED Array",
    description:"20x5 RGB LED array controllable from an Android App over WIFI",
    features:[
      "Android App on which can draw light patterns to map to the LEDS",
      "Bluetooth controlled 20x5 RGB LED array connected to an Arduino Mega using multi-plexing to reduce number of inputs required"
    ],
    date:"2016-17",
    media:[
      {type:IMAGE,  file: "ledarray/leds.jpg"},
      {type:IMAGE,  file: "ledarray/electronics.jpeg"},
      {type:IMAGE, title:"Android App", descrip:"Control LED array config", file: "ledarray/app.png"},
    ],
    links:[],
    categories:[PHONEAPP, HW],
    takeaways:[],
    tools:[ "soldering", "Android Studio", "Java", "Arduino", "C"],
  },
  {
    title:"Should I go home?",
    description:"ICHack 2017: Runner Up most Ridiculous Hack. A web app trained on Reddit responses, to indicate whether a person should go home on a night out.",
    features:[
      "Web app where users can answer questions about their current night out to determine if they should go home.",
      "Custom Microsoft Azure Regression Model to predict 'go-home-score' based on users mulitple choice selections",
    ],
    date:"Feb 2017",
    media:[
      {type:IMAGE,  file: "ichack/1.png"},
      {type:IMAGE,  file: "ichack/2.png"},
    ],
    links:[],
    categories:[ML, AI, WEBAPP],
    takeaways:[],
    tools:[ "Microsoft Azure Machine Learning Studio", "Node.js", "HTML5", "CSS3", "Javascript", "Reddit"],
  },
  {
    title:"Portfolio Website",
    description:"React Website to display information about myself, projects, where I see myself going and general freetime project to explore new web-tech-techniques",
    features:[
      "Timeline showing how I currently consider my career future",
      "Projects page displaying almost all of my past "
    ],
    date:"June 2018",
    media:[
      {type:WEBSITE, title:"Personal Portfolio Website", descrip:"200 hours",  url: "https://rs6713.github.io/portfolio/"},
      {type:IMAGE, title:"Cenral Website", descrip:"",  file: "website.png"}
    ],
    links:["rs6713.github.io/portfolio/"],
    categories:[WEBAPP,  DESIGN, FRONT],
    takeaways:[],
    tools:[ "React", "HTML5", "CSS3", "Javascript", "Node.js", "Adobe Illustrator", "Pencils", "Express"],
  },
];



var experiences=[
  {
    role:"Summer Intern",
    startdate: new Date(2015, 6),
    enddate:new Date(2015, 9),
    company:"BluWireless",
    responsibilities:[
      "Hardware design, worked primarily in System Verilog.",
      "Developed a Direct Memory Access module and several memory models.",
      "Creation of makefiles, bash scripts and managing remote repositories.",
    ],
    skills:["System Verilog", "Mercurial"]
  },
  {
    role:"Social Secretary",
    startdate:new Date(2015,8),
    enddate:new Date(2016,5),
    company:"Imperial College London, Womens Rugby",
    responsibilities:[
      "Team member recruitment: posters, taster sessions.",
      "Organisation of socials throughout the year: costumes, venue hiring."
    ],
    media:[],
    skills:[
      "Organisation and Planning", "Friendliness"
    ]
  },
  {
    role:"Future Academy Resident",
    startdate:new Date(2016,6),
    enddate:new Date(2016,9),
    company:"AKQA",
    media:[],
    responsibilities:[
      "Series of Startup-like project sprints",
      "Immersed ourselves in problems and created, prototyped and tested solutions before pitching to clients.",
      "Developed prototypes using Adobe Aftereffects, Photoshop",
      "Pitched several presentations to clients using Keynote."
    ],
    skills:["Research","Adobe Illustrator", "Keynote", "Adobe AfterEffects", "Speech Delivery", "Design", "Agile", "Sprint Planning", "Ideation Processes", "User Surveys"]
  },
  {
    role:"Gender-Variant Officer",
    startdate:new Date(2016,8),
    enddate:new Date(2017,5),
    company:"Imperial College London, Queer Society",
    responsibilities:[
      "In charge of the organising and running trans socials",
      "Providing support and advice for Imperials trans students.",
    ],
    skills:["Organisation and Planning"]
  },
  
  {
    role:"Junior Software Developer",
    startdate:new Date(2018,8),
    enddate:new Date(2019,2),
    media:[],
    company:"SohoStrategy",
    responsibilities:[
      "Developed a Dataset CMS with a React Frontend, Nodejs Backend & PostgreSQL Database. ",
      "Setup systems on AWS, with automated CodeDeploy via CircleCI",
      "Created several data scrapers using ScraPy."
    ],
    skills:[
      "NodeJS","CircleCI","AWS RDS,EC2,CodeDeploy","ScrapingHub","SASS", "HTML5", "CSS3", "Javascript ES6", "React", "Python3", "ScraPy","PostGresQL"
    ]
  },
  
  {
    role:"Prototype Developer / Innovations Analyst",
    startdate:new Date(2017,7),
    enddate:new Date(2018,6),
    media:[],
    company:"NBCUniversal",
    responsibilities:[
      "Research new emerging technologies: create reports.",
      "Provide technical expertise and create demos to raise company tech awareness.",
      "Develop aesthetic prototypes: wireframes and UIs for new ideas and demos",
      "Develop functional prototypes:MEAN stack web applications, unity games and machine learning applications.",
    ],
    skills:[
      "Research","Adobe Illustrator", "Adobe AfterEffects", "HTML5", "CSS3", "Javascript ES6", "Angular", "React", "Python", "ML & AI"
    ]
  },
  {
    role:"Robotics Course Assistant Developer",
    startdate:new Date(2013, 5),
    enddate: new Date(2014, 7),
    media:[],
    company:"Dame Alice Owens",
    responsibilities:[
      "Developed a robotics curriculum for the Year 7-9 Students.",
      "Assisted in constructing 20 robots controlled by arduinos",
      "Helped adapt the freeware minibloq graphics and code to extend the functionality: coloured LED Strips, remote controls, obstacle detection and line following. ",
    ],
    skills:["C++", "Adobe Photoshop", "Soldering", "Arduino", "Robot Assembly", "Design"]
  },
  {
    role:"Electronics and Information Student, 2:1",
    startdate:new Date(2013, 9),
    enddate:new Date(2017, 9),
    company:"Imperial College London",
    responsibilities:[
      "MEng Final Year Project: Learning the association between pedestrian images and their natural language descriptions.",
      "Took courses focusing on: Machine Learning, Pattern Recognition, Robotics, Algorithms, High Performance Computing and Graphics",
    ],
    skills:["C++", "Soldering", "Verilog","Machine Learning", "AI", "SQL","High Performance Computing", "Advanced Robotics", "F#", "User Interface Design", "Algorithms"]
  }
  /*,
  {
    role:"Secondary School Student",
    startdate:new Date(2006, 9),
    enddate:new Date(2013, 9),
    company:"Dame Alice Owens",
    responsibilities:[],
    skills:["A* Mathematics", "A* Further Mathematics","A* Biology","A* Chemistry","A* Physics",]
  },*/
  ]

// Languages data config
var languages=[
  {
      icon:'html.png',
      lang:"HTML",
      years:"6 Years - 2012/18",
      projects:["Multiple MEAN Stack Websites"]
  },
  {
      icon:'css.png',
      lang:"CSS",
      years:"6 Years - 2012/18",
      projects:["Multiple MEAN Stack Websites"]
  },
  {
      icon:'js.png',
      lang:"JavaScript",
      years:"3 Years - 2015/18",
      projects:["Multiple MEAN Stack Websites"]
  },
  {
      icon:'angular.png',
      lang:"Angular",
      years:"1 Year - 2017/18",
      projects:[]
  },
  {
      icon:'node.png',
      lang:"Node",
      years:"2 Years - 2016/18",
      projects:[]
  },
  {
      icon:'fsharp.png',
      lang:"F Sharp",
      years:"1 Year - 2016/17",
      projects:[]
  },
  {
      icon:'c++.png',
      lang:"C++",
      years:"2 Years - 2014/16",
      projects:["High performance Computing Concurrency", "Compiler", "Suduko Solver"]
  },
  {
      icon:'python.png',
      lang:"Python",
      years:"3 Years - 2015/18",
      projects:[]
  },
  {
      icon:'tensorflow.png',
      lang:"TensorFlow",
      years:"1 Year - 2017/18",
      projects:[]
  }
];

export {languages, experiences, projectList, PCONSTS};