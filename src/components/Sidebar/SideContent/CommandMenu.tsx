import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { FiEye, FiLogOut, FiPlus } from "react-icons/fi";

const items = [
    { id: 1, label: "See Org Chart", icon: <FiPlus />, group: "Team" },
    { id: 2, label: "Invite Member", icon: <FiEye />, group: "Team" },
    { id: 3, label: "Menu", icon: <FiPlus />, group: "Integration" },
    { id: 4, label: "Change", icon: <FiEye />, group: "Integration" },
    { id: 5, label: "Sign Out", icon: <FiLogOut />, group: "Other" },
];

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

    // Filter items based on input value
    const filteredItems = items.filter((item) =>
        item.label.toLowerCase().includes(value.toLowerCase())
    );

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className="fixed inset-0  bg-stone-950/50 z-10"
            onClick={() => setOpen(false)}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
            >
                <Command.Input
                    placeholder="What do you need?"
                    className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
                    value={value}
                    onValueChange={setValue}
                />
                <Command.List className="p-3">
                    {filteredItems.length === 0 ? (
                        <Command.Empty>
                            No results found <span className="text-violet-500">{value}</span>
                        </Command.Empty>
                    ) : (
                        [...new Set(filteredItems.map((item) => item.group))].map((group) => (
                            <Command.Group key={group} heading={group} className="text-sm mb-3 text-stone-400">
                                {filteredItems
                                    .filter((item) => item.group === group)
                                    .map((item) => (
                                        <Command.Item
                                            key={item.id}
                                            className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2"
                                        >
                                            {item.icon} {item.label}
                                        </Command.Item>
                                    ))}
                            </Command.Group>
                        ))
                    )}
                </Command.List>
            </div>
        </Command.Dialog>
    );
};

export default CommandMenu;
