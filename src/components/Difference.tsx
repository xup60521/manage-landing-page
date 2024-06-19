import { Fragment } from "react/jsx-runtime";

const someDifferences = [
    {
        title: "Track company-wide progress",
        description: `See how your day-to-day tasks fit into the wider vision. Go from 
  tracking progress at the milestone level all the way done to the 
  smallest of details. Never lose sight of the bigger picture again.`,
    },
    {
        title: "Advanced built-in reports",
        description: `Set internal delivery estimates and track progress toward company 
  goals. Our customisable dashboard helps you build out the reports 
  you need to keep key stakeholders informed.`,
    },
    {
        title: "Everything you need in one place",
        description: `Stop jumping from one service to another to communicate, store files, 
  track tasks and share documents. Manage offers an all-in-one team 
  productivity solution.`,
    },
] as { title: string; description: string }[];

export default function Difference() {
    return (
        <div className="flex lg:px-32 justify-between lg:flex-row flex-col lg:items-start items-center">
            <div className="flex flex-col lg:w-1/2 flex-shrink-0 lg:px-0 px-8">
                <h2 className="text-3xl lg:text-left text-center font-vietnam text-m_dark_blue lg:w-96 font-bold lg:leading-10">
                    What’s different about Manage?
                </h2>
                <p className="text-sm font-vietnam lg:text-left text-center text-m_dark_grayish_blue py-4 lg:w-80 lg:pb-4 pb-12">
                    Manage provides all the functionality your team needs,
                    without the complexity. Our software is tailor-made for
                    modern digital product teams.{" "}
                </p>
            </div>
            <div className="flex flex-col gap-6">
                {someDifferences.map((item, index) => {
                    return (
                        <Fragment key={item.title}>
                            {/* desktop */}
                            <div className="lg:flex hidden gap-6 pl-16 min-w-0">
                                <p className="font-vietnam py-2 text-center w-16 flex-shrink-0 h-fit rounded-full bg-m_birght_red text-white text-sm font-bold min-w-0">
                                    0{index + 1}
                                </p>
                                <div className="flex flex-col gap-3  min-w-0">
                                    <h3 className="text-sm font-vietnam  min-w-0 text-m_dark_blue py-2 font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm font-vietnam text-m_dark_grayish_blue max-w-[30rem] leading-6">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            {/* mobile */}
                            <div className="flex flex-col pl-4 lg:hidden gap-3">
                                <h3 className="rounded-l-full bg-m_very_pale_red flex items-center gap-4">
                                    <p className="font-vietnam py-2 text-center w-16 flex-shrink-0 h-fit rounded-full bg-m_birght_red text-white text-sm font-bold min-w-0">
                                        0{index + 1}
                                    </p>
                                    <span className="font-public text-m_dark_blue font-bold text-xs">
                                        {item.title}
                                    </span>
                                </h3>
                                <p className="text-xs leading-6 font-public text-m_dark_grayish_blue pb-6">
                                    {item.description}
                                </p>
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
}
