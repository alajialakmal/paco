const TKL = ({ size = 18, color = 'var(--fg)' }) => {
  return (
    <svg
      width={size}
      // height={size}
      viewBox="0 0 18 8"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.236842 0C0.106394 0 0 0.106047 0 0.236842V7.10526C0 7.23606 0.106394 7.34211 0.236842 7.34211H17.7632C17.8381 7.34211 17.9047 7.30704 17.9482 7.25239C17.9806 7.21198 18 7.16086 18 7.10526V0.236842C18 0.106047 17.8936 0 17.7632 0H0.236842ZM1.00658 0.710526C0.974198 0.710526 0.947368 0.737038 0.947368 0.769737V1.49718C0.947368 1.52988 0.974198 1.55639 1.00658 1.55639H1.69305C1.72636 1.55639 1.75226 1.52988 1.75226 1.49718V0.769737C1.75226 0.760803 1.75041 0.752332 1.74671 0.744757C1.74301 0.736865 1.73746 0.729897 1.73098 0.724346C1.72081 0.71573 1.70785 0.710526 1.69305 0.710526H1.00658ZM13.772 2.40225C13.785 2.40225 13.797 2.40635 13.8072 2.41332C13.822 2.42408 13.8312 2.44162 13.8312 2.46146V6.57237C13.8312 6.60507 13.8053 6.63158 13.772 6.63158H12.2806C12.2473 6.63158 12.2214 6.60507 12.2214 6.57237V5.84493C12.2214 5.81223 12.1946 5.78572 12.1622 5.78572H11.4748C11.4424 5.78572 11.4156 5.81223 11.4156 5.84493V6.57237C11.4156 6.60507 11.3897 6.63158 11.3564 6.63158H3.42218C3.3898 6.63158 3.36297 6.60507 3.36297 6.57237V5.84493C3.36297 5.83189 3.35927 5.81986 3.35187 5.81009C3.34169 5.79532 3.32412 5.78572 3.30376 5.78572H2.61729C2.58398 5.78572 2.55808 5.81223 2.55808 5.84493V6.57237C2.55808 6.60507 2.53125 6.63158 2.49887 6.63158H1.00658C0.974198 6.63158 0.947368 6.60507 0.947368 6.57237V2.46146C0.947368 2.42876 0.974198 2.40225 1.00658 2.40225H13.772ZM2.57936 0.724144C2.58954 0.715644 2.60249 0.710526 2.61729 0.710526H5.71937C5.75267 0.710526 5.77858 0.737038 5.77858 0.769737V1.49718C5.77858 1.51432 5.77118 1.52973 5.75915 1.54054L5.75175 1.54633C5.7462 1.55026 5.73972 1.55318 5.73232 1.55485L5.71937 1.55639H2.61729C2.58398 1.55639 2.55808 1.52988 2.55808 1.49718V0.769737C2.55808 0.751407 2.56641 0.735014 2.57936 0.724144ZM6.64361 0.710526C6.6103 0.710526 6.5844 0.737038 6.5844 0.769737V1.49718C6.5844 1.51652 6.59365 1.53369 6.60752 1.5445C6.6177 1.55196 6.62973 1.55639 6.64361 1.55639H9.74568C9.75308 1.55639 9.75956 1.55503 9.76604 1.55254L9.78454 1.54167C9.79749 1.5308 9.80489 1.5149 9.80489 1.49718V0.769737L9.80397 0.755281L9.79749 0.741866L9.79009 0.729984L9.78176 0.72319L9.77066 0.716106C9.76326 0.712521 9.75493 0.710526 9.74568 0.710526H6.64361ZM10.6107 0.769737C10.6107 0.737038 10.6366 0.710526 10.6699 0.710526H13.772C13.7859 0.710526 13.7988 0.715239 13.809 0.723161L13.821 0.736373C13.8275 0.745885 13.8312 0.757363 13.8312 0.769737V1.49718C13.8312 1.51704 13.822 1.53462 13.8072 1.54537C13.797 1.55231 13.785 1.55639 13.772 1.55639H10.6699C10.6366 1.55639 10.6107 1.52988 10.6107 1.49718V0.769737ZM14.6962 0.710526C14.6824 0.710526 14.6694 0.715355 14.6592 0.723421C14.6518 0.728885 14.6463 0.735824 14.6426 0.743746C14.6389 0.751581 14.637 0.760398 14.637 0.769737V1.49718C14.637 1.51461 14.6444 1.53028 14.6565 1.54112L14.6676 1.54916C14.6759 1.55376 14.6861 1.55639 14.6962 1.55639H16.9934C17.0258 1.55639 17.0526 1.52988 17.0526 1.49718V0.769737C17.0526 0.737038 17.0258 0.710526 16.9934 0.710526H14.6962ZM17.0314 2.41633C17.0212 2.40754 17.0082 2.40225 16.9934 2.40225H14.6962C14.6842 2.40225 14.6731 2.4058 14.6639 2.41193C14.6472 2.42251 14.637 2.44076 14.637 2.46146V4.03479C14.637 4.06749 14.6629 4.094 14.6962 4.094H16.9934C17.0258 4.094 17.0526 4.06749 17.0526 4.03479V2.46146C17.0526 2.44339 17.0443 2.4272 17.0314 2.41633ZM15.4419 4.99907V5.78572H14.637V6.57237C14.637 6.60507 14.6629 6.63158 14.6962 6.63158H16.9934C17.0258 6.63158 17.0526 6.60507 17.0526 6.57237V5.78572H16.2477V4.99907C16.2477 4.98386 16.2422 4.97001 16.2329 4.95952C16.2218 4.94746 16.2061 4.93986 16.1885 4.93986H15.5011C15.4688 4.93986 15.4419 4.96637 15.4419 4.99907Z"
        fill={color}
      />
    </svg>
  )
}

export default TKL
