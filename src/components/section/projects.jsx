export default function Projects() {
    return(
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
  
    )
    
}