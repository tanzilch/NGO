import { Formik, Form, Field, ErrorMessage } from 'formik';
import Btn from '../../components/UI/Buttons/Btn';
import { validationSchema } from '../../Schemas/ContactFormSchema';



const ContactForm = ({widthClass,btnProps}) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted with values:', values);
    resetForm();
  };

  return (
    <div className={`container ${widthClass}`}>
    <div className='flex md:justify-center'>
    <div className=' w-full md:max-w-[768px]'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className=" w-full relative md:w-1/2 ">
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full py-2 border-b-[1px] border-black focus:outline-none focus:border-blue-500"
                      placeholder='Enter first name'
                    />
                  </div>
                  <ErrorMessage name="firstName" component="div" className="text-red-500 absolute text-sm mt-1" />
                </div>
                <div className="w-full relative md:w-1/2">
                <div className='flex flex-col gap-2'>
                <label htmlFor="lastName">Last Name</label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full py-2 border-b-[1px] border-black focus:outline-none focus:border-blue-500"
                      placeholder='Enter last name'
                    />
                  </div>
                  <ErrorMessage name="lastName" component="div" className="text-red-500 absolute text-sm mt-1" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full relative md:w-1/2">
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      className="w-full py-2 border-b-[1px] border-black focus:outline-none focus:border-blue-500"
                      placeholder='Enter your Email'
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="text-red-500 absolute text-sm mt-1" />
                </div>
                <div className="w-full md:w-1/2">
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="subject">Subject</label>
                    <Field
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full py-2 border-b-[1px] border-black focus:outline-none focus:border-blue-500"
                      placeholder='Enter your subject'
                    />
                  </div>
                  <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              <div className='flex relative flex-col gap-2'>
                <label htmlFor="message">Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder='Enter Message here..'
                />
                <ErrorMessage name="message" component="div" className="text-red-500 absolute text-sm mt-1" />
              </div>
              <div className='flex md:justify-center'>
                <Btn className={`bg-[#F2C94C] rounded-md px-[18px] py-[12px] md:px-[22px] md:py-[12px] ${btnProps}`}>Send Message</Btn>
              </div>
            </Form>
          </Formik>
    </div>
    
    </div>
    </div>
  );
};

export default ContactForm;
