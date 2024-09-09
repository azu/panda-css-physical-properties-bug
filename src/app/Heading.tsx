import { ElementType } from "react";
import { cva, RecipeVariantProps } from "../../styled-system/css";

const heading = cva({
    base: {
        fontWeight: "strong",
        lineHeight: "m",
    },
    variants: {
        size: {
            "2xl": {
                fontSize: "2xl",
            },
            l: {
                fontSize: "l",
            },
            m: {
                fontSize: "m",
            },
            s: {
                fontSize: "s",
            },
            "2xs": {
                fontSize: "2xs",
            },
        },
    },
    defaultVariants: {
        size: "2xl",
    },
});

export type HeadingVariants = RecipeVariantProps<typeof heading>;
export type HeadingProps<C extends ElementType = "h1"> = HeadingVariants &
    React.ComponentPropsWithRef<C> & {
    as?: C;
};

export const Heading = <C extends ElementType = "h1">({
                                                          as: Component = "h1",
                                                          size,
                                                          children,
                                                          ...headingAttrs
                                                      }: HeadingProps<C>) => {
    return (
        <Component
            {...headingAttrs}
            className={heading({
                size,
            })}
        >
            {children}
        </Component>
    );
};
