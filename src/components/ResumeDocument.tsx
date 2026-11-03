import {
  resumeContact,
  resumeDesignTools,
  resumeDevTools,
  resumeEducation,
  resumeExperience,
  resumeRecognition,
} from "@/lib/resume-data";

function ToolEntry({ name, description }: { name: string; description: string }) {
  return (
    <div className="flex flex-col gap-[2px]">
      <p className="text-[11px] font-semibold leading-normal text-black">{name}</p>
      <p className="text-[9px] leading-[1.6] text-black">{description}</p>
    </div>
  );
}

function ExperienceEntry({
  role,
  company,
  meta,
  bullets,
}: {
  role: string;
  company: string;
  meta: string;
  bullets: string[];
}) {
  return (
    <div className="flex flex-col gap-[2.6px] text-black">
      <p className="text-[11px] font-semibold leading-normal">{role}</p>
      <p className="text-[10px] leading-normal">
        <span className="font-medium">{company}</span>
        <span>, {meta}</span>
      </p>
      <ul className="flex flex-col gap-[2.6px] text-[9px]">
        {bullets.map((b, i) => (
          <li key={i} className="list-disc leading-[1.6] ms-[13.5px]">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Native dimensions: 612 x 792. Wrap in a scaled container to render smaller. */
export function ResumeDocument() {
  return (
    <div className="relative h-[792px] w-[612px] bg-white">
      <div className="flex h-full w-full flex-col justify-between p-[35px]">
        <div className="flex w-full items-start justify-between">
          <div className="flex w-[342px] flex-col gap-[10px]">
            <p className="w-fit bg-[#e8e8e8] font-heading text-[24px] font-semibold leading-none text-[#111]">
              {resumeContact.name}
            </p>
            <p className="text-[9px] uppercase leading-normal text-black">
              {resumeContact.tagline}
            </p>
          </div>
          <div className="flex w-[108px] flex-col items-end justify-center gap-[5px]">
            <p className="text-right text-[9px] leading-[11px] text-black">{resumeContact.phone}</p>
            <p className="text-right text-[9px] leading-[11px] text-black">{resumeContact.site}</p>
            <p className="text-right text-[9px] leading-[11px] text-black">{resumeContact.email}</p>
          </div>
        </div>

        <div className="flex w-full items-start gap-[20px]">
          <div className="flex w-[314px] flex-col gap-[13px]">
            <div className="flex flex-col gap-[6.5px] text-black">
              <p className="text-[12px] font-bold leading-normal">EDUCATION</p>
              <div className="flex flex-col gap-[3.25px]">
                <p className="text-[11px] font-semibold leading-normal">{resumeEducation.school}</p>
                <p className="text-[9px] leading-[1.6]">
                  <span className="font-medium">{resumeEducation.degree}</span>
                  <br />
                  {resumeEducation.meta}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[6.5px] text-black">
              <p className="text-[12px] font-bold uppercase leading-normal">Recognition</p>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[11px] font-semibold leading-normal">{resumeRecognition.title}</p>
                <p className="text-[10px] font-medium leading-normal">{resumeRecognition.meta}</p>
                <p className="text-[9px] leading-[1.6]">{resumeRecognition.description}</p>
              </div>
            </div>

            <div className="flex flex-col gap-[6.5px] text-black">
              <p className="text-[12px] font-bold leading-normal">EXPERIENCE</p>
              {resumeExperience.map((e) => (
                <ExperienceEntry key={e.role + e.company} {...e} />
              ))}
            </div>
          </div>

          <div className="w-px self-stretch bg-[#ddd]" />

          <div className="flex w-[188px] flex-col gap-[13px] text-black">
            <div className="flex flex-col gap-[6.5px]">
              <p className="text-[12px] font-bold leading-normal">DESIGN TOOLS</p>
              <div className="flex flex-col gap-[7.8px]">
                {resumeDesignTools.map((t) => (
                  <ToolEntry key={t.name} {...t} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[6.5px]">
              <p className="text-[12px] font-bold leading-normal">DEVELOPMENT TOOLS</p>
              <div className="flex flex-col gap-[7.8px]">
                {resumeDevTools.map((t) => (
                  <ToolEntry key={t.name} {...t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
