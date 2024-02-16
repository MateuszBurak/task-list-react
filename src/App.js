import Form from "./Form";
import Title from "./Title";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przejść na Reacta", done: false },
  { id: 2, content: "Zjeść kolację", done: true },
];

const hideDone = false;

function App() {
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
        sectionExtraContent={<Buttons tasks={tasks} hideDone={hideDone} />}
        sectionBody={<Tasks tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
