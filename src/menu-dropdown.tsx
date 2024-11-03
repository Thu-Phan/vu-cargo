import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ExternalLink } from "lucide-react";

const MenuDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 text-[#FF424D] hover:text-[#d32f39] font-medium px-2 py-1 transition-colors bg-[#FFE145] focus:outline-none">
          Bảng giá
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#FFE145] border-none rounded-none shadow-md">
        <DropdownMenuItem asChild className="focus:bg-[#f5d93d] focus:text-[#FF424D]">
          <a 
            href="https://example.com/page1" 
            className="flex items-center justify-between"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="focus:bg-[#f5d93d] focus:text-[#FF424D]">
          <a 
            href="https://example.com/page2" 
            className="flex items-center justify-between"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="focus:bg-[#f5d93d] focus:text-[#FF424D]">
          <a 
            href="https://example.com/page3" 
            className="flex items-center justify-between"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuDropdown;
