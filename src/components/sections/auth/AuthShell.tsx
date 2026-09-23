import Image from "next/image";

/**
 * Shared shell for /login and /signup: full-bleed background photo behind
 * a centered logo bar and a white form card. Both pages render this and
 * just pass in their own form content as children.
 */
export default function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center bg-charcoal-900 px-5 py-10 sm:py-14">
      <Image
        src="/login-bg.jpg"
        alt="Photizo Properties"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-dark-clear.png"
            alt="Photizo Properties"
            // fill
            width={300}
            height={10}
            priority
            // sizes="10vw"
            // className="object-cover"
          />
        </div>

        <div className="mt-8 w-full rounded-2xl bg-gold-50 p-6 shadow-xl sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
