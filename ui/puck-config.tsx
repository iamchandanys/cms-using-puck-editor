import { FeaturesListCard } from "@/app/puck-editor/components/features-list-card";
import { InsuranceTypes } from "@/app/puck-editor/components/insurance-types";
import { ViWithHeading } from "@/app/puck-editor/components/vi-with-heading";
import type { Config } from "@measured/puck";

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

export const initialData = {
  root: {
    props: {},
  },
  content: [
    {
      type: "ViWithHeadingBlock",
      props: {
        title: "Buy Insurance you want in 5 minutes",
        description:
          "From checkout to global sales tax compliance, companies around the world use Selekta to simplify their payment stack.",
        allProductsBtn: "See all our Insurance Products",
        advisorBtn: "Speak to an advisor",
        bannerImg:
          "https://codesnippet.blob.core.windows.net/store-images/5d8876c20e57bf6e470a6cca699c67f2.png",
        id: "ViWithHeadingBlock-5b3428e0-f55d-4f21-8f73-ec68b219da48",
      },
    },
    {
      type: "InsuranceTypeBlock",
      props: {
        title: "What are you looking for?",
        description:
          "Here we focus on markets where creativity and innovation can unlock long-term value and growth.",
        items: [
          {
            title: "LIFE COVER",
            description:
              "Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.",
          },
          {
            title: "HEALTH COVER",
            description:
              "Term life insurance can cover you for 10 to 40 years, whole covers you for your entire life. Plus,whole life policies have a guaranteed cash value that grows over time, so they tend to be.",
          },
          {
            title: "HOUSE COVER",
            description:
              "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.",
          },
          {
            title: "CAR COVER",
            description:
              "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.",
          },
        ],
        id: "InsuranceTypeBlock-32fc9ada-cb1f-4c4e-a24c-abeeb1a590f5",
      },
    },
    {
      type: "FeaturesListCardBlock",
      props: {
        title: "Insurance to help you get though life",
        description:
          "Here at Selekta we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
        id: "FeaturesListCardBlock-c4c22b92-9cf0-448f-8f4c-7af4066f0e45",
        items: [
          {
            title: "TravelSafe from Chubb",
            description:
              "Self-service Insurance with the all benefits that you expect. Back by Sanlam",
          },
          {
            title: "Insurance Product two",
            description:
              "Self-service Insurance with the all benefits that you expect. Back by iTOO",
          },
          {
            title: "Insurance Product three",
            description:
              "Self-service Insurance with the all benefits that you expect. Back by Hollard",
          },
          {
            title: "Insurance Product four",
            description:
              "Self-service Insurance with the all benefits that you expect. Back by Sanlam",
          },
          {
            title: "Insurance Product five",
            description:
              "Self-service Insurance with the all benefits that you expect. Back by Liberty",
          },
          {
            title: "Insurance Product six",
            description:
              "Self-service Insurance with the all benefits that you expect. Back by Old Mutual",
          },
          {
            title: "Insurance Product seven",
            description:
              "Self-service Insurance with the all benefits that you expect. Back by Sanlam",
          },
          {
            title: "Insurance Product eight",
            description:
              "Self-service Insurance with the all benefits that you expect. Back by iTOO",
          },
        ],
      },
    },
  ],
  zones: {},
};
