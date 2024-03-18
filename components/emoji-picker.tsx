"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface EmojiPickerProps {
  onChange: (value: string) => void;
}

export const EmojiPicker = ({
  onChange,
}: EmojiPickerProps) => {
  const [isPickerLoaded, setIsPickerLoaded] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/sets/14/native.json");
      const emojiData = await response.json();
      return emojiData;
    };

    fetchData().then(() => {
      setIsPickerLoaded(true);
    });
  }, []);

  const Picker = dynamic(() => import("@emoji-mart/react"), { ssr: false });

  return (
    <Popover>
      <PopoverTrigger>
        <Smile
          className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
        />
      </PopoverTrigger>
      <PopoverContent 
        side="right" 
        sideOffset={40}
        className="bg-transparent border-none shadow-none drop-shadow-none mb-16"
      >
        {isPickerLoaded && (
          <Picker
            theme={resolvedTheme}
            data={data}
            onEmojiSelect={(emoji: any) => onChange(emoji.native)}
          />
        )}
        {/* Use a hidden div to ensure Picker loads before displaying */}
        <div className="hidden"><Picker /></div>
      </PopoverContent>
    </Popover>
  );
};
