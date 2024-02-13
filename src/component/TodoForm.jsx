import App from "../App"

const TodoForm  = () => {
    const todo =[
        {name: "task 1", privority: "1" , time:"8PM"},
        {name: "task 2", privority: "2" , time:"8AM"},
    ]
    return(
        <div style={{
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            width:"30%",
            height:"30%",
            padding:"5rem",
            border: "3px dashed #ff9600",
        }}>
            <h3>Todo form</h3>
            {todo.map((element) => (
                <div
                    key={element.name}
                    style={{
                        border: "2px solid black",
                        display:"block",
                        marginBottom:"10px",
                    }}
                >
                    {element.name} {element.privority}
                </div>
            ))}
            <input
                type="text"
                placeholder="Add New Ts"
                style={{
                    border:"2px solid black",
                    display:"block",
                }}
            ></input>
     </div>
    )
    
}
export default TodoForm