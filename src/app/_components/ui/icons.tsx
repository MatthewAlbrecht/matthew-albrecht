import { cn } from "~/lib/utils";

function IconOpenAI({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <title>OpenAI icon</title>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  );
}

function IconVercel({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      aria-label="Vercel logomark"
      role="img"
      viewBox="0 0 74 64"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function IconGitHub({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function IconSeparator({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  );
}

function IconArrowDown({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}

function IconArrowRight({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.80584 16.2879C10.172 16.654 10.7655 16.654 11.1317 16.2879L16.7567 10.6629C17.1228 10.2968 17.1228 9.7032 16.7567 9.33709L11.1317 3.71209C10.7655 3.34597 10.172 3.34597 9.80584 3.71209C9.43972 4.0782 9.43972 4.6718 9.80584 5.03791L13.8304 9.0625H3.90625C3.38848 9.0625 2.96875 9.48223 2.96875 10C2.96875 10.5178 3.38848 10.9375 3.90625 10.9375H13.8304L9.80584 14.9621C9.43972 15.3282 9.43972 15.9218 9.80584 16.2879Z"
      />
    </svg>
  );
}

function IconArrowDiagonal({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M7.0553 7.64349H11.5277L6.63693 12.5284C6.52597 12.6394 6.46363 12.7899 6.46363 12.9468C6.46363 13.1037 6.52597 13.2542 6.63693 13.3652C6.74789 13.4761 6.89838 13.5385 7.0553 13.5385C7.21222 13.5385 7.36271 13.4761 7.47367 13.3652L12.3586 8.47434V12.9468C12.3586 13.1031 12.4207 13.2529 12.5312 13.3635C12.6417 13.474 12.7916 13.536 12.9479 13.536C13.1041 13.536 13.254 13.474 13.3645 13.3635C13.475 13.2529 13.5371 13.1031 13.5371 12.9468V7.05423C13.5362 6.97723 13.5202 6.90115 13.49 6.83031C13.4302 6.68633 13.3158 6.57191 13.1718 6.51211C13.1009 6.48192 13.0249 6.46591 12.9479 6.46497H7.0553C6.89902 6.46497 6.74914 6.52706 6.63863 6.63756C6.52812 6.74807 6.46604 6.89795 6.46604 7.05423C6.46604 7.21051 6.52812 7.36039 6.63863 7.4709C6.74914 7.5814 6.89902 7.64349 7.0553 7.64349Z" />
    </svg>
  );
}

function IconLoading({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
}

function IconUser({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
    </svg>
  );
}

function IconPlus({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
    </svg>
  );
}

function IconArrowElbow({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
    </svg>
  );
}

function IconSpinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4 animate-spin", className)}
      {...props}
    >
      <path d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z" />
    </svg>
  );
}

function IconMessage({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z" />
    </svg>
  );
}

function IconTrash({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" />
    </svg>
  );
}

function IconRefresh({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" />
    </svg>
  );
}

function IconStop({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" />
    </svg>
  );
}

function IconSidebar({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v144H40Zm176 144H96V56h120v144Z" />
    </svg>
  );
}

function IconMoon({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" />
    </svg>
  );
}

function IconSun({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
    </svg>
  );
}

function IconCopy({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" />
    </svg>
  );
}

function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}

function IconDownload({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" />
    </svg>
  );
}

function IconClose({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
    </svg>
  );
}

function IconEdit({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
}

function IconShare({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3ZM160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" />
    </svg>
  );
}

function IconUsers({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z" />
    </svg>
  );
}

function IconExternalLink({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z" />
    </svg>
  );
}

function IconChevronUpDown({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z" />
    </svg>
  );
}

/**
 * Renders an icon of a chevron pointing right by default.
 *
 * @param {React.ComponentProps<"svg">} props - The component props.
 * @param {string} props.className - The class name for the icon.
 */
function IconChevron({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.52459 16.2879C6.8907 16.654 7.4843 16.654 7.85041 16.2879L13.4754 10.6629C13.8415 10.2968 13.8415 9.7032 13.4754 9.33709L7.85041 3.71209C7.4843 3.34597 6.8907 3.34597 6.52459 3.71209C6.15847 4.0782 6.15847 4.6718 6.52459 5.03791L11.4867 10L6.52459 14.9621C6.15847 15.3282 6.15847 15.9218 6.52459 16.2879Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconSplashLines({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 57 790"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={cn("h-[790px] w-[57px]", className)}
      {...props}
    >
      <g opacity="0.9">
        <line x1="0.5" y1="265" x2="0.500002" y2="245" />
        <line x1="0.5" y1="239" x2="0.500001" y2="233" />
        <line x1="0.5" y1="229" x2="0.500001" y2="223" />
        <line x1="0.5" y1="219" x2="0.500001" y2="213" />
        <line x1="0.5" y1="209" x2="0.500001" y2="203" />
        <line x1="0.5" y1="199" x2="0.500001" y2="193" />
        <line x1="0.5" y1="189" x2="0.500001" y2="178" />
        <line x1="0.5" y1="176" x2="0.500001" y2="165" />
        <line x1="0.5" y1="163" x2="0.500001" y2="152" />
        <line x1="0.5" y1="150" x2="0.500001" y2="139" />
        <line x1="0.5" y1="137" x2="0.500004" y2="95" />
        <line x1="0.5" y1="440" x2="0.500002" y2="420" />
        <line x1="0.5" y1="414" x2="0.500001" y2="408" />
        <line x1="0.5" y1="404" x2="0.500001" y2="398" />
        <line x1="0.5" y1="394" x2="0.500001" y2="388" />
        <line x1="0.5" y1="384" x2="0.500001" y2="378" />
        <line x1="0.5" y1="374" x2="0.500001" y2="368" />
        <line x1="0.5" y1="364" x2="0.500001" y2="353" />
        <line x1="0.5" y1="351" x2="0.500001" y2="340" />
        <line x1="0.5" y1="338" x2="0.500001" y2="327" />
        <line x1="0.5" y1="325" x2="0.500001" y2="314" />
        <line x1="0.5" y1="312" x2="0.500004" y2="270" />
        <line x1="0.5" y1="615" x2="0.500002" y2="595" />
        <line x1="0.5" y1="589" x2="0.500001" y2="583" />
        <line x1="0.5" y1="579" x2="0.500001" y2="573" />
        <line x1="0.5" y1="569" x2="0.500001" y2="563" />
        <line x1="0.5" y1="559" x2="0.500001" y2="553" />
        <line x1="0.5" y1="549" x2="0.500001" y2="543" />
        <line x1="0.5" y1="539" x2="0.500001" y2="528" />
        <line x1="0.5" y1="526" x2="0.500001" y2="515" />
        <line x1="0.5" y1="513" x2="0.500001" y2="502" />
        <line x1="0.5" y1="500" x2="0.500001" y2="489" />
        <line x1="0.5" y1="487" x2="0.500004" y2="445" />
        <line
          y1="-0.5"
          x2="20"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 620)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 646)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 656)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 666)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 676)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 686)"
        />
        <line
          y1="-0.5"
          x2="11"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 696)"
        />
        <line
          y1="-0.5"
          x2="11"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 709)"
        />
        <line
          y1="-0.5"
          x2="11"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 722)"
        />
        <line
          y1="-0.5"
          x2="11"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 735)"
        />
        <line
          y1="-0.5"
          x2="42"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 748)"
        />
      </g>
      <g opacity="0.9">
        <line x1="48.5" y1="217" x2="48.5" y2="197" />
        <line x1="48.5" y1="191" x2="48.5" y2="185" />
        <line x1="48.5" y1="181" x2="48.5" y2="175" />
        <line x1="48.5" y1="171" x2="48.5" y2="165" />
        <line x1="48.5" y1="161" x2="48.5" y2="155" />
        <line x1="48.5" y1="151" x2="48.5" y2="145" />
        <line x1="48.5" y1="141" x2="48.5" y2="130" />
        <line x1="48.5" y1="128" x2="48.5" y2="117" />
        <line x1="48.5" y1="115" x2="48.5" y2="104" />
        <line x1="48.5" y1="102" x2="48.5" y2="91" />
        <line x1="48.5" y1="89" x2="48.5" y2="47" />
        <line x1="48.5" y1="392" x2="48.5" y2="372" />
        <line x1="48.5" y1="366" x2="48.5" y2="360" />
        <line x1="48.5" y1="356" x2="48.5" y2="350" />
        <line x1="48.5" y1="346" x2="48.5" y2="340" />
        <line x1="48.5" y1="336" x2="48.5" y2="330" />
        <line x1="48.5" y1="326" x2="48.5" y2="320" />
        <line x1="48.5" y1="316" x2="48.5" y2="305" />
        <line x1="48.5" y1="303" x2="48.5" y2="292" />
        <line x1="48.5" y1="290" x2="48.5" y2="279" />
        <line x1="48.5" y1="277" x2="48.5" y2="266" />
        <line x1="48.5" y1="264" x2="48.5" y2="222" />
        <line x1="48.5" y1="567" x2="48.5" y2="547" />
        <line x1="48.5" y1="541" x2="48.5" y2="535" />
        <line x1="48.5" y1="531" x2="48.5" y2="525" />
        <line x1="48.5" y1="521" x2="48.5" y2="515" />
        <line x1="48.5" y1="511" x2="48.5" y2="505" />
        <line x1="48.5" y1="501" x2="48.5" y2="495" />
        <line x1="48.5" y1="491" x2="48.5" y2="480" />
        <line x1="48.5" y1="478" x2="48.5" y2="467" />
        <line x1="48.5" y1="465" x2="48.5" y2="454" />
        <line x1="48.5" y1="452" x2="48.5" y2="441" />
        <line x1="48.5" y1="439" x2="48.5" y2="397" />
        <line
          y1="-0.5"
          x2="20"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 572)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 598)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 608)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 618)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 628)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 638)"
        />
        <line
          y1="-0.5"
          x2="11"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 648)"
        />
        <line
          y1="-0.5"
          x2="11"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 661)"
        />
        <line
          y1="-0.5"
          x2="11"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 674)"
        />
        <line
          y1="-0.5"
          x2="11"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 687)"
        />
        <line
          y1="-0.5"
          x2="42"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 700)"
        />
      </g>
      <g opacity="0.9">
        <line x1="56.5" y1="153" x2="56.5" y2="133" />
        <line x1="56.5" y1="127" x2="56.5" y2="121" />
        <line x1="56.5" y1="117" x2="56.5" y2="111" />
        <line x1="56.5" y1="107" x2="56.5" y2="101" />
        <line x1="56.5" y1="97" x2="56.5" y2="91" />
        <line x1="56.5" y1="87" x2="56.5" y2="81" />
        <line x1="56.5" y1="77" x2="56.5" y2="66" />
        <line x1="56.5" y1="64" x2="56.5" y2="53" />
        <line x1="56.5" y1="51" x2="56.5" y2="40" />
        <line x1="56.5" y1="38" x2="56.5" y2="27" />
        <line x1="56.5" y1="25" x2="56.5" y2="-17" />
        <line x1="56.5" y1="328" x2="56.5" y2="308" />
        <line x1="56.5" y1="302" x2="56.5" y2="296" />
        <line x1="56.5" y1="292" x2="56.5" y2="286" />
        <line x1="56.5" y1="282" x2="56.5" y2="276" />
        <line x1="56.5" y1="272" x2="56.5" y2="266" />
        <line x1="56.5" y1="262" x2="56.5" y2="256" />
        <line x1="56.5" y1="252" x2="56.5" y2="241" />
        <line x1="56.5" y1="239" x2="56.5" y2="228" />
        <line x1="56.5" y1="226" x2="56.5" y2="215" />
        <line x1="56.5" y1="213" x2="56.5" y2="202" />
        <line x1="56.5" y1="200" x2="56.5" y2="158" />
        <line x1="56.5" y1="503" x2="56.5" y2="483" />
        <line x1="56.5" y1="477" x2="56.5" y2="471" />
        <line x1="56.5" y1="467" x2="56.5" y2="461" />
        <line x1="56.5" y1="457" x2="56.5" y2="451" />
        <line x1="56.5" y1="447" x2="56.5" y2="441" />
        <line x1="56.5" y1="437" x2="56.5" y2="431" />
        <line x1="56.5" y1="427" x2="56.5" y2="416" />
        <line x1="56.5" y1="414" x2="56.5" y2="403" />
        <line x1="56.5" y1="401" x2="56.5" y2="390" />
        <line x1="56.5" y1="388" x2="56.5" y2="377" />
        <line x1="56.5" y1="375" x2="56.5" y2="333" />
        <line
          y1="-0.5"
          x2="20"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 508)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 534)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 544)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 554)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 564)"
        />
        <line
          y1="-0.5"
          x2="6"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 574)"
        />
        <line
          y1="-0.5"
          x2="11"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 584)"
        />
        <line
          y1="-0.5"
          x2="11"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 597)"
        />
        <line
          y1="-0.5"
          x2="11"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 610)"
        />
        <line
          y1="-0.5"
          x2="11"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 623)"
        />
        <line
          y1="-0.5"
          x2="42"
          y2="-0.5"
          transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 636)"
        />
      </g>
    </svg>
  );
}

export {
  IconEdit,
  IconOpenAI,
  IconVercel,
  IconGitHub,
  IconSeparator,
  IconArrowDown,
  IconArrowRight,
  IconUser,
  IconPlus,
  IconArrowElbow,
  IconSpinner,
  IconMessage,
  IconTrash,
  IconRefresh,
  IconStop,
  IconSidebar,
  IconMoon,
  IconSun,
  IconCopy,
  IconCheck,
  IconDownload,
  IconClose,
  IconShare,
  IconUsers,
  IconExternalLink,
  IconChevronUpDown,
  IconLoading,
  IconSplashLines,
  IconChevron,
  IconArrowDiagonal,
};
