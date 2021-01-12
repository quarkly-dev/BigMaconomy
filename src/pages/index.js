import React from "react";
import theme from "theme";
import { Theme, Link, Span, Text, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				BigMaconomics
			</title>
			<meta name={"description"} content={"BigMaconomics is an app that shows the Big Mac Index and the number of BigMacs you can buy in any country"} />
			<meta property={"og:title"} content={"BigMaconomics"} />
			<meta property={"og:description"} content={"BigMaconomics is an app that shows the Big Mac Index and the number of BigMacs you can buy in any country"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f841d553d84d4001ec38fac/images/og_%20image.png?v=2021-01-12T13:47:01.230Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f841d553d84d4001ec38fac/images/favicon-32.png?v=2021-01-12T13:45:53.006Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5f841d553d84d4001ec38fac/images/favicon-152.png?v=2021-01-12T13:46:04.242Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5f841d553d84d4001ec38fac/images/favicon-152.png?v=2021-01-12T13:46:04.242Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5f841d553d84d4001ec38fac/images/favicon-152.png?v=2021-01-12T13:46:04.242Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5f841d553d84d4001ec38fac/images/favicon-152.png?v=2021-01-12T13:46:04.242Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5f841d553d84d4001ec38fac/images/favicon-270.png?v=2021-01-12T13:46:13.714Z"} />
			<meta name={"msapplication-TileColor"} content={"#FDF9F7"} />
		</Helmet>
		<Section background="--color-lightD2" padding="80px 0 40px 0" inner-max-width="1000px" xs-padding="40px 0 20px 0">
			<Override
				slot="SectionContent"
				padding="36px 64px 48px 64px"
				box-sizing="border-box"
				background="--color-light"
				box-shadow="0 10px 19px -8px rgba(34, 28, 25, 0.24)"
				border-radius="8px"
				position="relative"
				md-padding="36px 48px 48px 48px"
				sm-padding="36px 36px 48px 36px"
				xs-padding="8px 24px 36px 24px"
			/>
			<Box quarkly-title="Header">
				<Text
					font="--headline1"
					color="--greyD1"
					width="80%"
					sm-width="100%"
					md-font="normal 300 37px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					lg-font="normal 300 50px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					xs-font="normal 300 31px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
				>
					<Span
						font="normal 700 72px/1.2 --fontFamily-sans"
						color="--darkL2"
						lg-font="normal 700 50px/1.2 --fontFamily-sans"
						md-font="normal 700 37px/1.2 --fontFamily-sans"
						xs-font="normal 700 31px/1.2 --fontFamily-sans"
					>
						BigMac
					</Span>
					onomics
				</Text>
				<Text
					font="--headline3"
					color="--greyD2"
					margin="16px 0px 38px 0px"
					width="80%"
					lg-font="normal 400 19px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					md-font="normal 400 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					md-margin="6px 0px 24px 0px"
				>
					Shows how many BigMacs you can buy on your salary in different countries at different times
				</Text>
				<Image
					width="218px"
					height="218px"
					src="https://uploads.quarkly.io/5f730004864724001fc89f3f/images/burger-illustration.png?v=2020-10-09T08:32:38.484Z"
					position="absolute"
					bottom="auto"
					left="auto"
					right="-0px"
					top="-24px"
					transform="rotate(-30deg)"
					filter="drop-shadow(-5px 12px 19px rgba(52,38,28,0.34)) drop-shadow(-3px 5px 5px rgba(84,50,20,0.31))"
					lg-width="160px"
					lg-height="160px"
					md-width="130px"
					md-height="130px"
					sm-width="110px"
					sm-height="110px"
					xs-width="80px"
					xs-bottom="auto"
					xs-height="80px"
					xs-left="auto"
					xs-right="-15px"
					xs-top="-38px"
					sm-top="-46px"
					sm-right="-33px"
					md-right="-15px"
				/>
			</Box>
			<Box quarkly-title="Content">
				<Components.App>
					<Override slot="Input" width="320px" lg-width="auto" sm-margin="0px 0px 24px 0px">
						<Override
							slot="Input Input"
							height="74px"
							font="--headline2"
							padding="6px 16px 6px 36px"
							border-radius="8px"
							focus-border-color="--color-primary"
							width="320px"
							color="--darkL2"
							lg-width="220px"
							lg-font="normal 500 32px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							lg-height="60px"
							lg-padding="4px 16px 4px 36px"
							md-font="normal 500 28px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							md-width="160px"
							md-height="58px"
							sm-width="100%"
						/>
						<Override
							slot="Input Label"
							font="--base"
							color="--greyD2"
							margin="0px 0px 12px 0px"
							md-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						/>
						<Override
							slot="Input Icon"
							top="30px"
							left="12px"
							right="auto"
							height="62px"
							font="22px/40px sans-serif"
							color="#939a9f"
							md-font="18px/40px sans-serif"
							md-bottom="auto"
							sm-bottom="0px"
							bottom="auto"
							lg-bottom="auto"
							lg-top="20px"
							md-top="20px"
						/>
					</Override>
					<Override
						slot="Basic options"
						display="flex"
						justify-content="stretch"
						padding="0px 0px 18px 0px"
						sm-flex-direction="column"
						sm-padding="0px 0px 22px 0px"
						box-sizing="border-box"
					/>
					<Override slot="Range">
						<Override
							slot="Range"
							display="flex"
							flex-direction="column"
							margin="0px 24px 0px 36px"
							flex="1 1"
							sm-margin="0px 0px 0px 0px"
						/>
						<Override
							slot="Range Label"
							color="--greyD2"
							font="--base"
							margin="0px 0px 16px 0px"
							md-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						/>
						<Override slot="Range Thumb Point" border-radius="50%" background="#cccccc" />
						<Override slot="Range Track" lg-height="29px" md-height="26px" />
						<Override slot="Range Marks Value" font="--base" color="--greyD2" md-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" />
						<Override slot="Range Track Line" background="rgba(0, 0, 0, 0) linear-gradient(to right,--color-primary 0%,rgb(0, 119, 204) 100%,rgb(159, 111, 111) 100%,rgb(84, 139, 244) 100%) 0% 0% /auto repeat scroll padding-box" />
						<Override
							slot="Range Thumb Label"
							font="300 13px --fontFamily-sans"
							background="--color-primary"
							lg-padding="6px 10px 6px 10px"
							md-padding="4px 6px 4px 6px"
						/>
						<Override slot="Range Thumb" box-shadow="0px 2px 8px 0 #aaaaaa" />
					</Override>
					<Override slot="Sort">
						<Override
							slot="Sort Label"
							color="--greyD2"
							font="--base"
							md-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							margin="0px 8px 0px 0px"
						/>
						<Override
							slot="Sort Select"
							width="120px"
							height="35px"
							padding="0px 0px 1px 6px"
							font="13px/1.3 --fontFamily-sans"
							color="--darkL2"
							border-color="--color-lightD2"
							border-width="2px"
							border-radius="8px"
							margin="0px 10px 0px 0px"
						/>
						<Override slot="Sort Direction" color="--greyD2" />
						<Override slot="Sort" sm-margin="0px 0px 12px 0px" />
					</Override>
					<Override slot="Filter">
						<Override
							slot="Filter Label"
							color="--greyD2"
							font="--base"
							md-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							margin="0px 8px 0px 0px"
						/>
						<Override
							slot="Filter Select"
							width="120px"
							height="35px"
							padding="0px 0px 1px 6px"
							font="13px/1.3 --fontFamily-sans"
							color="--darkL2"
							border-color="--color-lightD2"
							border-width="2px"
							border-radius="8px"
							margin="0px 10px 0px 0px"
						/>
					</Override>
					<Override
						slot="Other options"
						display="flex"
						justify-content="space-between"
						margin="0px 0px 32px 0px"
						sm-flex-direction="column"
					/>
					<Override slot="Content" display="flex" flex-wrap="wrap" box-sizing="border-box" />
					<Override slot="Card">
						<Override
							slot="Card"
							background="#FFFFFF"
							border-radius="8px"
							box-shadow="0px 6px 18px -8px rgba(47, 41, 33, 0.24)"
							display="flex"
							box-sizing="border-box"
							padding="18px 24px 24px 24px"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
							margin="0px 0px 36px 0px"
							width="calc(50% - 18px)"
							lg-width="calc(50% - 36px)"
							md-width="100%"
							lg-justify-content="flex-start"
						/>
						<Override slot="Card :odd" margin="0px 36px 36px 0px" md-margin="0px 0px 36px 0px" />
						<Override slot="Card Header" display="flex" align-items="flex-end" margin="0px 0px 6px 0px" />
						<Override
							slot="Card Footer"
							display="flex"
							align-items="center"
							justify-content="space-between"
							width="100%"
							margin="auto 0px 0px 0px"
						/>
						<Override slot="Card Total" display="flex" align-items="center" />
						<Override
							slot="Card Price"
							display="flex"
							align-items="center"
							flex="0 0 auto"
							color="--greyD2"
						/>
						<Override
							slot="Card Country Flag"
							padding="0px 8px 0px 0px"
							width="1.35em"
							sm-font="14px sans-serif"
							font="16px --fontFamily-sans"
							sm-width="0.6em"
						/>
						<Override
							slot="Card Country Name"
							font="--base"
							white-space="pre"
							text-overflow="ellipsis"
							overflow-x="hidden"
							color="--darkL2"
							sm-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						/>
						<Override slot="Card List" min-width="100%" cursor="default" margin="0px 0px 14px 0px" />
						<Override
							slot="Card Total Value"
							margin="0px 0px 0px 0.2em"
							font="--base"
							color="--darkL2"
							sm-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						/>
						<Override
							slot="Card Total Descr"
							font="--base"
							color="--greyD2"
							sm-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							margin="0px 0px 0px 0px"
						/>
						<Override
							slot="Card Price Descr"
							font="--base"
							color="--greyD2"
							sm-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							margin="0px 0px 0px 0px"
						/>
						<Override
							slot="Card Price Value"
							font="--base"
							color="--darkL2"
							margin="0px 0px 0px .2em"
							sm-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						/>
						<Override
							slot="Card Item Last"
							width="1.35em"
							display="inline-block"
							position="relative"
							right="-0.35em"
							left="0px"
							margin="0px -0.35em 0px 0px"
						/>
						<Override
							slot="Card Item Hide"
							width="100%"
							height="100%"
							background="white"
							position="absolute"
							top="0"
							border-radius="50%"
							opacity="1"
						/>
						<Override slot="Card Country" margin="0px 0px 2px 0px" />
					</Override>
				</Components.App>
			</Box>
		</Section>
		<Section
			quarkly-title="Footer"
			background="--color-lightD2"
			inner-max-width="1000px"
			padding="0px 0 80px 0"
			xs-padding="40px 0 20px 0"
		>
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Link
				href="https://github.com/TheEconomist/big-mac-data"
				display="flex"
				align-items="center"
				text-decoration-line="initial"
				target="_blank"
			>
				<Text font="--base" color="--greyD2" margin="16px 10px 16px 0px">
					Data from
				</Text>
				<Image width="24px" height="auto" src="https://avatars2.githubusercontent.com/u/33934691?s=200&v=4" margin="0px 5px 0px 0px" />
				<Text color="#191e22" margin="16px 8px 16px 0px" font="normal 500 16px/1.2 --fontFamily-sans">
					The Economist
				</Text>
			</Link>
			<Link
				href="https://en.wikipedia.org/wiki/Big_Mac_Index"
				display="flex"
				text-decoration-line="initial"
				font="--base"
				target="_blank"
			>
				<Text color="--greyD2" display="flex" align-items="center">
					About Big Mac Index
				</Text>
			</Link>
			<Link href="https://quarkly.io/" display="flex" text-decoration-line="initial" target="_blank">
				<Text font="--base" color="--greyD2" margin="16px 8px 16px 0px">
					Made on{" "}
				</Text>
				<Image width="94px" height="auto" src="https://uploads.quarkly.io/5f730004864724001fc89f3f/images/logo-on-light.svg?v=2020-10-08T07:10:58.147Z" />
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});