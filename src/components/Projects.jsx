import React from 'react';
import { FaLink } from "react-icons/fa";

function Projects() {
  return (
    <>
        <div name="Projects" class="min-h-screen bg-gray-100 p-6">
  <h1 class="text-4xl font-bold text-green-700 text-center mb-10">My Projects</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* <!-- Project Card 1 --> */}
    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <div className='flex'>
      <div><h2 class="text-2xl font-semibold mb-2">Smart Contact Manager</h2></div>
      <div className='justify-end items-end pl-15 md:pl-27'>
        </div>
      </div>
      <p class="text-gray-500 mb-2">05/08/2024</p>
      <p class="text-gray-700 mb-4">works as a fronend developer</p>
      <p class="text-gray-600">Developed a cloud-based contact management app using Java, Spring Boot, and MySQL. It features multi-login, email, and SMS integration while ensuring security with Spring Security, encryption, and OTP verification.</p>
    </div>

    {/* <!-- Project Card 2 --> */}
    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <h2 class="text-2xl font-semibold mb-2">Art Gallery</h2>
      <p class="text-gray-500 mb-2">30/10/2024</p>
      <p class="text-gray-700 mb-4">works as a web developer</p>
      <p class="text-gray-600">Art Gallery is a web application built using Java Spring Boot and MySQL. It allows artists to showcase their artwork and users to explore, buy, or interact with art. The platform ensures secure, efficient, and user-friendly art engagement online.</p>
    </div>

    {/* <!-- Project Card 3 --> */}
    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <h2 class="text-2xl font-semibold mb-2">Bank Management System</h2>
      <p class="text-gray-500 mb-2">10/01/2025</p>
      <p class="text-gray-700 mb-4">works as a backend developer</p>
      <p class="text-gray-600">Developed a Java project using Java Database Connectivity (JDBC) with MySQL for data management. Ensured efficient database operations, enabling seamless interaction between the application and the database for data storage and retrieval.</p>
    </div>

  </div>
</div>

    </>
  )
}

export default Projects