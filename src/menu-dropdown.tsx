import React from "react";
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
          Bảng Giá
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#FFE145] border-none rounded-none shadow-md">
        <DropdownMenuItem
          asChild
          className="text-[#181818] focus:bg-[#f5d93d] focus:text-[#FF424D]"
        >
          <a
            href="https://docs.google.com/document/d/1ZmScmeuPj_HbsNKLVjxglf9qK3bAJUsL/"
            className="flex items-center justify-between"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hàng bay airfreight Đức EU → VN
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="text-[#181818] focus:bg-[#f5d93d] focus:text-[#FF424D]"
        >
          <a
            href="https://docs.google.com/document/d/1hCK3KMKS2dV0U-_lZgqI3rEv9b20P6VA"
            className="flex items-center justify-between"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hàng bay airfreight VN → EU
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="text-[#181818] focus:bg-[#f5d93d] focus:text-[#FF424D]"
        >
          <a
            href="https://docs.google.com/document/d/1WLao8tdHVJqSDcHBPb4tl9zCeShQ-GgL"
            className="flex items-center justify-between"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hàng biển seafreight VN → EU
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuDropdown;
