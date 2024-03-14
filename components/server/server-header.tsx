"use client";
import { useEffect } from 'react'; // Import useEffect hook
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole } from "@prisma/client";
import { 
  ChevronDown, 
  LogOut, 
  PlusCircle, 
  Settings, 
  Trash, 
  UserPlus,
  Users
} from "lucide-react";

import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useModal } from "@/hooks/use-modal-store";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
};

export const ServerHeader = ({
  server,
  role
}: ServerHeaderProps) => {
  const { onOpen } = useModal();

  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;

  useEffect(() => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        { element: '#dd', popover: { title: 'Server controls', description: 'Click the Down arrow and watch more options.', side: "left", align: 'start' }},
        { element: '#Invite', popover: { title: 'Invite People', description: 'Invite people by sharing a link to join the server.', side: "left", align: 'start' }},
        { element: '#Server', popover: { title: 'Server Settings', description: 'Customize your server\'s name and image to personalize your community\'s identity and enhance engagement.', side: "bottom", align: 'start' }},
        { element: '#Manage', popover: { title: 'Manage Members', description: 'Manage Members and Promote Moderators.', side: "bottom", align: 'start' }},
        { element: '#Create', popover: { title: 'Create Channel', description: 'Create Channel like text,audio and video', side: "left", align: 'start' }},
        { element: '#Delete', popover: { title: 'Delete Server', description: 'Deleting the server results in the loss of all associated channels and their content.', side: "left", align: 'start' }},
      ]
    });
  
    driverObj.drive();
  }, []);
  
  

  return (
    <DropdownMenu >
      <DropdownMenuTrigger
       
        className="focus:outline-none" 
        asChild
      >
        <button
        id='dd'
          className="w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
        >
          {server.name}
          <ChevronDown className="h-5 w-5 ml-20 lg:ml-auto " />
        </button>

      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]"
      
      >
        {isModerator && (
          <DropdownMenuItem
            onClick={() => onOpen("invite", { server })}
            className="text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer"
            id="Invite"
          >
            Invite People
            <UserPlus className="h-4 w-4 ml-auto"  />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen("editServer", { server })}
            className="px-3 py-2 text-sm cursor-pointer"
            id="Server"
          >
            Server Settings
            <Settings className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen("members", { server })}
            className="px-3 py-2 text-sm cursor-pointer"
            id="Manage" 
          >
            Manage Members
            <Users className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isModerator && (
          <DropdownMenuItem
            onClick={() => onOpen("createChannel")}
            className="px-3 py-2 text-sm cursor-pointer"
            id="Create"
          >
            Create Channel
            <PlusCircle className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isModerator && (
          <DropdownMenuSeparator />
        )}
        {isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen("deleteServer", { server })}
            className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
            id="Delete"
          >
            Delete Server
            <Trash className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {!isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen("leaveServer", { server })}
            className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
          >
            Leave Server
            <LogOut className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
