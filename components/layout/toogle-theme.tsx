import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun } from "lucide-react";

export const ToggleTheme = () => {
  const { setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme("light")}
      size="sm"
      variant="ghost"
      className="w-full justify-start"
    >
      <div className="flex gap-2">
        <Sun className="size-5" />
        <span className="block lg:hidden">Claro</span>
      </div>
      <span className="sr-only">Trocar de tema</span>
    </Button>
  );
};