// click events

// const Home = () => {

//     const handleClick = () => {
//       console.log('hello ninjas');
//     }

//     const handleClickAgain = (name) => {
//         console.log('hello ' + name);
//       }
  
//     return (
//       <div className="home">
//         <h2>Homepage</h2>
//         <button onClick={handleClick}>Click me</button>
//         <button onClick={ () => {handleClickAgain('mario')} }>Click me again</button>
//       </div>
//     );
//   }

//export default Home;

//----------------------------------------
   

// const Home = () => {

//     const handleClick = (e) => {
//       console.log('hello ninjas', e);
//     }
  
//     const handleClickAgain = (name, e) => {
//       console.log('hello ' + name, e.target);
//     }
  
//     return (
//       <div className="home">
//         <h2>Homepage</h2>
//         <button onClick={handleClick}>Click me</button>
//         <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
//       </div>
//     );
//   }
   
//   export default Home;

//---------------------------------------------

// Using State (useState hook)

// import { useState } from "react";

// const Home = () => {
//   // let name = 'mario';
//   const [name, setName] = useState('mario');
//   const [age, setAge] = useState(25);

//   const handleClick = () => {
//     // name = 'luigi';
//     setName('luigi');
//     setAge(30);
//   }

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>{ name } is { age } years old</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }
 
// export default Home;

//--------------------------------------
 // Props

// import { useState } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   ]);

//     return (
//         <div className="home">
//             <BlogList blog={blogs} title="All Blogs!" />
//         </div>
//     );
// }

//export default Home;



 //-------------------------------------------

// Outputting lists
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

useEffect(() => {
    console.log('use effect ran');
    //console.log(blogs);
    console.log(name);
}, [name]);

return (
  <div className="home">
    <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    <button onClick={() => setName('luigi')}>Change Name</button>
    <p>{ name }</p>
  </div>
);
}
export default Home;

//-----------------------------------

// Fetching Data with useEffect

// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState(null);

// useEffect(() => {
//     fetch('http://localhost:8000/blogs')
//         .then(res => {
//             return res.json()
//         })
//         .then(data => {
//             //console.log(data);
//             setBlogs(data);
//         })
// }, []);

//   return (
//     <div className="home">
//         {blogs && <BlogList blogs={blogs} title="All Blogs" /> } 
//     </div>
//   );
// }
 
// export default Home;

//-------------------------------

// Conditional Loading Message and Handling Fetch Errors

// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch('http://localhost:8000/blogs')
//       .then(res => {
//         if (!res.ok) { // error coming back from server
//           throw Error('could not fetch the data for that resource');
//         } 
//         return res.json();
//       })
//       .then(data => {
//         setIsPending(false);
//         setBlogs(data);
//         setError(null);
//       })
//       .catch(err => {
//         // auto catches network / connection error
//         setIsPending(false);
//         setError(err.message);
//       })
//     }, 1000);
//   }, [])

//   return (
//     <div className="home">
//       { error && <div>{ error }</div> }
//       { isPending && <div>Loading...</div> }
//       { blogs && <BlogList blogs={blogs} /> }
//     </div>
//   );
// }
 
// export default Home;
// export default Home;
