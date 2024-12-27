import React from "react";

const Courses = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Our Courses</h2>
      <ul className="list-disc pl-6 max-w-md mx-auto">
        <li className="mb-2">Introduction to Programming</li>
        <li className="mb-2">Web Development</li>
        <li className="mb-2">Database Management</li>
        <li className="mb-2">Network Security</li>
      </ul>
    </div>
  );
};

export default Courses;