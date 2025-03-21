import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { FiEye, FiLogOut, FiPlus } from "react-icons/fi";

const CommandMenu = ({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

    const [value, setValue] = useState("");

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [setOpen]);

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className="fixed inset-0  bg-stone-950/50 z-10"
            onClick={() => setOpen(false)}
        >
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12">
                <Command.Input
                    placeholder="What do you need?"
                    className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
                    value={value}
                    onValueChange={setValue}
                />
                <Command.List className="p-3">
                    <Command.Empty>No results found{" "}<span className="text-violet-500">{value}</span></Command.Empty>

                    <Command.Group heading="Team" className="text-sm mb-3 text-stone-400">
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiPlus /> See Org Chart
                        </Command.Item>
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiEye /> Invite Member
                        </Command.Item>
                    </Command.Group>

                    <Command.Group heading="Integration" className="text-sm mb-3 text-stone-400">
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiPlus /> Menu
                        </Command.Item>
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiEye /> Change
                        </Command.Item>
                    </Command.Group>

                    <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-50 hover:bg-stone-950 rounded items-center gap-2">
                        <FiLogOut />Sign Out
                    </Command.Item>
                </Command.List>
            </div>
        </Command.Dialog>
    );
};

export default CommandMenu;
