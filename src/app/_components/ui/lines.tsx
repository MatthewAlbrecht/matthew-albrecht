import { cn } from "~/lib/utils";

function LineOne({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1 880"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-[1px]", className)}
      {...props}
    >
      <line x1="0.5" y1="481" x2="0.5" y2="461" />
      <line x1="0.5" y1="691" x2="0.5" y2="671" />
      <line x1="0.5" y1="665" x2="0.5" y2="659" />
      <line x1="0.5" y1="655" x2="0.5" y2="649" />
      <line x1="0.5" y1="645" x2="0.5" y2="639" />
      <line x1="0.5" y1="635" x2="0.5" y2="629" />
      <line x1="0.5" y1="625" x2="0.5" y2="619" />
      <line x1="0.5" y1="615" x2="0.5" y2="604" />
      <line x1="0.5" y1="602" x2="0.5" y2="591" />
      <line x1="0.5" y1="589" x2="0.5" y2="578" />
      <line x1="0.5" y1="576" x2="0.5" y2="565" />
      <line x1="0.5" y1="563" x2="0.5" y2="521" />
      <line x1="0.5" y1="189" x2="0.5" y2="167" />
      <line x1="0.5" y1="216" x2="0.5" y2="194" />
      <line x1="0.5" y1="243" x2="0.5" y2="221" />
      <line x1="0.5" y1="270" x2="0.5" y2="248" />
      <line x1="0.5" y1="284" x2="0.5" y2="275" />
      <line x1="0.5" y1="294" x2="0.5" y2="291" />
      {/* <line x1="0.5" y1="140" x2="0.5" y2="-1.15656e-08" stroke="black" /> */}
      <line x1="0.5" y1="880" x2="0.5" y2="805" />
      <line x1="0.5" y1="795" x2="0.5" y2="772" />
      <line x1="0.5" y1="426" x2="0.5" y2="340" />
    </svg>
  );
}
function LineTwo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1 955"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={cn("w-[1px]", className)}
      {...props}
    >
      <line x1="0.5" y1="610" x2="0.5" y2="590" />
      <line x1="0.5" y1="634" x2="0.5" y2="614" />
      <line x1="0.5" y1="649" x2="0.5" y2="638" />
      <line x1="0.5" y1="706" x2="0.5" y2="686" />
      <line x1="0.5" y1="730" x2="0.5" y2="710" />
      <line x1="0.5" y1="800" x2="0.5" y2="780" />
      <line x1="0.5" y1="824" x2="0.5" y2="804" />
      <line x1="0.5" y1="848" x2="0.5" y2="828" />
      <line x1="0.5" y1="872" x2="0.5" y2="852" />
      <line x1="0.5" y1="896" x2="0.5" y2="876" />
      <line x1="0.5" y1="776" x2="0.5" y2="734" />
      <line x1="0.5" y1="399" x2="0.5" y2="300" />
      <line x1="0.5" y1="295" x2="0.5" y2="273" />
      <line x1="0.5" y1="268" x2="0.5" y2="246" />
      <line x1="0.5" y1="241" x2="0.5" y2="232" />
      <line x1="0.5" y1="225" x2="0.5" y2="222" />
      <line x1="0.5" y1="111" x2="0.5" y2="-4.37114e-08" />
      <line x1="0.5" y1="955" x2="0.5" y2="860" />
      <line x1="0.5" y1="850" x2="0.5" y2="827" />
    </svg>
  );
}

export { LineOne, LineTwo };
