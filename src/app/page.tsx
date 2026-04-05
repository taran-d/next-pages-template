import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { DynamicForm } from '../features/DynamicForm/DynamicForm';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <DynamicForm />
    </>
  );
}