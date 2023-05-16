
import Course from './Course';
import './App.css';

import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Csharp from './images/ccsharp.png'
import KompleWeb from './images/kompleweb.jpg'


function App() {
  return (
    <div className="App">
      
      <Course
        image={Angular}
        title="Angular"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
      />
      <Course
        image={Bootstrap}
        title="Bootstrap 5"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
      />
      <Course
        image={Csharp}
        title="Komple Web"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
      />
      <Course
        image={KompleWeb}
        title="Frontend"
        description="
        
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
      />

    
      
    </div>
  );
}

export default App;
