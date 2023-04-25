import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
export default function Home() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
    <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Reminder</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <Button onClick={() => toggleColorMode()}>
        {colorMode == "dark" ? <FaSun /> : <FaMoon />}
      </Button>{" "}
    </div>
  </div>
</nav>
    </div>
    <Container maxW="7xl">
      <Auth />
      <AddTodo />
      <TodoList />
    </Container>
    </>
  );
}
