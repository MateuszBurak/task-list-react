import { useState } from "react";
import Form from "./Form";
import Title from "./Title";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na Reacta", done: false },
    { id: 2, content: "Zjeść kolację", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <Title
        content="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        sectionBody={<Form />}
      />
      <Section
        title="Lista zadań"
        sectionExtraContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
        sectionBody={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
      />
    </Container>
  );
}

export default App;
