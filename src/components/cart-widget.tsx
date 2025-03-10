"use client";

import { useCart } from "@/context/cart-context";
import { ShoppingBag } from "lucide-react";

export function CartWidget() {
  const { items } = useCart();

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="size-4" />
      <span className="text-sm">Car({items.length})</span>
    </div>
  );
}
