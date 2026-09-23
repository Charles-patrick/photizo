import Image from "next/image";
import { teamMembers } from "@/lib/data";

export default function MeetTeam() {
  return (
    <section className="bg-olive-500 py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-8xl px-5 text-center sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-44">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-200">
          Meet the
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide text-gold-200 sm:text-3xl ">
          Photizo Team
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center rounded-2xl bg-gold-400 px-4 pb-4 pt-5 text-center sm:px-5 sm:pb-5 sm:pt-6"
            >
              <h3 className="font-display text-sm font-semibold text-olive-500 sm:text-base">
                {member.name}
              </h3>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-olive-500 sm:text-xs">
                {member.role}
              </p>
              <div className="relative  aspect-2/2 w-full overflow-hidden rounded-xl sm:mt-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 639px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
