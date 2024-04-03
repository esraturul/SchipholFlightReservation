import { ArrowPathIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { SlPlane } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io"; 
import { HeaderNavComp } from '../components/HeaderNavComp';
import { ContactUsComp } from '../components/ContactUsComp';



const features = [
  {
    name: 'Comfortable Journeys',
    description:
    'The comfort of our passengers comes first. We offer a safe and enjoyable journey with our modern and comfortable aircraft.',
    icon: SlPlane,
  },
  {
    name: 'Security Standards',
    description:
    'We attach importance to the highest level of security standards in our flights. You can have a peaceful journey with our expert team and safe infrastructure.',
    icon: LockClosedIcon,
  },
  {
    name: 'Quick and Easy Reservation',
    description:
    'You can instantly book the flight you want with our easy and fast reservation system. Reservation processes are now much simpler with our user-friendly interface.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Customer happiness',
    description:
    'Customer satisfaction is our priority. We are always at your service with our 24/7 customer support team for any questions you may have.',
    icon: IoIosPeople,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-30xl lg:text-center bg-orange-600 p-4 rounded-md">
          <h2 className="text-base font-semibold leading-7 text-white">About Our Airline</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything About Our Airline
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Our mission is to provide you with the best service and a comfortable travel experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
