import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div>
            <ContactForm />
          </div>
        <div className=" bg-[#be9717] px-2 pb-2 rounded-lg">
     
           
            <div className="bg-white p-6 rounded-lg shadow">
             
              <div className="mt-6">
                <h3 className="text-lg  font-bold text-gray-900 mb-2">Business Hours</h3>
                <ul className="space-y-1">
                  <li className="flex ">
                    <span>Monday - Friday - </span>
                    <span> 8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex ">
                    <span>Saturday -</span>
                    <span>  9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex">
                    <span>Sunday-</span>
                    <span> Closed</span>
                  </li>
                </ul>
              </div>
            </div>
       
         
           {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;