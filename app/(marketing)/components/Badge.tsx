export default function Badge({
  children,
  dark = false,
}: {
  children: any;
  dark?: boolean;
}) {
  return (
    <div
      className={`text-gold-11 py-1 px-2 rounded-full ${
        dark ? "dark-gradient-border" : "gradient-border"
      } font-medium text-xs backdrop-blur-[1px]`}
    >
      {children}
    </div>
  );
}
