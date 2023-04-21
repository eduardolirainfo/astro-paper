export interface Props {
  minutesRead: string;
  size?: "sm" | "lg";
  className?: string;
}

export default function TimeReading({
  minutesRead,
  size = "sm",
  className,
}: Props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          size === "sm" ? "scale-90" : "scale-100"
        } inline-block h-6 w-6 fill-skin-base`}
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z"
        />
      </svg>
      <span className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedminutesRead minutesRead={minutesRead} />
      </span>
    </>
  );
}

const FormattedminutesRead = ({ minutesRead }: { minutesRead: string }) => {
  return <>{minutesRead}</>;
};
