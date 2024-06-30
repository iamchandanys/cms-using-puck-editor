import type { Config } from "@measured/puck";
import { ViWithHeading } from "./components/vi-with-heading";
import { InsuranceTypes } from "./components/insurance-types";
import { FeaturesListCard } from "./components/features-list-card";

type Components = {
  ViWithHeadingBlock: {};
  InsuranceTypeBlock: {};
  FeaturesListCardBlock: {};
};

export const config: Config<Components> = {
  components: {
    ViWithHeadingBlock: {
      fields: {
        title: {
          type: "text",
        },
        description: {
          type: "textarea",
        },
        allProductsBtn: {
          type: "text",
        },
        advisorBtn: {
          type: "text",
        },
        bannerImg: {
          type: "text",
        },
      },
      defaultProps: {
        title: "Buy Insurance you want in 5 minutes",
        description:
          "From checkout to global sales tax compliance, companies around the world use Selekta to simplify their payment stack.",
        allProductsBtn: "See all our Insurance Products",
        advisorBtn: "Speak to an advisor",
        bannerImg:
          "https://codesnippet.blob.core.windows.net/store-images/5d8876c20e57bf6e470a6cca699c67f2.png",
      },
      render: ({
        title,
        description,
        allProductsBtn,
        advisorBtn,
        bannerImg,
      }: any) => {
        return (
          <>
            <ViWithHeading
              title={title}
              description={description}
              allProductsBtn={allProductsBtn}
              advisorBtn={advisorBtn}
              bannerImg={bannerImg}
            ></ViWithHeading>
          </>
        );
      },
    },
    InsuranceTypeBlock: {
      fields: {
        title: {
          type: "text",
        },
        description: {
          type: "textarea",
        },
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
            description: { type: "text" },
          },
          defaultItemProps: {
            title: "Lorem ipsum",
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
          },
        },
      },
      defaultProps: {
        title: "What are you looking for? Can we help?",
        description:
          "Here we focus on markets where creativity and innovation can unlock long-term value and growth.",
        items: [
          {
            title: "LIFE COVER",
            description:
              "Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.",
          },
        ],
      },
      render: ({ title, description, items }: any) => {
        return (
          <InsuranceTypes
            title={title}
            description={description}
            items={items}
          ></InsuranceTypes>
        );
      },
    },
    FeaturesListCardBlock: {
      fields: {
        title: {
          type: "text",
        },
        description: {
          type: "textarea",
        },
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
            description: { type: "text" },
          },
          defaultItemProps: {
            title: "Lorem ipsum",
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
          },
        },
      },
      defaultProps: {
        title: "Insurance to help you get though life",
        description:
          "Here at Selekta we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
      },
      render: ({ title, description, items }: any) => {
        return (
          <>
            <FeaturesListCard
              title={title}
              description={description}
              items={items}
            ></FeaturesListCard>
          </>
        );
      },
    },
  },
  root: {
    render: ({ children }) => {
      return <div>{children}</div>;
    },
  },
};

export default config;
