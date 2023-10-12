import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import userImg from "./assets/img/user.jpg"
import User from "./components/User";
function App() {

  const userData = {
    img: userImg,
    heading: "This is Heading",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur numquam dolores aut obcaecati reprehender.",
    variant: "light"
  }

  const usersData = [
    {
      img: userImg,
      heading: "This is Heading",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur numquam dolores aut obcaecati reprehender.",
      direction: "row",
      variant: "blue"
    },
    {
      img: userImg,
      heading: "This is Heading",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur numquam dolores aut obcaecati reprehender.",
      direction: "row",
      variant: "blue"
    },
    {
      img: userImg,
      heading: "This is Heading",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur numquam dolores aut obcaecati reprehender.",
      direction: "row-reverse",
      variant: "blue"
    },
    {
      img: userImg,
      heading: "This is Heading",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur numquam dolores aut obcaecati reprehender.",
      direction: "row-reverse",
      variant: "blue"

    },

    {
      img: userImg,
      heading: "This is Heading",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur numquam dolores aut obcaecati reprehender.",
      direction: "row",
      variant: "blue"
    },
    {
      img: userImg,
      heading: "This is Heading",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur numquam dolores aut obcaecati reprehender.",
      direction: "row",
      variant: "blue"
    },

  ]

  return (
    <>
      <section className="user">

        <User userData={userData} />

        <div className="row g-0">

          {
            usersData.map((data, index) => (
              <div className="col-sm-6">
                <User userData={data} md={true} />

              </div>
            ))
          }




        </div>




      </section>
    </>
  );
}

export default App;
