"use client"

import theme from "@/constants/theme";

interface Props {
  fill?: string;
}

const HeartIcon = ({ fill = theme.colors.chocolateMain }: Props) => {
  return (
    <>
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.47234 16L7.24385 14.8665C5.81767 13.5441 4.63861 12.4033 3.70665 11.4441C2.77469 10.485 2.03336 9.62398 1.48266 8.86104C0.931957 8.09809 0.547172 7.39691 0.328303 6.75749C0.109434 6.11807 0 5.46412 0 4.79564C0 3.42961 0.444798 2.28883 1.33439 1.3733C2.22399 0.457766 3.33245 0 4.65979 0C5.39406 0 6.09302 0.159855 6.75669 0.479564C7.42036 0.799273 7.99224 1.24977 8.47234 1.83106C8.95244 1.24977 9.52432 0.799273 10.188 0.479564C10.8517 0.159855 11.5506 0 12.2849 0C13.6122 0 14.7207 0.457766 15.6103 1.3733C16.4999 2.28883 16.9447 3.42961 16.9447 4.79564C16.9447 5.46412 16.8352 6.11807 16.6164 6.75749C16.3975 7.39691 16.0127 8.09809 15.462 8.86104C14.9113 9.62398 14.17 10.485 13.238 11.4441C12.3061 12.4033 11.127 13.5441 9.70083 14.8665L8.47234 16ZM8.47234 13.6458C9.82792 12.396 10.9434 11.3243 11.8189 10.4305C12.6944 9.53679 13.3863 8.75931 13.8946 8.09809C14.403 7.43688 14.756 6.84832 14.9537 6.33243C15.1514 5.81653 15.2502 5.30427 15.2502 4.79564C15.2502 3.92371 14.9678 3.19709 14.403 2.6158C13.8382 2.03451 13.1321 1.74387 12.2849 1.74387C11.6212 1.74387 11.007 1.93642 10.4422 2.32153C9.87734 2.70663 9.48902 3.19709 9.27721 3.79292H7.66747C7.45566 3.19709 7.06734 2.70663 6.50252 2.32153C5.9377 1.93642 5.32345 1.74387 4.65979 1.74387C3.81255 1.74387 3.10652 2.03451 2.5417 2.6158C1.97688 3.19709 1.69447 3.92371 1.69447 4.79564C1.69447 5.30427 1.79331 5.81653 1.991 6.33243C2.18869 6.84832 2.5417 7.43688 3.05004 8.09809C3.55838 8.75931 4.25029 9.53679 5.12577 10.4305C6.00124 11.3243 7.11677 12.396 8.47234 13.6458Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

export default HeartIcon;
