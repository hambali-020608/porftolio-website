export default function NavBar() {
    return(
        <nav class="fixed w-full bg-opacity-30 backdrop-blur-md p-4 z-50">
        <div class="container mx-auto flex justify-between items-center">
         <a class="text-2xl font-bold text-neon-blue" href="#">
          MyPortfolio
         </a>
         <ul class="flex space-x-6">
          <li>
           <a class="hover:text-neon-purple" href="#home">
            Home
           </a>
          </li>
          <li>
           <a class="hover:text-neon-purple" href="#skills">
            Skills
           </a>
          </li>
          <li>
           <a class="hover:text-neon-purple" href="#projects">
            Projects
           </a>
          </li>
          <li>
           <a class="hover:text-neon-purple" href="#contact">
            Contact
           </a>
          </li>
         </ul>
        </div>
       </nav>
       
    )
    
}

