import Script from "next/script";
import AppShell from "../components/layout/AppShell";
import "./globals.css";
import PageLoader from "../common/page-loader/PageLoader";

const ASSET_ROOT = "/assets";

const createAssetPaths = (directory, files) =>
  files.map((file) => `${ASSET_ROOT}/${directory}/${file}`);

const vendorStylesheets = [
  ...createAssetPaths("vendors/bootstrap/css", ["bootstrap.min.css"]),
  ...createAssetPaths("vendors/animate", ["animate.min.css", "custom-animate.css"]),
  ...createAssetPaths("vendors/fontawesome/css", ["all.min.css"]),
  ...createAssetPaths("vendors/jquery-magnific-popup", ["jquery.magnific-popup.css"]),
  ...createAssetPaths("vendors/nouislider", ["nouislider.min.css", "nouislider.pips.css"]),
  ...createAssetPaths("vendors/odometer", ["odometer.min.css"]),
  ...createAssetPaths("vendors/swiper", ["swiper.min.css"]),
  ...createAssetPaths("vendors/conult-icons", ["style.css"]),
  ...createAssetPaths("vendors/tiny-slider", ["tiny-slider.min.css"]),
  ...createAssetPaths("vendors/reey-font", ["stylesheet.css"]),
  ...createAssetPaths("vendors/owl-carousel", ["owl.carousel.min.css", "owl.theme.default.min.css"]),
  ...createAssetPaths("vendors/bxslider", ["jquery.bxslider.css"]),
  ...createAssetPaths("vendors/vegas", ["vegas.min.css"]),
  ...createAssetPaths("vendors/jquery-ui", ["jquery-ui.css"]),
  ...createAssetPaths("vendors/timepicker", ["timePicker.css"]),
  ...createAssetPaths("vendors/nice-select", ["nice-select.css"]),
  ...createAssetPaths("vendors/language-switcher", ["polyglot-language-switcher.css"]),
  ...createAssetPaths("css", ["style.css", "theme-unit.css", "responsive.css"]),
];

const vendorScripts = [
  ...createAssetPaths("vendors/jquery", ["jquery-3.6.0.min.js"]),
  ...createAssetPaths("vendors/wow", ["wow.js"]),
  ...createAssetPaths("vendors/owl-carousel", ["owl.carousel.min.js"]),
];

export const metadata = {
  title: "G7 Cleaning LLC | Professional Cleaning Services in California",
  description:
      "G7 Cleaning LLC offers reliable residential and commercial cleaning services in California. Book professional cleaning for your home or office today.",

  keywords: [
    "cleaning services",
    "house cleaning",
    "office cleaning",
    "deep cleaning",
    "move out cleaning",
    "cleaning company California",
    "G7 Cleaning LLC",
  ],

  authors: [{ name: "G7 Cleaning LLC" }],

  metadataBase: new URL("https://g7cleaning.com"),

  openGraph: {
    title: "G7 Cleaning LLC | Professional Cleaning Services",
    description:
        "Reliable and high-quality cleaning services for homes and businesses. Book your cleaning today.",
    url: "https://g7cleaning.com",
    siteName: "G7 Cleaning LLC",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/images/about/about-v1-img1.webp",
        width: 530,
        height: 570,
        alt: "G7 Cleaning LLC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "G7 Cleaning LLC | Cleaning Services",
    description:
        "Professional cleaning services for homes and offices. Book now.",
    images: ["/assets/images/about/about-v1-img1.webp"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

function ExternalStylesheets() {
  return vendorStylesheets.map((href) => (
    <link key={href} rel="stylesheet" href={href} />
  ));
}

function ExternalScripts() {
  return vendorScripts.map((src) => (
    <Script key={src} src={src} strategy="beforeInteractive" />
  ));
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>G7 Cleaning LLC | Professional Cleaning Services in California</title>
        <ExternalStylesheets />
        <ExternalScripts />
      </head>
      <body>
        <PageLoader />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
