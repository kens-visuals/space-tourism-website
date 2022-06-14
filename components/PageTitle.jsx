export default function PageTitle({ num, title }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-barlow-condensed text-nav font-bold tracking-secondary text-tertiary/50">
        {num}
      </span>
      <span className="font-barlow-condensed text-nav uppercase tracking-tertiary text-tertiary">
        {title}
      </span>
    </div>
  );
}
