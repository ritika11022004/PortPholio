import React from "react";

function Achievements() {
  return (
    <>
      <div name="Achievements" className="max-w-screen-2xl containerbg-gray-100 mx-auto mt-2 px-4 md:px-10">
      <div class="min-h-screen  py-10 px-5">
  <h1 class="text-4xl md:text-5xl font-bold text-center text-green-600 mb-12">Achievements</h1>

  <div class="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">

    <div class="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h2 class="text-2xl font-bold text-gray-900 mb-3">Code Art</h2>
      <p class="text-gray-700 leading-relaxed">2nd Position</p>
    </div>

    <div class="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h2 class="text-2xl font-bold text-gray-900 mb-3">Treasure Hunt</h2>
      <p class="text-gray-700 leading-relaxed">2nd Position</p>
    </div>

    <div class="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h2 class="text-2xl font-bold text-gray-900 mb-3">State-Level Research Paper Compition</h2>
      <p class="text-gray-700 leading-relaxed">6th Rank : <span class="font-semibold">AcademiQ</span></p>
    </div>

    <div class="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h2 class="text-2xl font-bold text-gray-900 mb-3">Association</h2>
      <p class="text-gray-700 leading-relaxed">Treasurer</p>
    </div>

  </div>
</div>

      </div>
    </>
  );
}

export default Achievements;
