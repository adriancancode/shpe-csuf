
const vacant = (role, board = "SHPE") => ({
  name: "Vacant",
  role: `${role}  |  ${board}`,
  image: "/placeholder-user.jpg",
  bio: "To be announced",
  board,
});

const leadership = [
  {
    name: "Ruben Marquez",
    role: "President  |  SHPE",
    image: "/headshots/ruben-marquez.jpg",
    bio: "Computer engineering Junior",
    board: "SHPE",
  },
  {
    name: "Carlos Alvarez",
    role: "Internal Vice President  |  SHPE",
    image: "/placeholder-user.jpg",
    bio: "Mechanical Engineering Junior",
    board: "SHPE",
  },
  {
    name: "Juan Rodriguez",
    role: "Vice President  |  SHPE",
    image: "/headshots/juan-rodriguez.jpg",
    bio: "Electrical Engineering Junior",
    board: "SHPE",
  },
  {
    name: "Matias Castellanos",
    role: "Secretary  |  SHPE",
    image: "/headshots/matias-castellano.jpg",
    bio: "Civil Engineering Senior, Spanish Minor",
    board: "SHPE",
  },
  vacant("Treasurer"),
  vacant("Director of Events"),
  vacant("Co-Director of Events"),
  vacant("Co-Director of Events"),
  {
    name: "Jocelyn Mendoza",
    role: "Webmaster  |  SHPE",
    image: "/headshots/jocelyn-mendoza.jpg",
    bio: "Computer Science Senior",
    board: "SHPE",
  },

  vacant("Director", "SHPEtinas"),

{
  name: "Metzli Gonzalez",
  role: "Co-Director  |  SHPEtinas",
  image: "/headshots/metzli-gonzalez.jpeg",
  bio: "Civil Engineering & General Studio Art Double Major, Chicana/o Studies Minor, Senior",
  board: "SHPEtinas",
},

  vacant("Secretary", "SHPEtinas"),
  vacant("Treasurer", "SHPEtinas"),
  vacant("Historian/Public Relations", "SHPEtinas"),
];

export default leadership;
