import "./App.css";
import Done from "@mui/icons-material/Done";
import Close from "@mui/icons-material/Close";
import Delete from "@mui/icons-material/Delete";
import { useState } from "react";

function App() {
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [size, setSize] = useState(0);

    const onDoneClick = () => {
        setTodoList((oldList) => [
            ...oldList,
            { text: text, isChecked: false },
        ]);
        setText("");
    };

    const onCloseClick = () => [setText("")];

    const onTextChange = (e) => {
        setText(e.target.value);
    };

    const onDeleteItem = (item) => {
        setTodoList(oldList => 
            oldList.filter(curr => curr.text !== item.text)
        )
        setSize(size-1)
    }

    const checkItem = (item) => {
        const l = todoList.length;
        const index = todoList.indexOf(item);
        setTodoList([
            { ...todoList[index], isChecked: true },
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1, l),
        ]);
    };

    const CheckList = () => {
        let list = [];
        if (todoList && size <= todoList.length) {
            list = [...todoList].reverse();
            setSize(todoList.length);
        } else list = [...todoList];
        return (
            <div className="app_checklist">
                {list.map((elem, index) => {
                    return (
                        <div className="app_checkitem_container">
                            <div key={index} className="app_check_item">
                                <input
                                    type={"checkbox"}
                                    disabled={elem.isChecked}
                                    checked={elem.isChecked}
                                    value={elem.text}
                                    onChange={() => {
                                        checkItem(elem);
                                    }}
                                />
                                <label
                                    className={
                                        elem.isChecked
                                            ? "app_check_item_done"
                                            : ""
                                    }
                                >
                                    {elem.text}
                                </label>
                            </div>
                            <Delete className="delete_icon" onClick={()=>{onDeleteItem(elem)}} />
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
