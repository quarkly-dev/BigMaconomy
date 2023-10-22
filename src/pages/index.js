import React from "react";
import theme from "theme";
import { Theme, Span, Text, Image, Box, Section, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section padding="80px 0 40px 0" inner-max-width="1000px" xs-padding="40px 0 20px 0" background="--color-lightD2">
			<Override
				slot="SectionContent"
				border-radius="8px"
				position="relative"
				sm-padding="36px 36px 48px 36px"
				xs-padding="8px 24px 36px 24px"
				box-sizing="border-box"
				background="--color-light"
				box-shadow="0 10px 19px -8px rgba(34, 28, 25, 0.24)"
				padding="36px 64px 48px 64px"
				md-padding="36px 48px 48px 48px"
			/>
			<Box quarkly-title="Header">
				<Text
					color="--greyD1"
					width="80%"
					sm-width="100%"
					md-font="normal 300 37px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					lg-font="normal 300 50px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					xs-font="normal 300 31px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					font="--headline1"
				>
					<Span
						xs-font="normal 700 31px/1.2 --fontFamily-sans"
						font="normal 700 72px/1.2 --fontFamily-sans"
						color="--darkL2"
						lg-font="normal 700 50px/1.2 --fontFamily-sans"
						md-font="normal 700 37px/1.2 --fontFamily-sans"
					>
						BigMac
					</Span>
					onomics
				</Text>
				<Text
					color="--greyD2"
					margin="16px 0px 38px 0px"
					width="80%"
					lg-font="normal 400 19px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					md-font="normal 400 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					md-margin="6px 0px 24px 0px"
					font="--headline3"
				>
					Shows how many BigMacs you can buy on your salary in different countries at different times
				</Text>
				<Image
					md-height="130px"
					xs-width="80px"
					xs-left="auto"
					top="-24px"
					lg-height="160px"
					md-width="130px"
					sm-width="110px"
					sm-height="110px"
					sm-top="-46px"
					width="218px"
					bottom="auto"
					right="-0px"
					xs-top="-38px"
					src="https://uploads.quarkly.io/5f730004864724001fc89f3f/images/burger-illustration.png?v=2020-10-09T08:32:38.484Z"
					lg-width="160px"
					xs-right="-15px"
					transform="rotate(-30deg)"
					filter="drop-shadow(-5px 12px 19px rgba(52,38,28,0.34)) drop-shadow(-3px 5px 5px rgba(84,50,20,0.31))"
					xs-bottom="auto"
					xs-height="80px"
					sm-right="-33px"
					height="218px"
					position="absolute"
					left="auto"
					md-right="-15px"
					srcSet="https://smartuploads.quarkly.io/5f730004864724001fc89f3f/images/burger-illustration.png?v=2020-10-09T08%3A32%3A38.484Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f730004864724001fc89f3f/images/burger-illustration.png?v=2020-10-09T08%3A32%3A38.484Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f730004864724001fc89f3f/images/burger-illustration.png?v=2020-10-09T08%3A32%3A38.484Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f730004864724001fc89f3f/images/burger-illustration.png?v=2020-10-09T08%3A32%3A38.484Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f730004864724001fc89f3f/images/burger-illustration.png?v=2020-10-09T08%3A32%3A38.484Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f730004864724001fc89f3f/images/burger-illustration.png?v=2020-10-09T08%3A32%3A38.484Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f730004864724001fc89f3f/images/burger-illustration.png?v=2020-10-09T08%3A32%3A38.484Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 380px) 100vw,100vw"
				/>
			</Box>
			<Box quarkly-title="Content">
				<Components.App>
					<Override slot="Card">
						<Override slot="Card :odd" margin="0px 36px 36px 0px" md-margin="0px 0px 36px 0px" />
						<Override
							slot="Card Country Flag"
							padding="0px 8px 0px 0px"
							width="1.35em"
							sm-font="14px sans-serif"
							font="16px --fontFamily-sans"
							sm-width="0.6em"
						/>
						<Override
							slot="Card Total Value"
							font="--base"
							color="--darkL2"
							sm-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							margin="0px 0px 0px 0.2em"
						/>
						<Override slot="Card Total" display="flex" align-items="center" />
						<Override
							slot="Card Total Descr"
							font="--base"
							color="--greyD2"
							sm-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							margin="0px 0px 0px 0px"
						/>
						<Override
							slot="Card"
							background="#FFFFFF"
							lg-width="calc(50% - 36px)"
							display="flex"
							padding="18px 24px 24px 24px"
							flex-direction="column"
							lg-justify-content="flex-start"
							width="calc(50% - 18px)"
							md-width="100%"
							border-radius="8px"
							box-sizing="border-box"
							align-items="flex-start"
							justify-content="flex-start"
							box-shadow="0px 6px 18px -8px rgba(47, 41, 33, 0.24)"
							margin="0px 0px 36px 0px"
						/>
						<Override slot="Card Header" display="flex" align-items="flex-end" margin="0px 0px 6px 0px" />
						<Override slot="Card List" min-width="100%" cursor="default" margin="0px 0px 14px 0px" />
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
							left="0px"
							margin="0px -0.35em 0px 0px"
							width="1.35em"
							display="inline-block"
							position="relative"
							right="-0.35em"
						/>
						<Override
							slot="Card Item Hide"
							top="0"
							border-radius="50%"
							opacity="1"
							width="100%"
							height="100%"
							background="white"
							position="absolute"
						/>
						<Override slot="Card Country" margin="0px 0px 2px 0px" />
						<Override
							slot="Card Footer"
							justify-content="space-between"
							width="100%"
							margin="auto 0px 0px 0px"
							display="flex"
							align-items="center"
						/>
						<Override
							slot="Card Price"
							flex="0 0 auto"
							color="--greyD2"
							display="flex"
							align-items="center"
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
					</Override>
					<Override slot="Input" width="320px" lg-width="auto" sm-margin="0px 0px 24px 0px">
						<Override
							slot="Input Input"
							padding="6px 16px 6px 36px"
							lg-padding="4px 16px 4px 36px"
							md-font="normal 500 28px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							md-width="160px"
							sm-width="100%"
							height="74px"
							font="--headline2"
							border-radius="8px"
							width="320px"
							color="--darkL2"
							lg-width="220px"
							focus-border-color="--color-primary"
							md-height="58px"
							lg-font="normal 500 32px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							lg-height="60px"
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
							right="auto"
							color="#939a9f"
							md-bottom="auto"
							sm-bottom="0px"
							md-top="20px"
							left="12px"
							height="62px"
							font="22px/40px sans-serif"
							md-font="18px/40px sans-serif"
							bottom="auto"
							lg-bottom="auto"
							lg-top="20px"
						/>
					</Override>
					<Override
						slot="Basic options"
						padding="0px 0px 18px 0px"
						sm-flex-direction="column"
						sm-padding="0px 0px 22px 0px"
						box-sizing="border-box"
						display="flex"
						justify-content="stretch"
					/>
					<Override slot="Range">
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
					</Override>
					<Override slot="Sort">
						<Override slot="Sort Direction" color="--greyD2" />
						<Override slot="Sort" sm-margin="0px 0px 12px 0px" />
						<Override
							slot="Sort Label"
							font="--base"
							md-font="normal 300 14px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							margin="0px 8px 0px 0px"
							color="--greyD2"
						/>
						<Override
							slot="Sort Select"
							height="35px"
							font="13px/1.3 --fontFamily-sans"
							border-color="--color-lightD2"
							width="120px"
							padding="0px 0px 1px 6px"
							color="--darkL2"
							border-width="2px"
							border-radius="8px"
							margin="0px 10px 0px 0px"
						/>
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
							height="35px"
							color="--darkL2"
							border-radius="8px"
							margin="0px 10px 0px 0px"
							width="120px"
							padding="0px 0px 1px 6px"
							font="13px/1.3 --fontFamily-sans"
							border-color="--color-lightD2"
							border-width="2px"
						/>
					</Override>
					<Override
						slot="Other options"
						justify-content="space-between"
						margin="0px 0px 32px 0px"
						sm-flex-direction="column"
						display="flex"
					/>
					<Override slot="Content" box-sizing="border-box" display="flex" flex-wrap="wrap" />
				</Components.App>
			</Box>
		</Section>
		<Section
			padding="0px 0 80px 0"
			xs-padding="40px 0 20px 0"
			quarkly-title="Footer"
			background="--color-lightD2"
			inner-max-width="1000px"
		>
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Link
				text-decoration-line="initial"
				target="_blank"
				href="https://github.com/TheEconomist/big-mac-data"
				display="flex"
				align-items="center"
			>
				<Text font="--base" color="--greyD2" margin="16px 10px 16px 0px">
					Data from
				</Text>
				<Image width="24px" height="auto" src="https://avatars2.githubusercontent.com/u/33934691?s=200&v=4" margin="0px 5px 0px 0px" />
				<Text font="normal 500 16px/1.2 --fontFamily-sans" color="#191e22" margin="16px 8px 16px 0px">
					The Economist
				</Text>
			</Link>
			<Link
				target="_blank"
				href="https://en.wikipedia.org/wiki/Big_Mac_Index"
				display="flex"
				text-decoration-line="initial"
				font="--base"
			>
				<Text color="--greyD2" display="flex" align-items="center">
					About Big Mac Index
				</Text>
			</Link>
			<Link href="https://quarkly.io/" display="flex" text-decoration-line="initial" target="_blank">
				<Text margin="16px 8px 16px 0px" font="--base" color="--greyD2">
					Made on{" "}
				</Text>
				<Image src="https://uploads.quarkly.io/5f730004864724001fc89f3f/images/logo-on-light.svg?v=2020-10-08T07:10:58.147Z" width="94px" height="auto" />
			</Link>
		</Section>
		<RawHtml>
			<script type={"text/javascript"} crossorigin={""} place={"endOfHead"} rawKey={"6020ed016b4053e1ecc98e5d"}>
				{" (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n   (window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\n\n   ym(72077647, \"init\", {\n        clickmap:true,\n        trackLinks:true,\n        accurateTrackBounce:true\n   });"}
			</script>
		</RawHtml>
	</Theme>;
});