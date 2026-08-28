"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const MAX_CHARS = 280;

export default function ComposeBox() {
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const remaining = MAX_CHARS - text.length;
  const overLimit = remaining < 0;
  const canSubmit = text.trim().length > 0 && !overLimit && !submitting;

  async function handleSubmit() {
    if (!canSubmit) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: text.trim() }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Failed to post");
      }

      setText("");
      router.refresh(); // re-run the server component fetch, new post appears
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="border-b border-gray-200 px-4 py-3">
      <div className="flex gap-3">
        <Image
          src="/avatars/user.jpg"
          alt="You"
          width={80}
          height={80}
          className="h-10 w-10 rounded-full bg-gray-200 shrink-0"
        />
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's happening?"
            rows={3}
            disabled={submitting}
            className="w-full resize-none text-lg placeholder-gray-400 focus:outline-none disabled:opacity-60"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <div className="flex items-center justify-end gap-3 mt-2">
            <span className={`text-sm ${overLimit ? "text-red-500" : "text-gray-400"}`}>
              {remaining}
            </span>
            <button
              disabled={!canSubmit}
              onClick={handleSubmit}
              className="bg-blue-500 text-white font-semibold px-4 py-1.5 rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              {submitting ? "Posting…" : "Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}