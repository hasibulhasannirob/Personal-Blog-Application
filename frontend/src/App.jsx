import React from "react"
import { FaSearch, FaPencilAlt, FaEnvelope, FaBell, FaEllipsisH } from 'react-icons/fa';

function App() {


  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYi3bCideE4bEJWspIdYWnbNBUVfDI8qrVHeK_NL7yL2w-7nRM" alt="Logo" className="h-10" />
          <h1 className="ml-3 text-lg font-bold">Logoipsum</h1>
        </div>
        <div className="flex items-center space-x-4">

          <div className="flex space-x-4 bg-black p-4">
            <div className="bg-gray-800 p-2 rounded-full">
              <a href="#">

                <FaSearch className="text-white" size={24} />
              </a>
            </div>
            <div className="bg-gray-800 p-2 rounded-full">
              <a href="#">

                <FaPencilAlt className="text-white" size={24} />
              </a>
            </div>
            <div className="bg-gray-800 p-2 rounded-full">
              <a href="#">

                <FaEnvelope className="text-white" size={24} />
              </a>
            </div>
            <div className="bg-gray-800 p-2 rounded-full">
              <a href="#">

                <FaBell className="text-white" size={24} />
              </a>
            </div>
            <div className="bg-gray-800 p-2 rounded-full">
              <a href="#">

                <FaEllipsisH className="text-white" size={24} />
              </a>
            </div>
          </div>
          <a href="#">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmrQq27a2EWxNrUf-tSVJvWBYup68-bdBChOTCCIvxhSgTLAC" alt="Profile" className="h-10 w-10 rounded-full" />
          </a>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1599936305003-33a90673e0ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner" className="w-full h-56 object-cover" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmrQq27a2EWxNrUf-tSVJvWBYup68-bdBChOTCCIvxhSgTLAC" alt="Profile" className="absolute bottom-0 left-4 transform translate-y-1/2 h-20 w-20 rounded-full border-4 border-white" />
          </div>

          <div className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold mt-4">John Doe</h2>
                <p className="text-gray-600">Astrophotographer · Gamer</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Follow</button>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold">How Astrophotography changed my life</h3>
              <p className="text-gray-700 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quia ullam, deserunt cumque repudiandae assumenda? Voluptatum laboriosam nihil quibusdam obcaecati, repellat placeat dolorum suscipit consequuntur. Vel incidunt explicabo laboriosam veniam autem cupiditate accusamus reprehenderit ipsa aspernatur modi maxime repudiandae, eaque cum ipsum repellat tempore est hic? Nostrum cupiditate animi ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci quia dolores, amet nobis dolor nihil odio quisquam dicta culpa.</p>
              <div className="mt-2">
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm mr-2">#photography</span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm mr-2">#astronomy</span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm mr-2">#astrophotography</span>
              </div>
              <a href="#" className="text-blue-500 mt-2 block">Read more</a>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold">Which Telescope and DSLR I use</h3>
              <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae hic id, vero dolorem aspernatur quae et quia amet libero! Itaque debitis corrupti impedit sunt hic, ipsa officia? Dolores iure adipisci dolorum veritatis obcaecati officiis, exercitationem modi earum praesentium minima. Sed, necessitatibus tempora. Aut quia numquam recusandae velit veritatis eum consequuntur illum libero suscipit aspernatur, nobis, minus aliquam, facilis quo laborum tempora facere odio porro dicta. Labore hic vitae dolorem voluptatibus eveniet sapiente illo tempore, excepturi amet ut expedita, maiores culpa accusantium, esse molestias corporis asperiores temporibus quam. Quidem, quia?</p>
              <div className="mt-2">
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm mr-2">#photography</span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm mr-2">#astronomy</span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm mr-2">#astrophotography</span>
              </div>
              <a href="#" className="text-blue-500 mt-2 block">Read more</a>
            </div>
          </div>
        </div>


        <h3 className="text-xl font-semibold mt-8">Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

          <img src="https://img.freepik.com/free-photo/beautiful-sky-full-stars-trona-ca_181624-31703.jpg?t=st=1720819086~exp=1720822686~hmac=3174e18e620212599aabf3adc714e5eb9e4ff7bd437644849614b1369aae8340&w=1380" alt="Astro Photo" className="w-full h-48 object-cover rounded-lg shadow-lg" />
          <img src="https://img.freepik.com/free-photo/space-galaxy-background_53876-93121.jpg?uid=R109950621&ga=GA1.1.2123122746.1720715211&semt=sph" alt="Astro Photo" className="w-full h-48 object-cover rounded-lg shadow-lg" />
          <img src="https://img.freepik.com/free-photo/shooting-stars-seen-near-flashlight-held-by-man_23-2148283399.jpg?t=st=1720819202~exp=1720822802~hmac=0d86d5b688b52a547dc4300b0d7130461f459c1f097cedd428388f9aa314d70b&w=1380" alt="Astro Photo" className="w-full h-48 object-cover rounded-lg shadow-lg" />
          <img src="https://img.freepik.com/free-photo/ground-view-beautiful-trees-sky_23-2148283404.jpg?t=st=1720819262~exp=1720822862~hmac=72c41871a65ac163520635cea56e60210d6f7f9c96f2131363ae623b629b4677&w=1380" alt="Astro Photo" className="w-full h-48 object-cover rounded-lg shadow-lg" />
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold">Videos</h3>
          <div className="mt-4">
            <iframe className="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/KHaELP7__7M?si=mf8LY9RbAL6ZOt4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>
        </div>
      </main>
    </div>
  )
}

export default App
