import './App.css';
import { UserCard } from './components/UserCard';


const utilisateur = {
  nom: "Doe",
  prenom: "John",
  email: "john.doe@example.com",
  ImageUrl: "https://m.media-amazon.com/images/I/410IBmKrs-L.jpg",
 }

function App() {
  return (
    <div>
        <UserCard user={utilisateur}/>
    </div>
  );
}

export default App;
