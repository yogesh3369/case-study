import { Testimonial } from "../../lib/types"
import Image from "next/image"

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Monika Verma",
    role: "Vice President | HR | Client Relations",
    content: `During our time together, I've witnessed Yogesh's remarkable growth and dedication firsthand.

Yogesh consistently demonstrates a strong commitment to his work, always striving for excellence. His positive attitude and willingness to take on challenges make him a pleasure to work with.

What truly stands out is Yogesh's impressive improvement over time. His eagerness to learn and adapt, coupled with his receptive nature, make him an invaluable member of any team.

With the guidance of experienced mentors, I have no doubt that Yogesh will continue to thrive and make significant contributions in his career.

In summary, I wholeheartedly endorse Yogesh and am confident in his ability to succeed.`,
    image: "/testimonials/monika-verma.jpg"
  },
  {
    id: 2,
    name: "Sylvester Sanjeev Simon",
    role: "Senior Manager",
    content: `Yogesh Yadav is a passionate and driven UI/UX designer with a strong desire to learn and excel in his field. With a proactive approach to self-improvement and a willingness to embrace challenges, Yogesh consistently delivers exceptional results and thrives in collaborative environments. His dedication to staying updated with industry trends and technologies, combined with his creativity and positive attitude, make him a valuable asset to any team.

I have no doubt that he has all the qualities and potential to achieve great things in this field. With his passion, determination, and hunger for knowledge, I am confident that Yogesh will continue to make significant strides in his career and leave a lasting impact wherever he goes.`,
    image: "/testimonials/sylvester-simon.jpg"
  },
  {
    id: 3,
    name: "Animesh Negi",
    role: "Sr. Software Engineer",
    content: `I highly recommend Yogesh Yadav as his professionalism, expertise, and dedication are exemplary. He consistently delivers high-quality work and demonstrates strong collaboration skills. Yogesh Yadav would be an asset to any team or organization.`,
    image: "/testimonials/animesh-negi.jpg"
  },
  {
    id: 4,
    name: "Poonam Kaur Chhabra",
    role: "Sales Professional",
    content: `Yogesh is amazing at his job! He knows his way around people, he is good with the clients, does whatever it takes to help colleagues, and gets things done. He makes sure that everyone is on the same page and focused on the main goal. Really a strong resource to any organization.`,
    image: "/testimonials/poonam-chhabra.jpg"
  },
  {
    id: 5,
    name: "Seema Saini",
    role: "Business Head",
    content: `Yogesh always carry positive energy and also when it comes to challenge he leave no stone unturned to make it happen.`,
    image: "/testimonials/seema-saini.jpg"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What People Say About Me</h2>
        
        <div className="grid grid-cols-12 gap-6">
          {/* First testimonial - takes full width on mobile, half on larger screens */}
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-gray-50 p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image 
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[0].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[0].role}</p>
                </div>
              </div>
              <p className="text-gray-600 whitespace-pre-line">{testimonials[0].content}</p>
            </div>
          </div>
          
          {/* Second testimonial - takes full width on mobile, half on larger screens */}
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-gray-50 p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image 
                    src={testimonials[1].image}
                    alt={testimonials[1].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[1].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[1].role}</p>
                </div>
              </div>
              <p className="text-gray-600 whitespace-pre-line">{testimonials[1].content}</p>
            </div>
          </div>
          
          {/* Third testimonial - takes full width on mobile, 1/3 on larger screens */}
          <div className="col-span-12 md:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image 
                    src={testimonials[2].image}
                    alt={testimonials[2].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[2].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[2].role}</p>
                </div>
              </div>
              <p className="text-gray-600 whitespace-pre-line">{testimonials[2].content}</p>
            </div>
          </div>
          
          {/* Fourth testimonial - takes full width on mobile, 1/3 on larger screens */}
          <div className="col-span-12 md:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image 
                    src={testimonials[3].image}
                    alt={testimonials[3].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[3].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[3].role}</p>
                </div>
              </div>
              <p className="text-gray-600 whitespace-pre-line">{testimonials[3].content}</p>
            </div>
          </div>
          
          {/* Fifth testimonial - takes full width on mobile, 1/3 on larger screens */}
          <div className="col-span-12 md:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image 
                    src={testimonials[4].image}
                    alt={testimonials[4].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[4].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[4].role}</p>
                </div>
              </div>
              <p className="text-gray-600 whitespace-pre-line">{testimonials[4].content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
