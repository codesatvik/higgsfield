import { Video } from "@/components/video";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function LandingPage() {
    return<div className="bg-black w-screen h-screen">
    <div className="ml-16 mr-16 "> 
        <Carousel >
            <CarouselContent>
                
                <CarouselItem className="basis-1/3">
                 <Video
                  title={"video gen"}
                  url="https://cdn.higgsfield.ai/card/5ca917b5-c2aa-4bcb-b43c-2b209440e3e4.mp4"
                  ></Video>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <Video
                   title={"build a nice video"}
                   url="https://cdn.higgsfield.ai/card/27faef71-0035-4076-a4f4-90e14ea591c6.mp4"
                    ></Video>
                </CarouselItem>

               <CarouselItem className="basis-1/3">
                 <Video
                  title={"video gen"}
                  url="https://cdn.higgsfield.ai/card/5ca917b5-c2aa-4bcb-b43c-2b209440e3e4.mp4"
                  ></Video>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <Video
                   title={"build a nice video"}
                   url="https://cdn.higgsfield.ai/card/27faef71-0035-4076-a4f4-90e14ea591c6.mp4"
                    ></Video>
                </CarouselItem>
                 <CarouselItem className="basis-1/3">
                 <Video
                  title={"video gen"}
                  url="https://cdn.higgsfield.ai/card/5ca917b5-c2aa-4bcb-b43c-2b209440e3e4.mp4"
                  ></Video>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                    <Video
                   title={"build a nice video"}
                   url="https://cdn.higgsfield.ai/card/27faef71-0035-4076-a4f4-90e14ea591c6.mp4"
                    ></Video>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-white mr-15"/>
            <CarouselNext  className="bg-white  ml-15"/>
        </Carousel>
        </div>
    </div>
}
