import { useState } from 'react'
import './App.css'
import Hero from './components/section/hero'
import Skills from './components/section/skills'
import NavBar from './components/section/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      {/* Navigation Bar */}
     <NavBar/>
     <Hero/>
 <Skills/> 
  <section class="py-20 bg-gray-800" id="projects">
   <div class="container mx-auto text-center">
    <h2 class="text-4xl font-bold text-neon-blue mb-10">
     Projects
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     <div class="relative group">
      <img alt="Screenshot of Project 1" class="w-full h-full object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/KpYM0p5ahBjj8s3UJmOBlXGSQCJevI1baCELFvuoZqg.jpg" width="600"/>
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       <h3 class="text-2xl font-bold text-neon-purple">
        Project 1
       </h3>
      </div>
     </div>
     <div class="relative group">
      <img alt="Screenshot of Project 2" class="w-full h-full object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/buHajrnpzwwNXx22Nj3V0ckoH8qnxO_uLIOb4CYmeSM.jpg" width="600"/>
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       <h3 class="text-2xl font-bold text-neon-purple">
        Project 2
       </h3>
      </div>
     </div>
     <div class="relative group">
      <img alt="Screenshot of Project 3" class="w-full h-full object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/Ss54KK49z3T4sMM4G54ONBc6HUebW1OYa0O5M_ZFF4Q.jpg" width="600"/>
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       <h3 class="text-2xl font-bold text-neon-purple">
        Project 3
       </h3>
      </div>
     </div>
    </div>
   </div>
  </section>
  
  <section class="py-20" id="contact">
   <div class="container mx-auto text-center">
    <h2 class="text-4xl font-bold text-neon-blue mb-10">
     Contact
    </h2>
    <form class="max-w-lg mx-auto">
     <div class="mb-6">
      <input class="w-full p-4 bg-gray-800 border border-neon-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple" placeholder="Your Name" type="text"/>
     </div>
     <div class="mb-6">
      <input class="w-full p-4 bg-gray-800 border border-neon-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple" placeholder="Your Email" type="email"/>
     </div>
     <div class="mb-6">
      <textarea class="w-full p-4 bg-gray-800 border border-neon-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple" placeholder="Your Message"></textarea>
     </div>
     <button class="w-full p-4 bg-neon-blue text-gray-900 font-bold rounded-lg hover:bg-neon-purple transition-colors duration-300" type="submit">
      Send Message
     </button>
    </form>
   </div>
  </section>

  <footer class="py-6 bg-gray-800 text-center">
   <p class="text-neon-blue">
    © 2023 MyPortfolio. All rights reserved.
   </p>
  </footer>
    </>
  )
}

export default App
