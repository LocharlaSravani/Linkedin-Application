import React from 'react';
import { Search, Bell, MessageSquare, Users, Briefcase, Home, Grid } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <Grid className="h-8 w-8 text-[#0a66c2]" />
              <div className="ml-4 relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-[#eef3f8] pl-10 pr-4 py-2 rounded-md w-64 focus:outline-none"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <NavItem icon={<Home />} label="Home" active />
              <NavItem icon={<Users />} label="Network" />
              <NavItem icon={<Briefcase />} label="Jobs" />
              <NavItem icon={<MessageSquare />} label="Messaging" />
              <NavItem icon={<Bell />} label="Notifications" />
              <div className="border-l border-gray-200 h-8" />
              <ProfileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-12 gap-4">
          {/* Profile Section */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="h-14 bg-[#a0b4b7]" />
              <div className="text-center px-4 pb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="h-16 w-16 rounded-full border-2 border-white mx-auto -mt-8"
                />
                <h2 className="mt-2 font-semibold">John Doe</h2>
                <p className="text-sm text-gray-600">Senior Software Engineer</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Profile views</span>
                  <span className="text-[#0a66c2] font-semibold">324</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feed Section */}
          <div className="col-span-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="h-12 w-12 rounded-full"
                />
                <button className="flex-1 text-left px-4 py-2.5 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-500">
                  Start a post
                </button>
              </div>
            </div>

            {/* Sample Post */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-4">
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Sarah Wilson"
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">Sarah Wilson</p>
                    <p className="text-sm text-gray-600">Product Designer</p>
                    <p className="text-xs text-gray-500">2h ago</p>
                  </div>
                </div>
                <p className="mt-3">Excited to share that I've just completed a major redesign project! 🎉</p>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt="Project"
                  className="mt-3 rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                  <span>👍</span>
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                  <MessageSquare className="h-5 w-5" />
                  <span>Comment</span>
                </button>
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold mb-4">LinkedIn News</h3>
              <ul className="space-y-3">
                {[
                  "Top tech companies hiring now",
                  "Remote work trends in 2025",
                  "AI revolutionizing industries",
                  "New startup funding records",
                  "Skills in high demand"
                ].map((news, index) => (
                  <li key={index} className="text-sm">
                    <div className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>{news}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <button className={`flex flex-col items-center ${active ? 'text-black' : 'text-gray-500'} hover:text-black`}>
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}

function ProfileMenu() {
  return (
    <button className="flex flex-col items-center text-gray-500 hover:text-black">
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Profile"
        className="h-6 w-6 rounded-full"
      />
      <span className="text-xs mt-1">Me ▼</span>
    </button>
  );
}

export default App;