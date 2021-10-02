import Main from "../../layouts/Main";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";

const CreateClass = () => {
  return (
    <Main title={"Create a Class"} description={"Create a Class"}>
      <SideBar />
      <Header />
    </Main>
  );
};

export default CreateClass;
