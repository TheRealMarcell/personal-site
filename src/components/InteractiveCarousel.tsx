import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import '../styles/global.css';
import { siteContent } from '../content/text';

export const InteractiveCarousel = () => {
  return(
    <div className="space-y-8">
        {siteContent.internships.map((internship) => (
            <div
            key={internship.title}
            className="flex flex-row p-8 bg-[#18181B] rounded-sm h-72 cursor-default select-none"
            >
            <div className="basis-1/3 hidden md:flex">
                <img src={internship.image} className="w-48 h-48" alt={`${internship.title} logo`} />
            </div>
            <div className="basis-xl md:basis-2/3 text-gray-50">
                <p className="dm-sans-bold md:text-base lg:text-4xl">{internship.title}</p>
                <p className="dm-sans-med text-lg">{internship.role}</p>
                <p>{internship.period}</p>
                <p className="dm-sans-light text-base hidden md:flex">{internship.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                {internship.stack.map((stack) => (
                    <span key={stack} className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm">
                    {stack}
                    </span>
                ))}
                </div>
            </div>
            </div>
        ))}
        </div>
  )
}