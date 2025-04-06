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
    <Carousel>
      <CarouselContent>
        {siteContent.internships.map((internship) => {
          return(
            <CarouselItem>
              <div className="flex flex-row p-8 bg-[#18181B] rounded-sm h-72">
              <div className="basis-1/3 hidden md:flex">
                <img src={internship.image} className="w-48 h-48" alt="Telkomsel logo"/>
              </div>
              <div className="basis-xl md:basis-2/3 text-gray-50">
                <p className="dm-sans-bold md:text-base lg:text-4xl">{internship.title}</p>
                <p className="dm-sans-med text-lg">{internship.role}</p>
                <p className="dm-sans-light text-base hidden md:flex">{internship.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {internship.stack.map((stack) => {
                    return(
                      <span className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm">
                        {stack}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}