import React from 'react';

function lal() {
  return <div><!-- recipe card grid-->
      <div class="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-5 mb-16">

       <!-- card -->
        <div class="bg-white rounded-md overflow-hidden relative shadow-md">
          <div>
            <img class="w-42" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Recipe Title">
          </div>
          <div class="p-4">
            <h2 class="text-black font-bold text-green-400">Recipe Title</h2>
            <div class="flex justify-between mt-4 mb-4 text-gray-500">
              <div class="flex justify-items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="ml-1 lg:text-xl">30m</span>
              </div>

              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span class="ml-1 lg:text-xl">1-2</span>
              </div>
            </div>
            <p class="text-sm mb-2 text-gray-500">A recipe that's quick and easy to make and super tasty!</p>
            <button class="bg-blue-500/0  text-black font-bold  rounded">
  Buy Now
</button>
          </div>
          <div class="absolute top-0 right-0 mt-4 mr-4 bg-green-400 text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
            <span>Medium</span>
          </div>
        </div></div>;
}

export default lal;
