'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAFAFA] text-[#014421] flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="max-w-md space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#F5F5DC] border border-[#014421]/20 text-[#014421] text-xs font-extrabold">
            Application Error
          </span>
          <h1 className="text-3xl font-black text-[#014421]">Something went wrong</h1>
          <p className="text-sm text-[#014421]/80">
            An unexpected error occurred. Please try resetting the application view.
          </p>
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="px-6 py-3 rounded-full bg-[#014421] text-[#F5F5DC] text-xs font-bold hover:bg-[#003318] transition-colors"
            >
              Try Again
            </button>
            <a
              href="/"
              className="px-6 py-3 rounded-full bg-[#F5F5DC] border border-[#014421]/20 text-[#014421] text-xs font-bold hover:bg-[#014421] hover:text-[#F5F5DC] transition-colors"
            >
              Go to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
