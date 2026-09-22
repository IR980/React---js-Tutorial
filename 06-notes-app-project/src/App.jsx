import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState(" ");
  const [details, setDetails] = useState();
  const [tasks, setTasks] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const newAddTasks = [...tasks];
    newAddTasks.push({ title, details });
    setTasks(newAddTasks);
    // console.log(newAddTasks);
    // console.log(tasks);
    //  newAddTasks.push(... tasks);
    // console.log(title,details);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    // console.log("note deleted");
    const newAddTasks = [...tasks];
    // console.log(idx);
    newAddTasks.splice(idx,1);
    setTasks(newAddTasks);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Form Section */}
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-start gap-4 p-5 sm:p-8 md:p-10 lg:p-12"
      >
        <input
          className="w-full rounded border-2 bg-white px-4 py-2 font-medium text-black outline-none sm:px-5 sm:py-3"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            // console.log(e.target.value);
            setTitle(e.target.value);
          }}
        />

        <textarea
          className="h-28 w-full resize-none rounded border-2 bg-white px-4 py-2 font-medium text-black outline-none sm:h-32 sm:px-5"
          placeholder="Write details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button
          type="submit"
          className="w-full rounded bg-white px-5 py-2 font-medium text-black transition hover:bg-gray-200 sm:w-auto sm:min-w-40"
        >
          Add Notes
        </button>
      </form>

      {/* Notes Section */}
      <div className="px-5 pb-2 sm:px-8 md:px-10 lg:px-12">
        <h2 className="text-2xl font-bold sm:text-3xl">Recent Notes</h2>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {tasks.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative flex w-60 flex-col rounded-2xl bg-cover bg-center bg-[url('https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg')] p-5"
              >
                {/* Note Content */}
                <div className="w-full">
                  <h2 className="wrap-break-word text-xl font-bold text-black">
                    {elem.title}
                  </h2>

                  <p className="mt-2 w-full wrap-break-word whitespace-normal text-left text-sm leading-6 text-gray-700">
                    {elem.details}
                  </p>
                </div>

                {/* Delete Button */}
                <button 
                  onClick={()=>{
                    deleteNote(idx)
                  }} 
                  className="mt-6 w-full rounded-3xl bg-red-500 py-1 font-bold text-white transition hover:bg-red-300">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
