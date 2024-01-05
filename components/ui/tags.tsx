"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "./scroll-area";
import Image from "next/image";
interface Option {
  image: any;
  value: string;
  label: string;
}

interface ComboboxProps {
  options: Option[];
  onSelect: (value: string, image: string) => void;
  onchange:(value: string) => void;
}

export function Combobox({ options, onSelect ,onchange}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between border-none "
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select option..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="start"
        className="w-[200px]   overflow-auto overflow-y-auto p-0 text-black dark:text-white dark:bg-black bg-white"
      >
        <ScrollArea className="h-[130px] rounded-md border">
          <Command>
            <CommandInput placeholder="Search option..." className="h-9" />
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  onChange={onchange}
                  className=""
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    onSelect(currentValue,option.image);
                  }}
                  
                >
                  <div className="flex flex-row-reverse w-fit gap-5 items-center">
                  {option.label}
                  <Image src={option.image} alt={option.label} width={32} height={12} />
                  </div>
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
