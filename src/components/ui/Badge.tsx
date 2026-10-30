import { Icon } from "./Icon";

export function Tag({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border-default px-[10px] py-[5px] font-sans text-[12px] text-text-supporting ${className}`}
    >
      {label}
    </span>
  );
}

export function AvailabilityBadge({
  label = "Available for full-time roles",
  showIndicator = true,
}: {
  label?: string;
  showIndicator?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#d4d4d4] py-[6px] pl-3 pr-[14px]">
      {showIndicator && <Icon name="status-dot" size={7} />}
      <span className="font-sans text-[13px] font-medium text-[#444]">{label}</span>
    </div>
  );
}

export function PrivateNotice({ label = "Private under contract" }: { label?: string }) {
  return <span className="font-sans text-[13px] text-text-quiet-alt">{label}</span>;
}
