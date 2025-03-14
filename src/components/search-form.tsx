"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { type FormEvent } from "react";

export const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);

    const query = data.q;

    if (!query) {
      return;
    }

    router.push(`/search?q=${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="size-5 text-zinc-500" />
      <input
        defaultValue={query ?? ""}
        type="text"
        name="q"
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  );
};
