import { i18n } from "@/translate/i18n";
import { TEAM, TEAM_TITLE } from "@/utils/data/team";
import Image from "next/image";
import { useState } from "react";
import Button from "../button";

function OurTeam() {
  const [showAllMembers, setShowAllMembers] =
    useState(false);
  const handleButtonClick = () => {
    setShowAllMembers(!showAllMembers);
  };
  return (
    <section className="py-20" id="team">
      <div className="flex flex-col items-center justify-center gap-12 w-full max-w-[1216px]">
        <h2 className="dark:text-white xl:text-5xl text-3xl font-extrabold leading-[130%] md:text-center">
          {i18n.t("team.title")}
        </h2>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {TEAM.map(
            ({
              id,
              name,
              description,
              ocupation,
              avatar,
            }) => (
              <div
                key={id}
                className="md:max-w-[280px] w-full group"
              >
                <Image
                  src={avatar}
                  alt={name}
                  width={384}
                  height={318}
                  className="h-64 w-full object-fill rounded-xl"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
                <div className="py-8 md:pl-7 max-h-80">
                  <p className="dark:text-slate-400 text-gray-500 text-base font-medium leading-[130%] lg:opacity-0 lg:max-h-0 overflow-hidden lg:group-hover:opacity-100 lg:group-hover:max-h-96 transition-all duration-300">
                    {description}
                  </p>
                  <div className="flex gap-1 flex-col ">
                    <h3 className="dark:text-white font-bold text-2xl leading-[130%]">
                      {name}
                    </h3>
                    <span className="dark:text-btn   text-base text-red-500 leading-[130%] font-bold uppercase">
                      {ocupation}
                    </span>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
        {showAllMembers && (
        <>
          {TEAM_TITLE.map(({ id, title }) => (
            <>
              <h2
                key={id}
                className="dark:text-white xl:text-5xl text-3xl font-extrabold leading-[130%] md:text-center"
              >
                {title}
              </h2>
              <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {TEAM.filter(members => members.teamsId.includes(id)).map(
                  ({
                    id,
                    name,
                    description,
                    ocupation,
                    avatar,
                  }) => (
                    <div
                      key={id}
                      className="md:max-w-[280px] w-full group"
                    >
                      <Image
                        src={avatar}
                        alt={name}
                        width={384}
                        height={318}
                        className="h-64 w-full object-fill rounded-xl"
                        style={{
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                      />
                      <div className="py-8 md:pl-7 max-h-80">
                        <p className="dark:text-slate-400 text-gray-500 text-base font-medium leading-[130%] lg:opacity-0 lg:max-h-0 overflow-hidden lg:group-hover:opacity-100 lg:group-hover:max-h-96 transition-all duration-300">
                          {description}
                        </p>
                        <div className="flex gap-1 flex-col ">
                          <h3 className="dark:text-white font-bold text-2xl leading-[130%]">
                            {name}
                          </h3>
                          <span className="dark:text-btn   text-base text-red-500 leading-[130%] font-bold uppercase">
                            {ocupation}
                          </span>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </>
          ))}

          <div className="flex justify-center">
            <Button
              className="#FE5C5C flex justify-center"
              text={i18n.t("team.members_button.link_1")}
              onClick={handleButtonClick}
            />
            ,
          </div>
        </>
      )}
        {!showAllMembers && (
          <Button
            className="#FE5C5C"
            text={i18n.t("team.members_button.link_1")}
            onClick={handleButtonClick}
          />
        )}
      </div>

    </section>
  );
}

export default OurTeam;
