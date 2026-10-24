import Link from "next/link";

const fourPath =
  "M380.018 7v390.143H455v87.309h-74.982V593H278.731V484.452H0v-84.556L248.503 7zM275.591 127.347 108.352 392.423v4.72h171.95V127.347z";

const zeroPath =
  "M227.5 600q-71.737 0-122.866-35.294-50.731-35.687-77.683-102.353Q.001 395.294 0 300.392q0-94.902 26.951-161.961 26.952-67.45 77.683-102.745Q155.763.001 227.5 0q71.341 0 122.47 35.686 51.127 35.687 78.079 102.745Q454.999 205.49 455 300.392q0 94.902-26.951 161.961-26.952 66.666-77.683 102.353Q299.634 600 227.5 600m0-88.627q38.445 0 65-24.706 26.95-24.706 40.823-71.765 14.268-47.451 14.268-114.51 0-67.45-14.268-114.902-13.872-47.45-40.823-72.157-26.555-25.098-65-25.098-57.866 0-89.177 55.687-30.915 55.293-30.914 156.47 0 67.059 13.871 114.51 13.872 47.059 40.824 71.765 26.95 24.705 65.396 24.706";

export default function NotFound() {
  return (
    <main className="not-found-page site-container flex-col">
      <section className="content-grid flex-1">
        <div
          aria-hidden="true"
          className="col-span-full grid grid-cols-3 gap-x-1 lg:gap-x-4"
        >
          {["4", "0", "4"].map((digit, index) => (
            <svg
              key={index}
              viewBox="0 0 455 600"
              fill="currentColor"
              className="block h-auto w-full col-span-1"
            >
              <path
                d={digit === "4" ? fourPath : zeroPath}
                fillRule={digit === "4" ? "evenodd" : undefined}
              />
            </svg>
          ))}
        </div>

        <div className="col-span-full">
          <h1 className="col-span-full">Page not found.</h1>
          <p>Sorry:( This page doesn&apos;t exist.</p>

          <Link className="col-span-full" href="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
