import { createRoot } from "react-dom/client";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let Faculty = [
  {
    photo: (
      <img src="https://darshan.ac.in/U01/Faculty-Photo/09CEAVB_19042019_063947AM.jpg"></img>
    ),
    name: "Arjun Bala",
    city: "rajkot",
    branch: "computer",
    experience: "15 year"
  },
  {
    photo: (
      <img src="https://darshan.ac.in/U01/Faculty-Photo/07CERGV_19042019_063838AM.jpg"></img>
    ),
    name: "Rupesh Vaishnav",
    city: "jamnagar",
    branch: "mechanical",
    experience: "7 year"
  },
  {
    photo: (
      <img src="https://darshan.ac.in/U01/Faculty-Photo/10CEMSP_19042019_064012AM.jpg"></img>
    ),
    name: "Mayur Padia",
    city: "morbi",
    branch: "computer",
    experience: "9 year"
  },
  {
    photo: (
      <img src="https://darshan.ac.in/U01/Faculty-Photo/CEVMS01_19042019_082302AM.jpg"></img>
    ),
    name: "Vijay Shekhat",
    city: "baroda",
    branch: "civil",
    experience: "12 year"
  }
];

let detail = Faculty.map((fctl) => {
  return (
    <td>
      {fctl.photo}
      <br />
      {fctl.name}
      <br />
      {fctl.city}
      <br />
      {fctl.branch}
      <br />
      {fctl.experience}
      <br />
    </td>
  );
});

root.render(
  <>
    <h1>Hii</h1>

    <table>
      <tr>{detail}</tr>
    </table>
  </>
);
