import React, { useState } from 'react';
 import emailjs from '@emailjs/browser';

 function Contact() {
   const [formData, setFormData] = useState({
     name: '',
     user_email: '',
     message: '',
   });

   const [isSent, setIsSent] = useState(false);

   const handleChange = (e) => {
     setFormData({
       ...formData,
       [e.target.name]: e.target.value,
     });
   };

   const sendEmail = (e) => {
     e.preventDefault();
     emailjs.send(
       'service_ldhvm2o',       // your Service ID
       'template_9wj8tfn',      // your Template ID
       formData,
       'NW0Ew2e_Mk6vZzej-'      // your Public Key
     )
     .then(() => {
       console.log('SUCCESS!');
       setIsSent(true);
       setFormData({ name: '', user_email: '', message: '' }); // Reset form
     }, (error) => {
       console.log('FAILED...', error.text);
     });
   };

   return (
     <div name="Contact" className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
       <form onSubmit={sendEmail} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
         <h2 className="text-3xl font-bold text-center mb-6 text-teal-600">Contact Me</h2>

         <input
           type="text"
           name="name"
           placeholder="Your Name"
           value={formData.name}
           onChange={handleChange}
           required
           className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
         />

         <input
           type="email"
           name="user_email"
           placeholder="Your Email"
           value={formData.user_email}
           onChange={handleChange}
           required
           className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
         />

         <textarea
           name="message"
           placeholder="Your Message"
           value={formData.message}
           onChange={handleChange}
           required
           rows="5"
           className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
         />

         <button
           type="submit"
           className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
         >
           Send Message
         </button>

         {isSent && (
           <p className="text-green-600 text-center mt-4">Message sent successfully! ✅</p>
         )}
       </form>
     </div>
   );
 }

 export default Contact;