import { PropsWithoutRef, SVGProps } from "react"

const LogoText = (props: PropsWithoutRef<SVGProps<SVGElement>>) => {
  return (
    <svg viewBox="0 0 437 118" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.4276 48.86L12.7722 46.1511C7.37237 43.5645 1.1491 47.6087 1.31943 53.5936L1.97807 76.737C2.04315 79.0237 3.48883 81.0423 5.63278 81.8401C9.38029 83.2346 13.3432 80.3767 13.2031 76.3806L13.013 70.9567C12.8066 65.067 18.8232 60.9833 24.2205 63.3498L26.8686 64.5109C31.3415 66.472 36.5125 64.0025 37.7986 59.2909L38.6098 56.3193C40.1397 50.7149 46.9447 48.5584 51.4231 52.2588L55.8708 55.9337C59.0012 58.5203 63.7561 56.6914 64.3464 52.6737C64.6039 50.9205 63.9529 49.1565 62.6182 47.9909L44.5618 32.2226C40.0831 28.3115 33.0542 30.4798 31.5573 36.2344L29.626 43.659C28.3593 48.5285 22.9654 51.0337 18.4276 48.86Z"
        fill="black"
      />
      <path
        d="M2.05908 16.9934L2.38711 36.9331C2.42307 39.1191 3.72634 41.0847 5.72584 41.9688C9.6117 43.6869 13.9221 40.6269 13.5818 36.3918L13.4999 35.3732C13.066 29.973 19.2674 26.6415 23.5306 29.9845L24.6852 30.8899C27.9513 33.4511 32.7652 31.5148 33.3482 27.4054C33.6289 25.427 32.7922 23.4557 31.1742 22.2833L14.7521 10.3837C9.41384 6.51558 1.95064 10.4019 2.05908 16.9934Z"
        fill="#3C95FF"
      />
      <path
        d="M106.232 67L105.672 61.12V49.64C105.672 47.232 105.159 45.5053 104.132 44.46C103.105 43.396 101.565 42.864 99.512 42.864C98.3547 42.864 97.3 43.032 96.348 43.368C95.4147 43.704 94.668 44.2267 94.108 44.936C93.5667 45.6267 93.296 46.5227 93.296 47.624H88.424C88.424 45.6827 88.9 44.124 89.852 42.948C90.804 41.7533 92.1107 40.8947 93.772 40.372C95.452 39.8307 97.3653 39.56 99.512 39.56C101.565 39.56 103.385 39.9053 104.972 40.596C106.559 41.2867 107.8 42.388 108.696 43.9C109.592 45.3933 110.04 47.344 110.04 49.752V67H106.232ZM97.104 67.672C94.9013 67.672 93.0813 67.28 91.644 66.496C90.2067 65.712 89.1333 64.6947 88.424 63.444C87.7147 62.1933 87.36 60.8773 87.36 59.496C87.36 57.6853 87.808 56.2107 88.704 55.072C89.6187 53.9333 90.86 53.1027 92.428 52.58C93.996 52.0387 95.76 51.768 97.72 51.768C99.12 51.768 100.52 51.908 101.92 52.188C103.339 52.468 104.72 52.8507 106.064 53.336V56.08C104.944 55.632 103.675 55.2773 102.256 55.016C100.856 54.7547 99.568 54.624 98.392 54.624C96.6 54.624 95.088 54.9973 93.856 55.744C92.624 56.472 92.008 57.7227 92.008 59.496C92.008 60.8027 92.4747 61.9227 93.408 62.856C94.36 63.7893 95.872 64.256 97.944 64.256C99.4 64.256 100.707 63.92 101.864 63.248C103.04 62.5573 103.964 61.6987 104.636 60.672C105.327 59.6453 105.672 58.6187 105.672 57.592H106.736C106.736 59.384 106.344 61.0453 105.56 62.576C104.795 64.1067 103.693 65.3387 102.256 66.272C100.819 67.2053 99.1013 67.672 97.104 67.672ZM139.54 67V51.264C139.54 48.7067 138.924 46.7653 137.692 45.44C136.478 44.096 134.817 43.424 132.708 43.424C131.102 43.424 129.712 43.8627 128.536 44.74C127.36 45.6173 126.454 46.8773 125.82 48.52C125.185 50.144 124.868 52.0853 124.868 54.344H123.188C123.188 51.2267 123.598 48.5667 124.42 46.364C125.241 44.1613 126.436 42.4813 128.004 41.324C129.59 40.148 131.513 39.56 133.772 39.56C135.881 39.56 137.682 40.036 139.176 40.988C140.688 41.9213 141.845 43.2653 142.648 45.02C143.45 46.7747 143.852 48.856 143.852 51.264V67H139.54ZM120.5 67V40.232H124.252L124.868 46.392V67H120.5ZM149.873 40.232H154.745L163.481 63.192H162.473L169.249 40.232H173.729L163.649 72.376C162.809 75.064 161.689 77.136 160.289 78.592C158.889 80.048 157.097 80.776 154.913 80.776C153.737 80.776 152.617 80.608 151.553 80.272C150.507 79.936 149.425 79.4507 148.305 78.816V74.784C149.294 75.568 150.246 76.128 151.161 76.464C152.094 76.8 153.065 76.968 154.073 76.968C155.193 76.968 156.126 76.6133 156.873 75.904C157.638 75.1947 158.273 74.28 158.777 73.16C159.281 72.0587 159.71 70.9013 160.065 69.688L160.849 67L149.873 40.232ZM218.015 67V51.264C218.015 48.7067 217.399 46.7653 216.167 45.44C214.953 44.096 213.311 43.424 211.239 43.424C208.812 43.424 206.955 44.3667 205.667 46.252C204.379 48.1187 203.735 50.704 203.735 54.008H201.719C201.719 51.6 201.952 49.4907 202.419 47.68C202.904 45.8693 203.604 44.3667 204.519 43.172C205.433 41.9587 206.544 41.0533 207.851 40.456C209.157 39.8587 210.641 39.56 212.303 39.56C214.412 39.56 216.213 40.036 217.707 40.988C219.219 41.9213 220.376 43.2653 221.179 45.02C221.981 46.7747 222.383 48.856 222.383 51.264V67H218.015ZM180.383 67V40.232H184.135L184.639 45.608C185.479 43.6667 186.655 42.1733 188.167 41.128C189.697 40.0827 191.527 39.56 193.655 39.56C195.764 39.56 197.565 40.036 199.059 40.988C200.571 41.9213 201.728 43.2653 202.531 45.02C203.333 46.7747 203.735 48.856 203.735 51.264V67H199.423V51.264C199.423 48.7067 198.807 46.7653 197.575 45.44C196.361 44.096 194.7 43.424 192.591 43.424C190.985 43.424 189.595 43.8627 188.419 44.74C187.243 45.6173 186.337 46.8773 185.703 48.52C185.068 50.144 184.751 52.0853 184.751 54.344V67H180.383ZM249.349 67L248.789 61.12V49.64C248.789 47.232 248.276 45.5053 247.249 44.46C246.223 43.396 244.683 42.864 242.629 42.864C241.472 42.864 240.417 43.032 239.465 43.368C238.532 43.704 237.785 44.2267 237.225 44.936C236.684 45.6267 236.413 46.5227 236.413 47.624H231.541C231.541 45.6827 232.017 44.124 232.969 42.948C233.921 41.7533 235.228 40.8947 236.889 40.372C238.569 39.8307 240.483 39.56 242.629 39.56C244.683 39.56 246.503 39.9053 248.089 40.596C249.676 41.2867 250.917 42.388 251.813 43.9C252.709 45.3933 253.157 47.344 253.157 49.752V67H249.349ZM240.221 67.672C238.019 67.672 236.199 67.28 234.761 66.496C233.324 65.712 232.251 64.6947 231.541 63.444C230.832 62.1933 230.477 60.8773 230.477 59.496C230.477 57.6853 230.925 56.2107 231.821 55.072C232.736 53.9333 233.977 53.1027 235.545 52.58C237.113 52.0387 238.877 51.768 240.837 51.768C242.237 51.768 243.637 51.908 245.037 52.188C246.456 52.468 247.837 52.8507 249.181 53.336V56.08C248.061 55.632 246.792 55.2773 245.373 55.016C243.973 54.7547 242.685 54.624 241.509 54.624C239.717 54.624 238.205 54.9973 236.973 55.744C235.741 56.472 235.125 57.7227 235.125 59.496C235.125 60.8027 235.592 61.9227 236.525 62.856C237.477 63.7893 238.989 64.256 241.061 64.256C242.517 64.256 243.824 63.92 244.981 63.248C246.157 62.5573 247.081 61.6987 247.753 60.672C248.444 59.6453 248.789 58.6187 248.789 57.592H249.853C249.853 59.384 249.461 61.0453 248.677 62.576C247.912 64.1067 246.811 65.3387 245.373 66.272C243.936 67.2053 242.219 67.672 240.221 67.672ZM282.657 67V51.264C282.657 48.7067 282.041 46.7653 280.809 45.44C279.596 44.096 277.934 43.424 275.825 43.424C274.22 43.424 272.829 43.8627 271.653 44.74C270.477 45.6173 269.572 46.8773 268.937 48.52C268.302 50.144 267.985 52.0853 267.985 54.344H266.305C266.305 51.2267 266.716 48.5667 267.537 46.364C268.358 44.1613 269.553 42.4813 271.121 41.324C272.708 40.148 274.63 39.56 276.889 39.56C278.998 39.56 280.8 40.036 282.293 40.988C283.805 41.9213 284.962 43.2653 285.765 45.02C286.568 46.7747 286.969 48.856 286.969 51.264V67H282.657ZM263.617 67V40.232H267.369L267.985 46.392V67H263.617ZM305.646 67.672C304.19 67.672 302.883 67.392 301.726 66.832C300.568 66.272 299.654 65.432 298.982 64.312C298.31 63.192 297.974 61.792 297.974 60.112V32.784H302.286V60C302.286 62.7627 303.574 64.144 306.15 64.144C306.915 64.144 307.652 64.06 308.362 63.892C309.09 63.724 309.902 63.472 310.798 63.136L311.414 66.272C310.462 66.6827 309.51 67.0187 308.558 67.28C307.624 67.5413 306.654 67.672 305.646 67.672ZM293.662 43.256V40.232H310.742V43.256H293.662ZM320.933 33.904C320.037 33.904 319.327 33.652 318.805 33.148C318.282 32.6253 318.021 31.944 318.021 31.104C318.021 30.2827 318.282 29.6293 318.805 29.144C319.327 28.6587 320.037 28.416 320.933 28.416C321.829 28.416 322.538 28.6587 323.061 29.144C323.583 29.6293 323.845 30.2827 323.845 31.104C323.845 31.944 323.583 32.6253 323.061 33.148C322.538 33.652 321.829 33.904 320.933 33.904ZM318.749 67V40.176H323.117V67H318.749ZM354.188 67V51.264C354.188 48.7067 353.572 46.7653 352.34 45.44C351.127 44.096 349.466 43.424 347.356 43.424C345.751 43.424 344.36 43.8627 343.184 44.74C342.008 45.6173 341.103 46.8773 340.468 48.52C339.834 50.144 339.516 52.0853 339.516 54.344H337.836C337.836 51.2267 338.247 48.5667 339.068 46.364C339.89 44.1613 341.084 42.4813 342.652 41.324C344.239 40.148 346.162 39.56 348.42 39.56C350.53 39.56 352.331 40.036 353.824 40.988C355.336 41.9213 356.494 43.2653 357.296 45.02C358.099 46.7747 358.5 48.856 358.5 51.264V67H354.188ZM335.148 67V40.232H338.9L339.516 46.392V67H335.148ZM378.241 67.672C375.926 67.672 373.854 67.084 372.025 65.908C370.214 64.7133 368.777 63.0613 367.713 60.952C366.668 58.8427 366.145 56.416 366.145 53.672C366.145 50.7413 366.668 48.2213 367.713 46.112C368.758 44.0027 370.186 42.388 371.997 41.268C373.826 40.1293 375.908 39.56 378.241 39.56C380.276 39.56 382.012 39.9707 383.449 40.792C384.886 41.6133 386.044 42.724 386.921 44.124C387.798 45.524 388.405 47.1107 388.741 48.884C389.096 50.6387 389.198 52.4587 389.049 54.344H369.673V51.656H386.165L384.877 52.496C384.933 51.3947 384.868 50.2933 384.681 49.192C384.513 48.0907 384.186 47.0827 383.701 46.168C383.216 45.2347 382.534 44.488 381.657 43.928C380.78 43.368 379.66 43.088 378.297 43.088C376.58 43.088 375.142 43.5267 373.985 44.404C372.828 45.2813 371.96 46.4387 371.381 47.876C370.802 49.2947 370.513 50.8347 370.513 52.496V54.288C370.513 56.1547 370.793 57.8253 371.353 59.3C371.932 60.7747 372.79 61.9413 373.929 62.8C375.068 63.6587 376.505 64.088 378.241 64.088C379.977 64.088 381.405 63.668 382.525 62.828C383.645 61.988 384.326 60.7467 384.569 59.104H389.105C388.825 60.8773 388.19 62.408 387.201 63.696C386.212 64.9653 384.952 65.9453 383.421 66.636C381.89 67.3267 380.164 67.672 378.241 67.672Z"
        fill="black"
      />
    </svg>
  )
}

export default LogoText
