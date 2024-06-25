import './App.css';
import Burger from "./components/burger/Burger";
import {useState} from "react";

function App() {
    const [menuActive, setMenuActive] = useState(false)
    
    const items = [
        {value: "Main", href: "/main", icon: "anchor"},
        {value: "Shop", href: "/shop", icon: "shop"},
        {value: "Support", href: "/faq", icon: "support"},
        {value: "Contacts", href: "/contacts", icon: "phone"},
    ]
  return (
    <div className="App">
        <nav>
            <div className="burger_btn" onClick={() => setMenuActive(!menuActive)}>
                <span/>
            </div>
        </nav>
        <main>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dignissimos enim illum iure iusto laboriosam modi nisi pariatur, provident quas quasi recusandae sapiente tenetur unde? Impedit provident sint veritatis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dignissimos enim illum iure iusto laboriosam modi nisi pariatur, provident quas quasi recusandae sapiente tenetur unde? Impedit provident sint veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque in quaerat qui sit. Animi asperiores, blanditiis culpa id itaque mollitia natus qui quia quibusdam similique. Atque ea magni odit quae?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dignissimos enim illum iure iusto laboriosam modi nisi pariatur, provident quas quasi recusandae sapiente tenetur unde? Impedit provident sint veritatis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dignissimos enim illum iure iusto laboriosam modi nisi pariatur, provident quas quasi recusandae sapiente tenetur unde? Impedit provident sint veritatis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dignissimos enim illum iure iusto laboriosam modi nisi pariatur, provident quas quasi recusandae sapiente tenetur unde? Impedit provident sint veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, aspernatur cumque distinctio eos est eveniet excepturi facere fuga impedit in iste minus molestiae nihil numquam odit quibusdam, repellat reprehenderit tempora, temporibus veniam veritatis voluptate. Aliquam beatae cumque ducimus error maxime numquam officiis quasi quod ratione, rem reprehenderit veniam voluptates.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dignissimos enim illum iure iusto laboriosam modi nisi pariatur, provident quas quasi recusandae sapiente tenetur unde? Impedit provident sint veritatis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dignissimos enim illum iure iusto laboriosam modi nisi pariatur, provident quas quasi recusandae sapiente tenetur unde? Impedit provident sint veritatis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dignissimos enim illum iure iusto laboriosam modi nisi pariatur, provident quas quasi recusandae sapiente tenetur unde? Impedit provident sint veritatis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dignissimos enim illum iure iusto laboriosam modi nisi pariatur, provident quas quasi recusandae sapiente tenetur unde? Impedit provident sint veritatis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dignissimos enim illum iure iusto laboriosam modi nisi pariatur, provident quas quasi recusandae sapiente tenetur unde? Impedit provident sint veritatis.</p>
        </main>
        <Burger active={menuActive} setActive={setMenuActive} header={"Burger Menu"} items={items}/>
    </div>
  );
}

export default App;
