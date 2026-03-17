export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-border border-t-brand-blue" />
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-muted">
          Loading
        </p>
      </div>
    </div>
  );
}
