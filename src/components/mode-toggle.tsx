"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <RadioGroup
        defaultValue="system"
        onValueChange={(value: string) => setTheme(value)}
      >
        <Label
          htmlFor="light"
          className="flex-between h-11 w-full p-3 rounded-xl hover:bg-bg-4"
        >
          <span className="font-semibold text-[17px] text-text-1">Off</span>
          <RadioGroupItem
            value="light"
            id="light"
            className="border-text-1 data-[state=checked]:border-radio-checked data-[state=checked]:text-radio-checked"
          />
        </Label>
        <Label
          htmlFor="dark"
          className="flex-between h-11 w-full p-3 rounded-xl hover:bg-bg-4"
        >
          <span className="font-semibold text-[17px] text-text-1">On</span>
          <RadioGroupItem
            value="dark"
            id="dark"
            className="border-text-1 data-[state=checked]:border-radio-checked data-[state=checked]:text-radio-checked"
          />
        </Label>
        <Label
          htmlFor="system"
          className="flex-between h-11 w-full p-3 rounded-xl hover:bg-bg-4"
        >
          <span className="font-semibold text-[17px] text-text-1">
            Automatic
          </span>
          <RadioGroupItem
            value="system"
            id="system"
            className="border-text-1 data-[state=checked]:border-radio-checked data-[state=checked]:text-radio-checked"
          />
        </Label>
      </RadioGroup>
    </div>
  );
}
