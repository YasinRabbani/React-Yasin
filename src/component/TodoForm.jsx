const TodoForm =()=> {

  const todo = [
      { name: "task 1", priority: "1" },
  ]

  function deleteText1() {
      var element = document.getElementById("deletetext");
      element.parentNode.removeChild(element);
  }

  function line(){
   document.getElementById("LineText").style.textDecoration="line-through";
   document.getElementById("LineText").style.color="red";
  }

  return(
   <div
    style={{
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        width:"100%",
        height:"100%",
        border:"7px dashed red",
        minHeight:100,
        borderRadius:20,
        
        flexDirection:"column",
        background:"#FF9600",
   }}
   >
      <h1
            style={{ 
              fontSize:"2rem",
            }}>Todo List</h1>
          {todo.map((element,index) => (
              <div key={index}>
                  {element.name} {element.priority}
              </div>
          ))}
          <form>
              <input type="text" name="n" defaultValue="Name:"
              style={{
                  display:"block",
                  marginBottom:10,
                  height:30,
                  borderRadius:6,
                  border:0,
              }}
              >
              </input>
              <input type="text" name="e" defaultValue="Email:"
              style={{
                  display:"block",
                  marginBottom:5,
                  borderRadius:6,
                  height:30,
                  border:0,
              }}
              >
              </input>
              </form>
              
              <button 
              style={{
                  background:"green",
                  marginBottom:5,
                  width:100,
              }}
              >Send</button>
                      <h1 id="LineText"
            style={{
                color:"white",
            }}
            >Add.</h1>
          <button onClick={line} 
            style={{
                width:100,
                background:"blue",
                color:"white",
                fontSize:20,
                marginBottom:20,
           }}
          >Add</button>

              <h1 id="deletetext"
              style={{
                  color:"red",
              }}
              >Delete  text</h1>
          <button onClick={deleteText1} 
              style={{
                width:100,
                background:"red",
            }}
          >Delete</button>
    </div>
  );
};

export default TodoForm;