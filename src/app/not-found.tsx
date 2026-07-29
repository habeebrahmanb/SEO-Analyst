import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#014421] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-[#F5F5DC] border border-[#014421]/20 text-[#014421] text-xs font-extrabold">
          404 - Page Not Found
        </span>
        <h1 className="text-4xl font-black text-[#014421]">Page Not Found</h1>
        <p className="text-sm text-[#014421]/80">
          The page or search strategy resource you are looking for doesn't exist or has been moved.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="btn-pro-green inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#F5F5DC]"
          >
            Return to Home Portal &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
