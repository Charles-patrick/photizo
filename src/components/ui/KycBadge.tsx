import { Clock, ShieldCheck, XCircle } from "lucide-react";
import { clsx } from "@/lib/clsx";

type KycStatus = "verified" | "failed" | "processing";

const config: Record<
  KycStatus,
  { label: string; icon: typeof ShieldCheck; classes: string }
> = {
  verified: {
    label: "KYC Verified",
    icon: ShieldCheck,
    classes: "bg-kyc-verified-bg text-kyc-verified-text",
  },
  failed: {
    label: "KYC Failed",
    icon: XCircle,
    classes: "bg-kyc-failed-bg text-kyc-failed-text",
  },
  processing: {
    label: "KYC Processing",
    icon: Clock,
    classes: "bg-kyc-processing-bg text-kyc-processing-text",
  },
};

export default function KycBadge({ status }: { status: KycStatus }) {
  const { label, icon: Icon, classes } = config[status];

  return (
    <span
      className={clsx(
        "inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold",
        classes,
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}
