import theme from "@/constants/theme";

export default function LogoIcon({ fill = theme.colors.chocolateMain }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M4.69971 6.80185C4.32693 6.93694 3.92472 7.0106 3.5053 7.0106C1.56937 7.0106 0 5.44122 0 3.5053C0 1.56938 1.56937 0 3.5053 0C5.44123 0 7.0106 1.56938 7.0106 3.5053C7.0106 3.92083 6.9383 4.31946 6.80559 4.68932C7.17837 4.55423 7.58058 4.48057 8 4.48057C8.41942 4.48057 8.82163 4.55423 9.19441 4.68932C9.0617 4.31946 8.9894 3.92083 8.9894 3.5053C8.9894 1.56938 10.5588 0 12.4947 0C14.4306 0 16 1.56938 16 3.5053C16 5.44122 14.4306 7.0106 12.4947 7.0106C12.0753 7.0106 11.6731 6.93694 11.3003 6.80185C11.433 7.1717 11.5053 7.57034 11.5053 7.98587C11.5053 8.41363 11.4287 8.82349 11.2884 9.20248C11.6645 9.06464 12.0708 8.9894 12.4947 8.9894C14.4306 8.9894 16 10.5588 16 12.4947C16 14.4306 14.4306 16 12.4947 16C10.5588 16 8.9894 14.4306 8.9894 12.4947C8.9894 12.0669 9.06602 11.6571 9.20629 11.2781C8.83018 11.4159 8.42388 11.4912 8 11.4912C7.57612 11.4912 7.16982 11.4159 6.79371 11.2781C6.93398 11.6571 7.0106 12.0669 7.0106 12.4947C7.0106 14.4306 5.44123 16 3.5053 16C1.56937 16 0 14.4306 0 12.4947C0 10.5588 1.56937 8.9894 3.5053 8.9894C3.92918 8.9894 4.33548 9.06464 4.71159 9.20248C4.57132 8.82349 4.4947 8.41363 4.4947 7.98587C4.4947 7.57034 4.567 7.1717 4.69971 6.80185Z"
        fill={fill}
      />
    </svg>
  );
}
