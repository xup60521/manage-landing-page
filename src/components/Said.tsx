import { useState } from "react";
import GetStartedButton from "./GetStartedButton";
import Ali from "/images/avatar-ali.png";
import Anisha from "/images/avatar-anisha.png";
import Richard from "/images/avatar-richard.png";
import Shanai from "/images/avatar-shanai.png";

const people = [
    {
        author: "Anisha Li",
        context: `“Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated.”`,
        avatar: Anisha,
    },
    {
        author: "Ali Bravo",
        context: `“We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused.”`,
        avatar: Ali,
    },
    {
        author: "Richard Watts",
        context: `“Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”`,
        avatar: Richard,
    },
    {
        author: "Shanai Gough",
        context: `“Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive.”`,
        avatar: Shanai,
    },
];

export default function Said() {
    const [current, setCurrent] = useState<0 | 1 | 2 | 3>(0);

    return (
        <div className="w-full flex flex-col gap-4 items-center lg:px-0 px-4">
            <h2 className="font-vietnam text-3xl text-m_dark_blue font-bold lg:py-24 py-12">
                What they've said
            </h2>

            <div className="gap-4 px-2 lg:flex min-w-0 overflow-x-scroll w-full pb-4 hidden">
                {people.map((item) => {
                    return (
                        <div
                            key={item.author}
                            className="relative flex flex-col mt-8 px-8 items-center flex-shrink-0 w-[30rem] bg-m_very_light_gray"
                        >
                            <img
                                src={item.avatar}
                                alt={item.author + " avatar"}
                                className="size-14 -translate-y-7"
                            />
                            <span className="font-vietnam text-sm text-m_dark_blue font-bold -mt-2 pb-4">
                                {item.author}
                            </span>
                            <p className="text-sm text-m_dark_grayish_blue font-vietnam text-center w-full whitespace-normal pb-8">
                                {item.context}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="lg:hidden flex flex-col">
                <div
                    key={people[current].author}
                    className="relative flex flex-col mt-8 px-8 items-center flex-shrink-0 bg-m_very_light_gray"
                >
                    <img
                        src={people[current].avatar}
                        alt={people[current].author + " avatar"}
                        className="size-14 -translate-y-7"
                    />
                    <span className="font-vietnam text-sm text-m_dark_blue font-bold -mt-2 pb-4">
                        {people[current].author}
                    </span>
                    <p className="text-sm text-m_dark_grayish_blue font-vietnam text-center w-full whitespace-normal pb-8">
                        {people[current].context}
                    </p>
                </div>
                <div className="flex gap-2 justify-center pt-8">
                    <button className={`text-transparent size-2 border-[1px] border-m_birght_red rounded-full transition ${current === 0 && "bg-m_birght_red"}`} onMouseDown={()=>setCurrent(0)}>
                        .
                    </button>
                    <button className={`text-transparent size-2 border-[1px] border-m_birght_red rounded-full transition ${current === 1 && "bg-m_birght_red"}`} onMouseDown={()=>setCurrent(1)}>
                        .
                    </button>
                    <button className={`text-transparent size-2 border-[1px] border-m_birght_red rounded-full transition ${current === 2 && "bg-m_birght_red"}`} onMouseDown={()=>setCurrent(2)}>
                        .
                    </button>
                    <button className={`text-transparent size-2 border-[1px] border-m_birght_red rounded-full transition ${current === 3 && "bg-m_birght_red"}`} onMouseDown={()=>setCurrent(3)}>
                        .
                    </button>
                </div>
            </div>
            <div className="w-full flex justify-center py-10">
                <GetStartedButton />
            </div>
        </div>
    );
}
