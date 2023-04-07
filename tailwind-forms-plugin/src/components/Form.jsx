import React from "react";

const Form = () => {
  return (
    <form
      action="/login"
      method="POST"
      className="border border-gray-400 p-5 rounded shadow-lg space-y-5"
      // className="border border-gray-400 p-5 rounded shadow-lg space-y-5 [&_label]:mb-4"
    >
      <div>
        <label for="email" className="block">
          Email:
        </label>
        <input type="email" id="email" name="email" required />
      </div>

      <div>
        <label for="password" className="block">
          Password:
        </label>
        <input type="password" id="password" name="password" required />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-600 p-1 rounded text-white"
      >
        Login
      </button>
    </form>
  );
};

export default Form;
