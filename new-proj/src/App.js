import "./App.css";
import Done from "@mui/icons-material/Done";
import Close from "@mui/icons-material/Close";
import { useState } from "react";

function App() {
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);
    let size=0;

    const onDoneClick = () => {
        console.log("onDoneCLick", text);
        const t = todoList;
        t.push(text);
        // t.push()
        setTodoList(t);
        setText("");
    };

    const onCloseClick = () => [setText("")];

    const onTextChange = (e) => {
        setText(e.target.value);
    };

    const CheckList = () => {
        let list = [];
        if (todoList && size < todoList.length) {list = todoList.reverse();size=todoList.length}
        else list = todoList;
        return (
            <div className="app_checklist">
                {list.map((elem, index) => {
                    return (
                        <div key={index} className="app_check_item">
                            <input type={"checkbox"} value={elem} />
                            <label>{elem}</label>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="app_container">
            <div className="app_div">
                <div className="appdiv_input">
                    <input
                        type="text"
                        placeholder="add text here"
                        value={text}
                        onChange={onTextChange}
                    />
                    <div className="appdiv_input_icon">
                        <Done onClick={onDoneClick} />
                    </div>
                    <div className="appdiv_input_icon">
                        <Close onClick={onCloseClick} />
                    </div>
                </div>
                <CheckList />
            </div>
        </div>
    );
}

export default App;
