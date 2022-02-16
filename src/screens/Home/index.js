import { green, red } from "@mui/material/colors";
import React from "react";
import Cards from "../../components/card/Cards";
import PrimaryApBar from "../../components/general/navBar/primaryApBar";
import image1 from "../../res/assets/images/paella.jpg";
import image2 from "../../res/assets/images/tshirt.jpg";

export default function Index() {
     const text1 =
          "This impressive paella is a perfect party dish and " +
          "with the mussels, if you like.";
     const text2 =
          "Heat 1/2 cup of the broth in a pot until" +
          "leaving chicken and chorizo in the pan.";
     const text3 =
          "Heat oil in a (14- to 16-inch) paella pan or a" +
          "large, deep skillet over medium-high heat. Add" +
          "chicken, shrimp and chorizo, and cook, stirring" +
          "occasionally until lightly browned, 6 to 8" +
          "minutes. Transfer shrimp to a large plate and set" +
          "aside, leaving chicken and chorizo in the pan.";
     const text4 =
          "Transfer shrimp to a large plate and set" +
          "aside, leaving chicken and chorizo in the pan.";

     const datas = [
          {
               id: 1,
               image: image2,
               avLt: "W",
               txt1: text1,
               txt2: text3,
               avCl: red[400],
          },
          {
               id: 2,
               image: image2,
               avLt: "P",
               txt1: text2,
               txt2: text4,
               avCl: green[500],
          },
     ];
     // console.log("Data", datas);
     return (
          <React.Fragment>
               <PrimaryApBar />
               <div style={{ marginLeft: 30, marginTop: 20, marginBottom: 20 }}>
                    {datas.map((data) => (
                         <div key={data.id}>
                              <Cards
                                   image={data.image}
                                   avLt={data.avLt}
                                   txt1={data.txt1}
                                   txt2={data.txt2}
                                   avCl={data.avCl}
                              />
                              <br />
                         </div>
                    ))}
               </div>
          </React.Fragment>
     );
}
