# TSD-React-tutorial

In order to acomplish following tasks you can use github codespace.

## 5 points

1. create react application using ***npx create-react-app todo*** command
2. if you want using ***react bootstrap*** execute this command ***npm install react-bootstrap bootstrap*** inside created project and add this import to the **index.js** ***import 'bootstrap/dist/css/bootstrap.min.css';***
3. in App.js create layout for ToDo application similar to the following one. No functionality is required so far but try to use component from bootstrap (buttons, forms, etc.)
![ToDo application layout](https://github.com/user-attachments/assets/2d4c112c-0b51-4a0f-9473-56f296d83ff5)
## 10 points


1. add required functionality (**add task, delete task, view list of tasks, mark task as completed**). You don't have to add new components just do it in **App.js**. If you have problems with forms here is quick reminder how to deal with setting the states up and handling changes:

```
const [test, setTest] = useState("");

function handleTestChange(e) {
    setTest(e.target.value)
}
```
**PRO TIP: you can provide whole object or an array in the state, for example:**
```
const [test, setTest] = useState({
    id: null,
    title: "",
    description: "",
    completed: false
});
```
**but remember, you should have different handlers for handling chnages of different fields of the object like:**
```
function handleTitleChange(e) {
    setTest({
        ...test,
        title: e.target.value
    })
}
```

## 15 points

1. refactor application by breaking the functionality across multiple components (form component, list component, etc.). Use props to pass some information between components like
```
function App() {
    return (
        <Welcome name="John Doe"/>
    );
}

export function Welcome({ name }) {
    return (
        <h1>Welcome, {name}</h1>
    );
}
```
