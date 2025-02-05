export default function Contact() {
    return(
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

    )
    
}