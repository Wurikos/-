import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Box } from "@quarkly/widgets";
const defaultProps = {
	"padding": "10px"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
			"width": "320px",
			"max-width": "100%"
		}
	}
};

const Ada = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Image {...override("image")} />
		{children}
	</Box>;
};

Object.assign(Ada, { ...Box,
	defaultProps,
	overrides
});
export default Ada;