import type { Config } from "@measured/puck";
import { DropZone } from "@measured/puck";

type Props = {};

type Components = {
  HeadingBlock: {
    title: string;
  };
  ExampleA: {};
};

type RootProps = {
  title: string;
  description: string;
};

export const config: Config<Components, RootProps> = {
  categories: {
    typography: {
      components: ["HeadingBlock"],
    },
  },
  components: {
    ExampleA: {
      render: () => {
        return (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              <DropZone
                zone="left-column"
                // allow={categories.typography.components}
              />
              <DropZone
                zone="right-column"
                // allow={categories.typography.components}
              />
            </div>
          </div>
        );
      },
    },
    HeadingBlock: {
      fields: {
        title: {
          type: "text",
        },
      },
      defaultProps: {
        title: "Hello, world",
      },
      render: ({ title }: any) => {
        return <h1>{title}</h1>;
      },
    },
  },
  root: {
    fields: {
      title: { type: "text" },
      description: { type: "textarea" },
    },
    defaultProps: {
      title: "Hello, world",
      description: "Lorem ipsum",
    },
    render: ({ children, title, description }) => {
      return (
        <div>
          <h1>{title}</h1>
          <h3>{description}</h3>
          {children}
        </div>
      );
    },
  },
};

export default config;
