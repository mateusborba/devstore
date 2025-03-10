import { api } from "@/data/api";
import type { Product } from "@/data/types/products";
import { env } from "@/env";
import { ImageResponse } from "next/og";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  });

  const product = await response.json();

  return product;
}

export default async function OgImage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  const productImageUrl = new URL(product.image, env.APP_URL).toString();

  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={productImageUrl} alt="" style={{ width: "100%" }} />
      </div>
    ),
    {
      ...size,
    }
  );
}
