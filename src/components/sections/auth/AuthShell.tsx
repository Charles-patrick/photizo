import Image from "next/image";

/**
 * Shared shell for /login and /signup: full-bleed background photo behind
 * a centered logo bar and a white form card. Both pages render this and
 * just pass in their own form content as children.
 */
export default function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex h-dvh w-full items-center justify-center overflow-hidden px-4 py-4 sm:px-6 sm:py-6">
      <Image
        src="/login-bg.jpg"
        alt="Photizo Properties"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      <div className="relative z-10 flex max-h-full w-full max-w-md flex-col items-center gap-5">
        <div className="flex shrink-0 items-center justify-center">
          <Image
            src="/logo-dark-clear.png"
            alt="Photizo Properties"
            width={1200}
            height={176}
            priority
            className="h-auto w-56 object-contain sm:w-64"
          />
        </div>

        <div className="max-h-[calc(100dvh-7rem)] w-full overflow-y-auto overscroll-contain rounded-2xl bg-gold-50 p-5 shadow-xl sm:max-h-[calc(100dvh-8rem)] sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
