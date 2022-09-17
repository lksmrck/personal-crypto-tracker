import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [posts, setPosts] = useState([]);

  const getBlogPost = () => {
    axios
      .get("http://localhost:8000/api/")
      .then((response) => {
        console.log(response);
        const data = response.data;
        setPosts(data);
        console.log("Data has been received");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    getBlogPost();
  }, []);

  const onChangeFirstInput = (e) => {
    setFirstInput(e.target.value);
  };
  const onChangeSecondInput = (e) => {
    setSecondInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const payload = {
      title: firstInput,
      body: secondInput,
    };
    setFirstInput("");
    setSecondInput("");
    //We want to make POST request (we are sending data to the server)
    axios({
      url: "http://localhost:8000/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to server");
      })
      .catch(() => {
        console.log("Internal server error");
      });
    getBlogPost();
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div className="form-input">
          <input type="text" name="title" onChange={onChangeFirstInput} />
        </div>
        <div className="form-input">
          <textarea
            name="body"
            cols="30"
            rows="10"
            onChange={onChangeSecondInput}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
      <div className="blog-posts">
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
