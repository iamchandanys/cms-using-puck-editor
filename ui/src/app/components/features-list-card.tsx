import React from "react";

interface FeaturesListCardProps {
  title: string;
  description: string;
  items: [];
}

export const FeaturesListCard: React.FC<FeaturesListCardProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              {description}
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0">
            {items?.map((item: any) => {
              return (
                <>
                  <div className="p-6 bg-white rounded shadow dark:bg-gray-800">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg
                        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">
                      {item.title}
                    </h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
